export type user = {
    id: string;
    userName: string;
    password: string;
};

export type todo = {
    id: string;
    name: string;
    status: boolean;
};

export type todoState = {
    isLoading: boolean;
    todos: todo[];
};

export type todoStatus =
    | {
          status: 'success';
          data: todo[];
      }
    | {
          status: 'error';
          error: string;
      };

export type userLoginInput = {
    userName: string;
    password: string;
};

export type authContextType = {
    currentUser: user | undefined;
    signIn: (userName: string, password: string) => void;
    signOut: () => void;
    isLogged: boolean;
    error: string;
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
    error?: string;
};
