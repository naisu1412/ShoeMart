import { ErrorMessage, Form, Formik } from 'formik';
import { observer } from 'mobx-react-lite';
import React, { useContext } from 'react';
import { Button, Label } from 'semantic-ui-react';
import MyTextInput from '../../app/common/form/MyTextInput';
import { RootStoreContext } from '../../app/stores/rootContext';
import * as Yup from 'yup';
function RegisterForm() {
    const rootStore = useContext(RootStoreContext);
    const { register } = rootStore.userStore;
    return (
        <Formik
            initialValues={{ displayName: '', username: '', email: '', password: '', error: null }}
            onSubmit={(values, { setErrors }) => register(values).catch(error => {
                setErrors({ error: `Cant register` })

                console.log(values)
            }
            )}
            validationSchema={Yup.object({
                displayName: Yup.string().required(),
                username: Yup.string().required(),
                email: Yup.string().required().email(),
                password: Yup.string().required(),
            })}
        >
            {({ handleSubmit, isSubmitting, errors, isValid, dirty }) => (
                <Form className='ui form' onSubmit={handleSubmit} autoComplete='off'>
                    <MyTextInput name='displayName' placeholder='Display Name' />
                    <MyTextInput name='username' placeholder='Username' />
                    <MyTextInput name='email' placeholder='Email' />
                    <MyTextInput name='password' placeholder='Password' type='password' />
                    <ErrorMessage name='error' render={() =>
                        <Label style={{ marginBottom: 10 }} basic color='red' content={errors.error} />
                    } />
                    <Button disabled={!isValid || !dirty || isSubmitting} loading={isSubmitting} positive content='Login' type='submit' fluid />
                </Form>
            )}
        </Formik>
    )
}


export default observer(RegisterForm);