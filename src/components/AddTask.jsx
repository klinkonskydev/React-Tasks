import React, { useState } from 'react';

import './AddTask.css'
import Button from './Button';

const AddTask = ({handleTaskAdittion}) => {
    const [inputData, setInputData] = useState("");

    const handleImputChange = (e) => {
        setInputData(e.target.value);
    };

    const handleTaskAddClick = () => {
        handleTaskAdittion(inputData);

        setInputData('')
    }

    return ( 
        <div className="add-task-container">
            <input 
                onChange={handleImputChange} 
                className="add-task-input" 
                type="text"
                value={inputData}
            />

            <div className="add-task-container-button">
                <Button onClick={handleTaskAddClick}>Adicionar</Button>
            </div>
        </div>
    );
}
 
export default AddTask;