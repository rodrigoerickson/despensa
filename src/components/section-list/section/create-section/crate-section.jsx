import React, {useState} from 'react';
import Button from '../../../shared/button/button';

const CreateSection = (props) => {

    const [newSectionInputVal, setNewSectionInputVal] = useState('');

     const InputNewSection = (newSectionInputVal) =>{
        return (
            <input
                type="text"
                value={newSectionInputVal}
                onChange={e => {setNewSectionInputVal(e.target.value )}} />
        )
    }

    const buttonAddNewSection = (newSectionInputVal, addNewSection) =>{
        return (
            <Button
                label="Adicionar"
                variables={{newSectionInputVal}}
                click={addNewSection} />
        )
    }

    return (
        <>
            {InputNewSection(newSectionInputVal)}
            {buttonAddNewSection(newSectionInputVal, props.addNewSection)}
        </>);
}
export default CreateSection;
