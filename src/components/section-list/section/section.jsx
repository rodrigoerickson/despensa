import React, { useState } from 'react';
import CreateSubSection from './create-sub-section/create-sub-section'

import { Accordion, Card, Button } from 'react-bootstrap/';
import SubSection from './sub-section/sub-section'

function Section(props) {
    const [section, setSection] = useState(props.section);

    // function newSubSection(subSection){
    //     console.log(subSection);
    // }

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
                        <SubSection subSections={section}></SubSection>
                        {/* <CreateSubSection newSubSection={newSubSection} sectionId={section._id} /> */}
                        <CreateSubSection sectionId={section._id} />
                    </Card.Body>
                </Accordion.Collapse>
            </Card>
        </Accordion>
    );
}

export default Section;
