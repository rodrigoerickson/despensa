import React from 'react';

import { Accordion, Card, Button } from 'react-bootstrap/';

function Pantry(props) {
    return (
        <Accordion defaultActiveKey="0">
            <Card>
                <Card.Header>
                    <Accordion.Toggle as={Button} variant="link" eventKey="1">
                        {props.section.label}
                    </Accordion.Toggle>
                </Card.Header>
                <Accordion.Collapse eventKey="1">
                    <Card.Body>Hello! I'm another body</Card.Body>
                </Accordion.Collapse>
            </Card>
        </Accordion>
    );
}

export default Pantry;
