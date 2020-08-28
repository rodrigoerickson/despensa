import React, { Component } from 'react';
import Section from '../components/section-list/section/section';
import axios from 'axios';
import Button from '../components/shared/button/button';
import {environment} from '../environment'

const URL = environment.api;

export default class PageSections extends Component {
    constructor(props) {
        super(props);
        this.state = {
            sections: [],
            newSectionInputVal: ''
        };
        this.refreshSections = this.refreshSections.bind(this);
        this.addNewSection = this.addNewSection.bind(this);
        this.refreshSections();
    }

    refreshSections() {
        axios.get(`${URL}sections?sort=createdAt`)
            .then(async (resp) => {
                await this.setState({sections: resp.data });    
            })
    }

    addNewSection(variables) {
        const requestBody = JSON.parse(`{"name":"${variables.newSectionInputVal}"}`);
        axios.post(`${URL}/sections/`, requestBody).then(r => {
            this.refreshSections();
        })
    }

    render() {
        return (
            <>
                <input
                    type="text"
                    value={this.state.newSectionInputVal}
                    onChange={(e) => { this.setState({ newSectionInputVal: e.target.value }) }} />
                <Button label="Adicionar"
                    variables={{ newSectionInputVal: this.state.newSectionInputVal }}
                    click={this.addNewSection} />
                <div><br />
                    {
                        (this.state.sections.length)?
                            this.state.sections.map((val) => {
                                return <Section key={val._id} section={val} refresh={this.refreshSections} />
                            })
                            :<span>Lista vazia</span>
                    }
                </div>
            </>
        );
    }
}