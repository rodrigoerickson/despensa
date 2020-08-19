import React, { Component } from 'react';
import Section from './section/section';
import axios from 'axios';
import Button from '../shared/button/button';
import { render } from '@testing-library/react';

const URL = 'http://localhost:3003/api/';

export default class SectionList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            list: [],
            inputValue: ''
        };
        this.getSections = this.getSections.bind(this);
        this.getSections();
    }

    getSections() {
        axios.get(`${URL}sections?sort=createdAt`)
            .then(resp => {
                this.setState({ ...this.state, list: resp.data });
                render();
            })
    }

    addNewSection(variables) {
        const requestBody = JSON.parse(`{"name":"${variables.inputValue}"}`);
        axios.post(`${URL}/sections/`, requestBody).then((r) => {})
    }

    render() {
        return (
            <>
                <input
                    type="text"
                    value={this.state.inputValue}
                    onChange={(e) => { this.setState({ inputValue: e.target.value }) }} />
                <Button label="Adicionar"
                    variables={{ inputValue: this.state.inputValue }}
                    click={this.addNewSection} />
                <div>
                    {this.state.list.map((val) => {
                        return <Section key={val._id} section={val} refresh={this.getSections} />
                    })}
                </div>
            </>
        );
    }
}