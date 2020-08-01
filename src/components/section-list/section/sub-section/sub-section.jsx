import React, { Component } from 'react';
import Button from '../../../shared/button/button'
import axios from 'axios';
const URL = 'http://localhost:3003/api';

export default class SubSection extends Component {

    constructor(props) {
        super(props);
        this.add = this.add.bind(this);
        this.remove = this.remove.bind(this);
        this.state = {...props.subSections};
    }

    lineSubSection = (section, add, remove) => {
        return section.subSections.map((val, index) => {
            return (
                <div key={val._id}>
                    <div>
                        {val.name} - 
                        {val.amount} 
                        <Button label="adicionar" sectionId={section._id} subSection={val} click={add} index={index}></Button> 
                        <Button label="remover" sectionId={section._id} subSection={val} click={remove} index={index}></Button>
                    </div>
                </div>
            )
        })
    }

    getSubSectionUpdateAmount(subSections, amount, index, subSection){
        return subSections.map((val,i)=>{
            if(index === i){
                subSection.amount = amount
                return subSection
            }else{
                return val
            }
        })
    }

    add(subSection, index, sectionId){
        const subSections = this.getSubSectionUpdateAmount(this.state.subSections,parseInt(subSection.amount)+1, index, subSection)
        this.updateSubSection(subSections, subSection,sectionId,index)
    }
    
    remove(subSection, index, sectionId){
        const subSections = this.getSubSectionUpdateAmount(this.state.subSections,parseInt(subSection.amount)-1, index, subSection)
        this.updateSubSection(subSections, subSection,sectionId,index);
    }

    updateSubSection(subSections, subSection,sectionId,index){
        this.setState({subSections})
        this.putSubSection(subSection, sectionId, index);
    }
    
    putSubSection(subSection, sectionId, index){
        const requestBody = JSON.parse(`{"subSections.${index}.amount":"${subSection.amount}"}`);
        axios.put(`${URL}/sections/${sectionId}`, requestBody).then((resp)=>{
            this.setState({...resp.data})
        })
    }

    render() {
        return (<div>{this.lineSubSection(this.state, this.add, this.remove)}</div>);
    }
}
