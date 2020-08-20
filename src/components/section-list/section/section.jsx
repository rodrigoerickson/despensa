import React, { useState } from 'react';
import CreateSubSection from './create-sub-section/create-sub-section'
import axios from 'axios';
import { Accordion, Card, Button } from 'react-bootstrap/';
import SubSection from './sub-section/sub-section'
import DeleteSectionf from '../section/delete-section/delete-section'

const URL = 'http://localhost:3003/api/';

function Section(props) {
    const [section, setSection] = useState(props.section);

    // function newSubSection(subSection){
    //     console.log(subSection);
    // }



     function handleAddSubsection(variables){
        axios.get(`${URL}sections/${variables.sectionId}?sort=createdAt`)
            .then(resp => {
                const requestBody = JSON.parse(`
                    {"subSections.${resp.data.subSections.length}.amount":"0",
                    "subSections.${resp.data.subSections.length}.name":"${variables.inputValue}"}
                `);
                axios.put(`${URL}/sections/${variables.sectionId}`, requestBody).then((r)=>{
                    props.refresh();
                })  
            })
    }

    function deleteSection(variables){
        axios.delete(`${URL}/sections/${variables.sectionId}`).then((resp)=>{})
    }

    return (
        <Accordion defaultActiveKey="0">
            <Card>
                <Card.Header>
                    <Accordion.Toggle as={Button} variant="link" eventKey="1">
                        {section.name}
                        {/* <ButtonComponent label="adicionar"></ButtonComponent> */}
                    </Accordion.Toggle>
                </Card.Header>
                <Accordion.Collapse eventKey="1">
                    <Card.Body>
                        <SubSection subSections={section.subSections}></SubSection>
                        {/* {section.subSections.map((v)=>{
                            return (
                                <>
                                    <span>{v.name}</span>
                                    <br />
                                </>
                            )
                        })} */}
                        {/* <CreateSubSection newSubSection={newSubSection} sectionId={section._id} /> */}
                        <CreateSubSection handleAddSubsection={handleAddSubsection} sectionId={section._id} />
                        <DeleteSectionf variables={{sectionId:section._id}} click={deleteSection}></DeleteSectionf>
                    </Card.Body>
                </Accordion.Collapse>
            </Card>
        </Accordion>
    );
}

export default Section;
