import React from 'react';
import './App.scss';
import { Routes, Route } from 'react-router-dom';
import ScssPage from './pages/ScssPage/ScssPage';
import HelloPage from './pages/HelloPage/HelloPage';
import ClassComponentPage from './pages/ClassComponentPage/ClassComponentPage';

import FunctionalComponentPage from './pages/FunctionalComponentPage/FunctionalComponentPage';
import AppLayout from './component/AppLayout';
import ErrorPage from './pages/ErrorPage/ErrorPage';
import ContextPage from './pages/ContextPage/ContextPage';
import ReduxPage from './pages/ReduxPage/ReduxPage';

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
