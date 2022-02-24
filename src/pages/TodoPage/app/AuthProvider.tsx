import * as React from 'react';
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

    function signIn(userName: string, password: string) {
        console.log(userName);
        console.log(password);
        setCurrentUser({ userName, password });
    }

    function signOut() {
        setCurrentUser(undefined);
    }

    const value = {
        currentUser,
        signIn,
        signOut,
        isLogged: Boolean(currentUser),
    };

    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
