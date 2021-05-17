import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addTodo, setNewTodo } from '../redux-components/actions';
import { Store } from '../redux-components/types';

const Todos = () => {
  const newTodo = useSelector((state: Store) => state.newTodo);
  const dispatch = useDispatch();

  return (
    <div className='input-group mb-3' style={{ padding: '1rem' }}>
      <input
        type='text'
        className='form-control'
        placeholder='New to-do'
        aria-label="Recipient's username"
        aria-describedby='button-addon2'
        value={newTodo}
        onChange={(e) => dispatch(setNewTodo(e.target.value))}
      />
      <button
        className='btn btn-outline-dark'
        type='button'
        id='button-addon2'
        onClick={() => dispatch(addTodo())}
      >
        add todo
      </button>
    </div>
  );
};

export default Todos;
