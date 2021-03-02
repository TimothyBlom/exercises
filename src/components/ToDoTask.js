import React, {useEffect, useState} from 'react';
import sliderImg1 from "../images/addButton.png"

const Task = (props) => {
    const [taskIsChecked, setTaskIsChacked] = useState(props.completed);

    const taskComplete = () => {
        setTaskIsChacked(!taskIsChecked);
      }

    return (
        <div className="apiItem">
            <p className="apiName">{props.taskText}</p>
            <img className="taskBtn" src={sliderImg1} id={taskIsChecked ? "taskCompleted" : ""} onClick={taskComplete}/>
        </div>
    )
};

export default Task;