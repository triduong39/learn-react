import * as React from 'react';
import { Route, Routes } from 'react-router-dom';
import ExamplePage from './page/ExamplePage';
import ThunkPage from './page/ThunkPage';

export default function ReduxApp() {
    return (
        <>
            <Routes>
                <Route path="/" element={<ExamplePage />} />
                <Route path="example" element={<ExamplePage />} />
                <Route path="thunk" element={<ThunkPage />} />
            </Routes>
        </>
    );
}
