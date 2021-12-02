import React, {useEffect, useState} from 'react';
import axios from "axios"
import Task from "../components/ToDoTask"

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
        const res = await axios.post("./ToDoList.json", {games: parseInt(games)})
          setGames(res.data);
          console.log(res.data, "post");
      };

      const gamesStatus = () => {
        console.log(games, "current status")
      };

    return (
        <div id='toDoList'>

          <p className="pageHeaderText">Updating existing tasks on a to do list using a local API 
            <br /> (How the hell do I post data?!?)
          </p>

          <div className="tasksContainer">

            <p className="postButton" onClick={postToDoApi}>Post date</p>
            <p className="postButton" onClick={gamesStatus}>Console Log API Array</p>

            {games.map(item => (

              <Task 
                completed={item.completed}
                taskText={item.taskText}
                console={item.logo}
                icon={item.icon}
              />

            ))}
        
          </div>                     
        </div>
    )
};

export default ToDoList;