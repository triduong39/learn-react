import * as React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.scss';
import AppLayout from './component/AppLayout';
import ClassComponentPage from './pages/ClassComponentPage/ClassComponentPage';
import ContextPage from './pages/ContextPage/ContextPage';
import ErrorPage from './pages/ErrorPage/ErrorPage';
import FunctionalComponentPage from './pages/FunctionalComponentPage/FunctionalComponentPage';
import HelloPage from './pages/HelloPage/HelloPage';
import ReduxPage from './pages/ReduxPage/ReduxPage';
import ScssPage from './pages/ScssPage/ScssPage';

function App() {
    return (
        <AppLayout>
            <Routes>
                <Route path="/" element={<ScssPage />} />
                <Route path="/css" element={<ScssPage />} />
                <Route path="/hello" element={<HelloPage />} />
                <Route path="/class" element={<ClassComponentPage initState={3} />} />
                <Route path="/func" element={<FunctionalComponentPage initState={4} />} />
                <Route path="/context" element={<ContextPage />} />
                <Route path="/redux/*" element={<ReduxPage />} />
                <Route path="*" element={<ErrorPage />} />
            </Routes>
        </AppLayout>
    );
}

export default App;
