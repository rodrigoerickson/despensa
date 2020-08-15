import React from 'react';
import CreateSubSection from './create-sub-section/create-sub-section'

import { Accordion, Card, Button } from 'react-bootstrap/';
import SubSection from './sub-section/sub-section'

function Section(props) {
    return (
        <Accordion defaultActiveKey="0">
            <Card>
                <Card.Header>
                    <Accordion.Toggle as={Button} variant="link" eventKey="1">
                        {props.section.name}
                        {/* <ButtonComponent label="adicionar"></ButtonComponent> */}
                    </Accordion.Toggle>
                </Card.Header>
                <Accordion.Collapse eventKey="1">
                    <Card.Body>
                        <SubSection subSections={props.section}></SubSection>
                        <CreateSubSection sectionId={props.section._id} />
                    </Card.Body>
                </Accordion.Collapse>
            </Card>
        </Accordion>
    );
}

export default Section;
