import React from 'react';
import Section from './section/section'

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

function SectionList() {
    return (
        <div>
            {getSections.map(val =>{
                return <Section section={val} />
            })}
            
        </div>
    );
}

export default SectionList;
