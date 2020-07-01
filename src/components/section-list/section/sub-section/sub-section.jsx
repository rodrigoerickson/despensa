import React from 'react';

function labelSubSection(props){
    return props.subSections.map(val =>{
        return (<div>{val.label}</div>)
    })
}

function SubSection(props) {
    return (<div>{labelSubSection(props)}</div>);
}

export default SubSection;
