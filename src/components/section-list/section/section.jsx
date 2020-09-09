import React from 'react';
import CreateSubSection from './create-sub-section/create-sub-section'
import { Accordion, Card, Button } from 'react-bootstrap/';
import SubSection from './sub-section/sub-section'
import DeleteSection from '../section/delete-section/delete-section'

function Section(props) {
    const section = props.section;
    return (
        <Accordion defaultActiveKey="0">
            <Card>
                <Card.Header>
                    <Accordion.Toggle as={Button} variant="link" eventKey="1">
                        {section.name}
                    </Accordion.Toggle>
                </Card.Header>
                <Accordion.Collapse eventKey="1">
                    <Card.Body>
                        <SubSection sectionId={section._id} subSections={section.subSections}></SubSection>
                        <CreateSubSection addNewSubSection={props.addNewSubSection} variables={{sectionId:section._id, refresh:props.refresh}} />
                        <DeleteSection variables={{sectionId:section._id, refresh:props.refresh}} click={props.remove}></DeleteSection>
                    </Card.Body>
                </Accordion.Collapse>
            </Card>
        </Accordion>
    );
}

export default Section;
