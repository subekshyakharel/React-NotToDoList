import React, { useState } from 'react';
import './App.css';
import Form from './components/Form';
import Table from './components/Table';

const hrperweek= 24*7;
const App = () => {
  const [taskList, setTaskList] = useState([]);
  const ttlHr = taskList.reduce((acc, i)=>{
    return acc + i.hr;
  },0)
  

  const addTaskList = (taskObj) => {
    const obj = {
      ...taskObj,
      id: randomIdGenerator(),
      type: "entry",
      hr: Number(taskObj.hr),
    };

    if(ttlHr + taskObj.hr > hrperweek) {
      return alert("Sorry boss not enough time fit this task from last week.")
    }

    setTaskList([...taskList, obj]);
  };


  const switchTask = (id, type) =>{
   setTaskList(taskList.map((item)=>{
    if(item.id === id){
        item.type = type
    }
    return item
}))
    }

  const randomIdGenerator = (length = 6) => {
    const str = "qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM1234567890";
    let id = "";

    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * str.length);
      id += str[randomIndex];
    }

    return id;
  };

  const handleOnDelete=(id)=>{
    if(window.confirm("Are you sure you want to delete this??")) {
      setTaskList(taskList.filter((item)=> item.id !==id))
  }
}


  const calculateTotalHours = () => {
    return taskList.reduce((total, item) => total + Number(item.hr), 0);
  };

  return (
    <div className="wrapper pt-5">
      {/* Title */}
      <div className="container">
        <h1 className="text-center">Not TO DO List</h1>
        {/* Form */}
        <Form addTaskList={addTaskList} />

        {/* Tables */}
        <Table taskList={taskList} switchTask={switchTask} handleOnDelete={handleOnDelete}/>
        <div className="alert alert-success">
          The total hours allocated = <span id="ttlHrs">{ttlHr}</span>
        </div>
      </div>
    </div>
  );
};

export default App;
