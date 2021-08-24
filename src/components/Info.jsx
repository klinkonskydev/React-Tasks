import React from 'react';
import { useParams } from "react-router-dom"
import { useHistory } from "react-router-dom"

import Button from './Button'

import './Info.css'

const TaskInfo = () => {
    const params = useParams();
    const history = useHistory();

    const handleBackBtn = () => {
        history.goBack();
    };

    return ( 
        <>
        
            <div>
                <Button className="btn" onClick={handleBackBtn}>Voltar</Button>
            </div>

            <div className="info-container">
                <h2 className="title">{params.taskTitle}</h2>
                <p className="subtitle">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                    Sunt fugit reiciendis ullam veniam laborum quibusdam.
                </p>
            </div>
        </>
    );
};
 
export default TaskInfo;