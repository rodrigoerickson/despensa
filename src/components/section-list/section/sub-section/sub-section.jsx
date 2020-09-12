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

    getSubSectionsUpdatedAmount(subSections, amount, index, subSection){
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
        this.getSubSectionsUpdatedAmount(this.props.subSections,parseInt(variables.subSection.amount)+1, variables.index, variables.subSection);
        this.updateSubSection(variables.subSection,variables.sectionId,variables.index);
    }
    
    remove(variables){
        this.getSubSectionsUpdatedAmount(this.props.subSections,parseInt(variables.subSection.amount)-1, variables.index, variables.subSection);
        this.updateSubSection(variables.subSection,variables.sectionId,variables.index);
    }

    updateSubSection(subSection,sectionId,index){
        this.props.putSubSection(subSection, sectionId, index)
    }


    render() {
        return (<div>{this.lineSubSection(this.props, this.add, this.remove)}</div>);
    }
}
