import React from 'react';

import { Accordion, Card, Button } from 'react-bootstrap/';
import SubSection from './sub-section/sub-section'

function Section(props) {
    return (
        <Accordion defaultActiveKey="0">
            <Card>
                <Card.Header>
                    <Accordion.Toggle as={Button} variant="link" eventKey="1">
                        {props.section.name}
                    </Accordion.Toggle>
                </Card.Header>
                <Accordion.Collapse eventKey="1">
                    <Card.Body>
                        <SubSection subSections={props.section.subSections}></SubSection>
                    </Card.Body>
                </Accordion.Collapse>
            </Card>
        </Accordion>
    );
}

export default Section;
