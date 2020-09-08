import React, { Component } from 'react';
import Section from '../components/section-list/section/section';
import axios from 'axios';
import {environment} from '../environment';
import CreateSection from '../components/section-list/section/create-section/crate-section';

const URL = environment.api;

export default class PageSections extends Component {
    constructor(props) {
        super(props);
        this.state = {
            sections: []
        };
        this.refreshSections = this.refreshSections.bind(this);
        this.addNewSection = this.addNewSection.bind(this);
        this.removeSection = this.removeSection.bind(this);
        this.refreshSections();
    }

    refreshSections() {
        axios.get(`${URL}sections?sort=createdAt`)
            .then(async (response) => {
                await this.setState({sections: response.data });    
            })
    }

    addNewSection(variables) {
        const requestBody = JSON.parse(`{"name":"${variables.newSectionInputVal}"}`);
        axios.post(`${URL}/sections/`, requestBody).then(_ => {
            this.refreshSections();
        })
    }

    removeSection(variables) {
        axios.delete(`${URL}/sections/${variables.sectionId}`).then((resp)=>{
            this.refreshSections();
        })
    }

    render() {
        return (
            <>
                <CreateSection addNewSection={this.addNewSection}/>
                <>
                    {
                        (this.state.sections.length)?
                            this.state.sections.map((section) => {
                                return <Section 
                                    key={section._id} 
                                    section={section} 
                                    refresh={this.refreshSections} 
                                    remove={this.removeSection} 
                                    />
                            })
                            :<span>Lista vazia</span>
                    }
                </>
            </>
        );
    }
}