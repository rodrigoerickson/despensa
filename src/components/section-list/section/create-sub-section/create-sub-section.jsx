import React, { Component} from 'react';
import Button from '../../../shared/button/button';

export default class CreateSubSection extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
            inputValue:''
        };
    }
    
    button(variables, addNewSubSection){
        return (
            <Button
                label="Adicionar"
                variables={{...variables}}
                click={addNewSubSection} />
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
        return (<div>
                {this.input()} 
                {
                    this.button(
                        {
                            sectionId:this.props.variables.sectionId, 
                            refresh:this.props.variables.refresh, 
                            inputValue:this.state.inputValue,
                        },
                        this.props.addNewSubSection
                    )
                }
                </div>);
    }
}
