import { ErrorMessage, Form, Formik } from 'formik';
import { observer } from 'mobx-react-lite';
import React, { useContext } from 'react';
import { Button, Label } from 'semantic-ui-react';
import MyTextInput from '../../app/common/form/MyTextInput';
import { RootStoreContext } from '../../app/stores/rootContext';
function LoginForm() {
    const rootStore = useContext(RootStoreContext);
    const { login } = rootStore.userStore;
    return (
        <Formik
            initialValues={{ email: '', password: '', error: null }}
            onSubmit={(values, { setErrors }) => login(values).catch(error =>
                setErrors({ error: 'Invalid email or password' }))}
        >
            {({ handleSubmit, isSubmitting, errors }) => (
                <Form className='ui form' onSubmit={handleSubmit} autoComplete='off'>
                    <MyTextInput name='email' placeholder='Email' />
                    <MyTextInput name='password' placeholder='Password' type='password' />
                    <ErrorMessage name='error' render={() =>
                        <Label style={{marginBottom: 10}} basic color='red' content={errors.error} />
                    } />
                    <Button loading={isSubmitting} positive content='Login' type='submit' fluid />
                </Form>
            )}
        </Formik>
    )
}


export default observer(LoginForm);