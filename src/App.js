import React from 'react';
import './App.css';

import PageSections from './pages/sections'

function App() {
    return (
        <div className="App">
            <h3>
                Organizador de despensa
            </h3>
            <hr />
            <div className="mt-3">
                <PageSections />
            </div>
        </div>
    );
}

export default App;
