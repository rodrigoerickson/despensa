import React from 'react';
import Button from '../../../shared/button/button'

function labelSubSection(props){
    return props.subSections.map(val =>{
        return (<div>
                {val.label}
                <Button></Button>
                </div>)
    })
}

function SubSection(props) {
    return (
        <div>
            {labelSubSection(props)}
        </div>
        );
}

export default SubSection;
