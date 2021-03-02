import React, {useEffect, useState} from 'react';
import axios from "axios"
import Task from "./ToDoTask"

const ToDoList = () => {
    const [games, setGames] = useState([]);

    useEffect(() => {
        const fetchGames = async () => {
          const res = await axios.get("./ToDoList.json")
            setGames(res.data);
            console.log(res.data);
        };
    
        fetchGames();
    
      }, [] );

    return (
        <div id='toDoList'>

            <p className="pageHeaderText">To Do List using a local API</p>

            <div className="tasksContainer">

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