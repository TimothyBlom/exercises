import React, {useEffect, useState} from 'react';
import axios from "axios"
import Task from "./ToDoTask"

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

            <p className="pageHeaderText">To Do List using a local API <br /> (How the hell do I post data?!?)</p>

            <div className="tasksContainer">

                <p onClick={postToDoApi}>Post date</p>
                <p onClick={gamesStatus}>API Console Log</p>

                {games.map(item => (

                    <Task 
                    completed={item.completed}
                    taskText={item.taskText}
                    />

                ))}
        
            </div>
                               
        </div>
    )
};

export default ToDoList;