import React, { Component} from 'react';
import Button from '../../../shared/button/button';

export default class DeleteSection extends Component {
    
    constructor(props) {
        super(props);        
    }
    
    button(variables){
        return (
            <Button
                label="Remover"
                variables={{sectionId:variables.sectionId, refresh:variables.refresh}}
                click={this.props.click} />
        )
    }
    render() {
        return (<div>{this.button(this.props.variables)}</div>);
    }
}
