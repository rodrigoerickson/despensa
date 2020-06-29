import React from 'react';
import Pantry from './pantry/pantry'

const getSections = [
    {
        id:'1',
        label:'Mercearia'
    },
    {
        id:'1',
        label:'Limpeza'
    }
]

function PantryList() {
    return (
        <div>
            {getSections.map(val =>{
                return <Pantry section={val} />
            })}
            
        </div>
    );
}

export default PantryList;
