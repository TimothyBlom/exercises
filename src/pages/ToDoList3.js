import React, {useEffect, useState} from 'react';
import axios from "axios"

const ToDoList = () => {

  const [data, setData] = useState({
    name: "",
    date: "",
    induser: ""
  })

  const submit = (e) => {
    e.preventDefault();
    axios.post("./ToDoListSimple.json", {
      name: data.name,
      date: data.date,
      induser: parseInt(data.induser)
    })
    .then(res => {console.log(res.data)})
  }

  const handle = (e) => {
    const newdata={...data}
    newdata[e.target.id] = e.target.value
    setData(newdata)
    console.log(newdata)
  }

  return (
    <div id='toDoList'>

      <p className="pageHeaderText">
        Simple To Do List
        <br />
        https://www.youtube.com/watch?v=9KaMsGSxGno&t=49s
      </p>

      <div className="tasksContainer">

        <form onSubmit={(e) => submit(e)}>
          <input onChange={(e) => handle(e)} id="name" value={data.name} placeholder="name" type="text"></input>
          <input onChange={(e) => handle(e)} id="date" value={data.date} placeholder="date" type="date"></input>
          <input onChange={(e) => handle(e)} id="induser" value={data.induser} placeholder="number" type="number"></input>
          <button>Submit</button>  
        </form>
        
      </div>                     
    </div>
  )
};

export default ToDoList;