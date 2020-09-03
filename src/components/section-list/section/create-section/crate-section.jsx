import React, { Component} from 'react';
import Button from '../../../shared/button/button';

export default class CreateSection extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
            newSectionInputVal:''
        };
    }
    
    buttonAddNewSection(newSectionInputVal, addNewSection){
        return (
            <Button
                label="Adicionar"
                variables={{newSectionInputVal:newSectionInputVal}}
                click={addNewSection} />
        )
    }

    inputNewSection(newSectionInputVal){
        return (
            <input
                type="text"
                value={newSectionInputVal}
                onChange={e => {this.setState({ newSectionInputVal: e.target.value })}} />
        )
    }

    render() {
        return (<>
                {this.inputNewSection(this.state.newSectionInputVal)}
                {this.buttonAddNewSection(this.state.newSectionInputVal, this.props.addNewSection)}
            </>);
    }
}
