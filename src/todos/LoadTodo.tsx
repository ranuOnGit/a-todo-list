import React from 'react';
import { useDispatch } from 'react-redux';
import { getTodos } from '../redux-components/actions';

const LoadTodo = () => {
  const dispatch = useDispatch();

  return (
    <div className='d-grid gap-2'>
      <button
        type='button'
        className='btn btn-light'
        onClick={() =>
          dispatch(
            getTodos(
              'https://raw.githubusercontent.com/jherr/todos-four-ways/master/data/todos.json',
            ),
          )
        }
      >
        load list
      </button>
    </div>
  );
};

export default LoadTodo;
