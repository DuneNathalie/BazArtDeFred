import React from 'react';
import { Route, Routes } from 'react-router-dom';

import Home from './pages/Home/Home';

const App: React.FC = () => {
    return (
        <div>
            <Routes>
                <Route path='/' element={<Home />} />
            </Routes>
        </div>
    );
};

export default App;
