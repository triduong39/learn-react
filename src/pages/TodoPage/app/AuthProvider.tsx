import * as React from 'react';
import { login } from '../api/userApi';
import { authContextType, AuthProviderProps, user } from './types';

const AuthContext = React.createContext<authContextType | null>(null);

export function useAuth() {
    const context = React.useContext(AuthContext);
    if (!context) {
        throw new Error('useAuth must be used in AuthProvider component');
    }
    return context;
}

export function AuthProvider({ children }: AuthProviderProps) {
    const [currentUser, setCurrentUser] = React.useState<user>();
    const [error, setError] = React.useState('');

    async function signIn(userName: string, password: string) {
        setError('');
        const res = await login(userName, password);

        if (res.data?.data?.login) {
            setCurrentUser({ id: res.data.data.login, userName, password });
        } else {
            setError(res.data?.errors?.[0]?.message || 'something went wrong!');
        }
    }

    function signOut() {
        setError('');
        setCurrentUser(undefined);
    }

    const value = {
        currentUser,
        signIn,
        signOut,
        isLogged: Boolean(currentUser),
        error,
    };

    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
