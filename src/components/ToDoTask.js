import React, {useEffect, useState} from 'react';
import sliderImg1 from "../images/addButton.png"

const Task = (props) => {
    const [taskIsChecked, setTaskIsChacked] = useState(props.completed);

    const taskComplete = () => {
        setTaskIsChacked(!taskIsChecked);
      }

    return (
        <div className="taskItem">

            <img className="taskPlatform" src={sliderImg1} />
            <img className="taskLogo" src={sliderImg1} />
            {/* <p className="taskName">{props.taskText}</p> */}
            <input type="text" className="taskNameInput" placeholder={props.taskText}></input>
            <img className="taskBtn" src={sliderImg1} id={taskIsChecked ? "taskCompleted" : ""} onClick={taskComplete}/>

        </div>
    )
};

export default Task;