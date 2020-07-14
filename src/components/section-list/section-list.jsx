import React, {Component} from 'react';
import Section from './section/section'

const getSections = [
    {
        id:'1',
        label:'Mercearia',
        subSections:[
            {
                id:'1',
                label:'Alimentos Básicos',
                amount:2
            },
            {
                id:'2',
                label:'Ervas-Mate',
                amount:2
            }
        ]
    },
    {
        id:'1',
        label:'Limpeza',
        subSections:[
            {
                id:'1',
                label:'Uso geral',
                amount:2
            },
            {
                id:'2',
                label:'Roupas',
                amount:2
            }
        ]
    }
]

export default class SectionList extends Component {
    render(){
        return (
            <div>
                {getSections.map(val =>{
                    return <Section section={val} />
                })}
                
            </div>
        );
    }
}