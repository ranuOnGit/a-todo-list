import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  deleteTodo,
  toggleTodo,
  updateTodo,
} from '../redux-components/actions';
import { Store } from '../redux-components/types';

const TodoList = () => {
  const todos = useSelector((state: Store) => state.todos);
  const dispatch = useDispatch();

  return (
    <div className='mb-3'>
      {todos.map((todo: { id: number; text: string }) => (
        <table className='table table-borderless'>
          <tbody>
            <tr>
              <td>
                <div className='input-group mb-3'>
                  <div className='input-group-text'>
                    <input
                      className='form-check-input mt-0'
                      type='checkbox'
                      value=''
                      aria-label='Checkbox for following text input'
                      onClick={() => dispatch(toggleTodo(todo.id))}
                    />
                  </div>
                  <input
                    type='text'
                    className='form-control'
                    aria-label='Text input with checkbox'
                    value={todo.text}
                    onChange={(e) =>
                      dispatch(updateTodo(todo.id, e.target.value))
                    }
                  />
                  <button
                    type='button'
                    className='btn btn-dark'
                    onClick={() => dispatch(deleteTodo(todo.id))}
                  >
                    X
                  </button>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      ))}
    </div>
  );
};

export default TodoList;
