import React from 'react';
import './App.css';

import SectionList from './components/section-list/section-list'

function App() {
    return (
        <div className="App">
            <h3>
                Organizador de despensa
            </h3>
            <hr />
            <div className="mt-3">
                <SectionList />
            </div>
        </div>
    );
}

export default App;
