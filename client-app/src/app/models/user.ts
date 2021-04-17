export interface User {
    username: string;
    displayName: string;
    token: string;
}

export interface UserFormValues {
    email: string;
    password: string;
    displayname?: string;
    username?: string;
}