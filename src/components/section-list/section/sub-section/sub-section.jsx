import React, { Component } from 'react';
import Button from '../../../shared/button/button'

export default class SubSection extends Component {

    constructor(props) {
        super(props);
        this.add = this.add.bind(this);
        this.remove = this.remove.bind(this);
        this.state = {...props.subSections};
    }

    lineSubSection = (props) => {
        return props.subSections.map((val, index) => {
            return (
                <div key={val._id}>
                    {val.name}
                    <input type="text" value={this.state[index].amount}></input>
                    <Button label="adicionar" amount={parseInt(val.amount)} click={this.add} index={index}></Button>
                    <Button label="remover" amount={parseInt(val.amount)} click={this.remove} index={index}></Button>
                </div>
            )
        })
    }

    add(amount, index){
        this.state[index].amount = parseInt(this.state[index].amount)+1;
        this.setState({ amount});
    }

    remove(amount, index){
        this.state[index].amount = parseInt(this.state[index].amount)-1;
        this.setState({ amount});
    }

    render() {
        return (<div>{this.lineSubSection(this.props)}</div>);
    }
}
