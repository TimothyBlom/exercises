import React, {useEffect, useState} from 'react';
import axios from "axios"
import Task from "../components/ToDoTask"
import checkBox from "../images/checkBox.png"

const ToDoList = () => {
    const [games, setGames] = useState([]);
    // const [taskIsChecked, setTaskIsChacked] = useState(games.item.completed);

    // const taskComplete = () => {
    //     setTaskIsChacked(!taskIsChecked);
    //   }

    useEffect(() => {
        const getToDoApi = async () => {
          const res = await axios.get("./ToDoList.json")
            setGames(res.data);
            console.log(res.data, "get");
        };
    
        getToDoApi();
    
      }, [] );

      const postToDoApi = async () => {
        const res = await axios.post("./ToDoList.json")
          setGames(res.data);
          console.log(res.data, "post");
      };

      const gamesStatus = () => {
        console.log(games, "current status");
      }

    return (
        <div id='toDoList'>

          <p className="pageHeaderText">Updating existing tasks on a to do list using a local API 
            <br /> (How the hell do I post data?!?)
          </p>

          <div className="tasksContainer">

            <p className="postButton" onClick={postToDoApi}>Post date</p>
            <p className="postButton" onClick={gamesStatus}>Console Log API Array</p>

            {games.map(item => (

              <div className="taskItem">

                <input type="text" className="taskNameInput" placeholder={item.taskText}></input>
                {/* <img className="taskBtn" src={checkBox} id={taskIsChecked ? "taskCompleted" : ""} onClick={taskComplete}/> */}

              </div>

            ))}
        
          </div>                     
        </div>
    )
};

export default ToDoList;