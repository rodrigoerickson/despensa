import React, { Component} from 'react';
import Button from '../../../shared/button/button';
import axios from 'axios';
const URL = 'http://localhost:3003/api/';

export default class CreateSubSection extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
            inputValue:'',
            // ...props
        };
        
    }
    
    button(sectionId, inputValue){
        return (
            <Button
                label="Adicionar"
                variables={{sectionId:sectionId, inputValue:inputValue}}
                click={this.props.handleAddSubsection} />
        )
    }

    input(){
        return (
            <input
                type="text"
                value={this.state.inputValue}
                onChange={(e) => {this.setState({ inputValue: e.target.value })}} />
        )
    }

    // addNewSubSection(variables){
    //     axios.get(`${URL}sections/${variables.sectionId}?sort=createdAt`)
    //         .then(resp => {
    //             const requestBody = JSON.parse(`
    //                 {"subSections.${resp.data.subSections.length}.amount":"0",
    //                 "subSections.${resp.data.subSections.length}.name":"${variables.inputValue}"}
    //             `);
    //             axios.put(`${URL}/sections/${variables.sectionId}`, requestBody).then((r)=>{
    //                 // console.log(this.props)
    //                 // console.log(this.state)
    //             })  
    //         })
    // }

    render() {
        return (<div>{this.input()} {this.button(this.props.sectionId, this.state.inputValue)}</div>);
    }
}