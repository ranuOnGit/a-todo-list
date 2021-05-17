import React from 'react';
import './App.css'
import LoadTodo from './todos/LoadTodo';
import TodoList from './todos/TodoList';
import Todos from './todos/Todos';



const App = () => {
  return (
    <div className='container-md'>
      <h1 style={{ textAlign: 'center', padding: '1rem' }}>a to-do list</h1>
      <LoadTodo />
      <Todos />
      <TodoList />
    </div>
  );
};

export default App;
