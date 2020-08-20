import React, { Component} from 'react';
import Button from '../../../shared/button/button';

export default class DeleteSectionf extends Component {
    
    constructor(props) {
        super(props);        
    }
    
    button(variables){
        return (
            <Button
                label="Remover"
                variables={{sectionId:variables.sectionId}}
                click={this.props.click} />
        )
    }
    render() {
        return (<div>{this.button(this.props.variables)}</div>);
    }
}