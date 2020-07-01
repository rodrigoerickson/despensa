import React from 'react';
import Section from './section/section'

const getSections = [
    {
        id:'1',
        label:'Mercearia',
        subSections:[
            {
                id:'1',
                label:'Alimentos Básicos'
            },
            {
                id:'2',
                label:'Ervas-Mate'
            }
        ]
    },
    {
        id:'1',
        label:'Limpeza',
        subSections:[
            {
                id:'1',
                label:'Uso geral'
            },
            {
                id:'2',
                label:'Roupas'
            }
        ]
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
