import React from 'react';
import './App.css';

import PantryList from './components/pantry-list/pantry-list'

function App() {
    return (
        <div className="App">
            <h3>
                Organizador de despensa
            </h3>
            <hr />
            <div className="mt-3">
                <PantryList />
            </div>
        </div>
    );
}

export default App;
