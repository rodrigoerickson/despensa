import React, { Component} from 'react';
import Button from '../../../shared/button/button';

export default class CreateSection extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
            newSectionInputVal:''
        };
    }
    
    button(newSectionInputVal, addNewSection){
        return (
            <Button
                label="Adicionar"
                variables={{newSectionInputVal:newSectionInputVal}}
                click={addNewSection} />
        )
    }

    input(newSectionInputVal){
        return (
            <input
                type="text"
                value={newSectionInputVal}
                onChange={(e) => {this.setState({ newSectionInputVal: e.target.value })}} />
        )
    }

    render() {
        return (<div>{this.input(this.state.newSectionInputVal, this.setState)} {this.button(this.state.newSectionInputVal, this.props.addNewSection)}</div>);
    }
}
