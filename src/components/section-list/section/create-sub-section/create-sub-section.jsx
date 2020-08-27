import React, { Component} from 'react';
import Button from '../../../shared/button/button';

export default class CreateSubSection extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
            inputValue:''
        };
    }
    
    button(sectionId,refresh, inputValue){
        return (
            <Button
                label="Adicionar"
                variables={{sectionId:sectionId,refresh:refresh, inputValue:inputValue}}
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

    render() {
        return (<div>{this.input()} {this.button(this.props.variables.sectionId, this.props.variables.refresh, this.state.inputValue)}</div>);
    }
}
