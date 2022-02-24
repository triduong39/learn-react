export type user = {
    userName: string;
    password: string;
};

export type authContextType = {
    currentUser: user | undefined;
    signIn: (userName: string, password: string) => void;
    signOut: () => void;
    isLogged: boolean;
};

export type AuthProviderProps = {
    children: React.ReactNode;
};

// form login
export type onFinishType = {
    password: string;
    username: string;
};

export type onFinishFailedType = {
    values: { password: string; username: string };
};

export type formLoginType = {
    onFinish: (values: onFinishType) => void;
    onFinishFailed: (errorInfo: onFinishFailedType) => void;
};
