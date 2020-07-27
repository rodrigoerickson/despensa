import React, {Component} from 'react';
import Section from './section/section';
import axios from 'axios';

const URL = 'http://localhost:3003/api/';

export default class SectionList extends Component {
    constructor(props) {
        super(props);
        this.state = {list:[]};
        this.getSections();
    }

    getSections() {
        axios.get(`${URL}sections?sort=createdAt`)
        .then(resp => {
            this.setState({...this.state, list:resp.data});
        })
    }

    render(){
        return (
            <div>
                {this.state.list.map((val) =>{
                    return <Section key={val._id} section={val} />
                })}
            </div>
        );
    }
}