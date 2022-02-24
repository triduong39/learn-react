import * as React from 'react';
import Login from './page/Login';
import Home from './page/Home';
import { useAuth } from './app/AuthProvider';
import { AppWraper } from './component/AppWraper.styled';

export default function TodoApp() {
    const { isLogged } = useAuth();
    return <AppWraper>{isLogged ? <Login /> : <Home />}</AppWraper>;
}
