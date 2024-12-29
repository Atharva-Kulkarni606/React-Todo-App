import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import ToDoTable from './components/ToDoTable';
import NewTodoForm from './components/NewTodoForm';

function App() {

  const [todos, setTodos] = useState([
    {rowNumber : 1, rowDescription: 'Feed dog', rowAssigned: 'Eric'},
    {rowNumber : 2, rowDescription: 'Feed dog 2', rowAssigned: 'Eric2'},
    {rowNumber : 3, rowDescription: 'Feed dog 3', rowAssigned: 'Eric3'}
  ]);

  const deleteTodo = (deleteRowNumber) => {
    let filtered = todos.filter(function (value) {
      return value.rowNumber !== deleteRowNumber;
    });
    setTodos(filtered);
  }

  const addTodo = (description, assigned) => {
    let rowNumber = 0;
    if(todos.length > 0) {
      rowNumber = todos[todos.length - 1].rowNumber + 1;
    } else {
      rowNumber = 1;
    }   
    const newTodo = {rowNumber : todos.length + 1, rowDescription: description, rowAssigned: assigned};
    setTodos(todos => [...todos, newTodo]);
    console.log(todos);
  }

  return (
    <div className = 'mt-5 container'>
      <div className = "card">
        <div className = "card-header"> 
          Your Todo's 
        </div>
        <div className = "card-body" > 
          <ToDoTable todos={todos} deleteTodo={deleteTodo}/>
          <button className = "btn btn-primary" >Add new todo</button>
          <NewTodoForm addTodo = {addTodo}/>
        </div>
      </div>
    </div>
  );
}

export default App;
