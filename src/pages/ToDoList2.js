import React, {useEffect, useState} from 'react';
import axios from "axios"
import Task from "../components/ToDoTask"
import addButton from "../images/addButton.png"

const ToDoList = () => {
    const [games, setGames] = useState([]);

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

            <p className="pageHeaderText">Add a task to the to do list using a local API </p>

            <div className="tasksContainer">

              <p className="postButton" onClick={postToDoApi}>Post date</p>
              <p className="postButton" onClick={gamesStatus}>Console Log API Array</p>

                {games.slice(0, 1).map(item => (

                    <Task
                    completed={item.completed}
                    taskText={item.taskText}
                    console={item.logo}
                    icon={item.icon}
                    />

                ))}

                <img className="addButton" src={addButton} />
        
            </div>
                               
        </div>
    )
};

export default ToDoList;