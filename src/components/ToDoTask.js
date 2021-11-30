import React, {useEffect, useState} from 'react';
import checkBox from "../images/checkBox.png"

const Task = (props) => {
    const [taskIsChecked, setTaskIsChacked] = useState(props.completed);

    const taskComplete = () => {
        setTaskIsChacked(!taskIsChecked);
      }

    return (
        <div className="taskItem">

            <img className="taskPlatform" src={props.console} />
            <img className="taskLogo" src={props.icon} />
            <input type="text" className="taskNameInput" placeholder={props.taskText}></input>
            <img className="taskBtn" src={checkBox} id={taskIsChecked ? "taskCompleted" : ""} onClick={taskComplete}/>

        </div>
    )
};

export default Task;