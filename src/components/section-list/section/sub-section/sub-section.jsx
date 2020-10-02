import React, { Component } from 'react';
import {ButtonAiFillPlusCircle, ButtonAiFillMinusCircle} from '../../../shared/button/button'
import './sub-section.css'

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

    add(variables){
        this.updateSubSection(variables.sectionId,variables.index, parseInt(variables.subSection.amount)+1);
    }
    
    remove(variables){
        this.updateSubSection(variables.sectionId,variables.index, parseInt(variables.subSection.amount)-1);
    }

    updateSubSection(sectionId,index, amout){
        this.props.putSubSection(sectionId, index, amout)
    }

    render() {
        return (<div>{this.lineSubSection(this.props, this.add, this.remove)}</div>);
    }
}
