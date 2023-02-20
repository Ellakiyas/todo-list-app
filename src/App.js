import './App.css';
import {useState} from "react";
import {Task} from './Task';

function App() {
  const [todolist,setTodoList]=useState([]);
  const [addtask,setAddTask]=useState("");

  const inputHandle=(event)=>{
    setAddTask(event.target.value);
  }
  const addNewTask=()=>{
    const task={
      id:todolist.length===0 ? 1 : todolist[todolist.length-1].id+1,
      taskName:addtask,
      completed:false,
    }
    setTodoList([...todolist,task]);
  }
  const deleteTask=(id)=>{
    setTodoList(todolist.filter((task)=> task.id!==id));
  }

  const completeTask=(id)=>{
    setTodoList(
      todolist.map((task)=>{
        if(task.id===id){
          return {...task,completed:true};
        }
        else{
          return task;
        }
      })
      );
  }

  return (
    <div className="App">
    <div class="todolist-app">
    <input type="text" onChange={inputHandle}/>
    <button onClick={addNewTask}>ADD TASK</button>
    </div>
    <div class="list-items">
    {todolist.map((task)=>{
      return <Task 
      taskName={task.taskName} 
      id={task.id} 
      completed={task.completed}
      deleteTask={deleteTask}
      completeTask={completeTask}/>;
    })
  }
    </div>
    </div>
  );
}

export default App;
