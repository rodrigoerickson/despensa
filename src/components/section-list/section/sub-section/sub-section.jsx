import React, { Component } from 'react';
import {ButtonAiFillPlusCircle, ButtonAiFillMinusCircle} from '../../../shared/button/button'
import axios from 'axios';
import './sub-section.css'
import {environment} from '../../../../environment'

const URL = environment.api;

export default class SubSection extends Component {

    constructor(props) {
        super(props);
        this.add = this.add.bind(this);
        this.remove = this.remove.bind(this);
        this.state = {...props};
    }

    lineSubSection = (section, add, remove) => {
        
        return (section.subSections.length)?
        section.subSections.map((val, index) => {
            const variables = {
                sectionId:section.sectionId,
                subSection:val,
                index
            }
            return (
                <div key={val._id} className="d-flex justify-content-center">
                    <div className="subSection-line-border row w-75 d-flex justify-content-center">
                        <div className="col-3">{val.name}</div>
                        <div className="col-1">{val.amount}</div>
                        <div className="col-4">
                            <ButtonAiFillPlusCircle  variables={variables} click={add}></ButtonAiFillPlusCircle>
                            <ButtonAiFillMinusCircle  variables={variables} click={remove}></ButtonAiFillMinusCircle>
                        </div>
                    </div>
                </div>
            )
        })
        :<span>SubList vazia.</span>
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

    add(variables){
        const subSections = this.getSubSectionUpdateAmount(this.state.subSections,parseInt(variables.subSection.amount)+1, variables.index, variables.subSection);
        this.updateSubSection(subSections, variables.subSection,variables.sectionId,variables.index);
    }
    
    remove(variables){
        const subSections = this.getSubSectionUpdateAmount(this.state.subSections,parseInt(variables.subSection.amount)-1, variables.index, variables.subSection);
        this.updateSubSection(subSections, variables.subSection,variables.sectionId,variables.index);
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
