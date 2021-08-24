import React, { useState, useEffect  } from 'react';
import { v4 as uuidv4 } from 'uuid'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import axios from 'axios'


import Header from './components/Header'
import Tasks from './components/Tasks'
import AddTask from './components/AddTask';
import TaskDetails from './components/Info'
import './App.css';


const App = () => {

  const [tasks, setTasks] = useState([]);

  useEffect( () => {

    const fetchTask = async () => {
      
      const { data } = await axios.get(
        'https://jsonplaceholder.cypress.io/todos?_limit=2'
      );

      setTasks(data)
    };

    fetchTask();
  }, []);

  const handleTaskAdittion = (title) => {
    const newTask = [...tasks, {
      title,
      id: uuidv4(),
      completed: false
    }];

    setTasks(newTask);
  }

  const handleTaskClick = (taskID) => {

    const newTask = tasks.map( task => {
      if ( task.id === taskID ) return { 
        ...task,
         completed: !task.completed 
        };

      return task
    });

    setTasks(newTask);
  }

  const handleTaskClickDelete = (taskID) => {
    const newTask = tasks.filter( task => taskID !== task.id );

    setTasks(newTask)
  }

  return (
    <Router>
      <div className="container">
        <div>
          <Header header={Header} />
          <br />
        </div>

        <Route 
          path="/" 
          exact 
          render={ () => (
            <>
              <AddTask handleTaskAdittion={handleTaskAdittion}/>
            
              <Tasks
                tasks={tasks} 
                handleTaskClick={handleTaskClick} 
                handleTaskClickDelete={handleTaskClickDelete} 
              />
            </>
          )}
        />

        <Route path="/:taskTitle" exact component={TaskDetails}/>


      </div>
    </Router>
  );
}

export default App;