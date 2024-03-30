import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { useDispatch } from 'react-redux';
import Card from '../../UI/card/Card';
import { listActions } from '../../store/list';
import './NewTodo.css'


const NewTodo = () => {
  const dispatch = useDispatch();
  const [todo, setTodo] = useState('');
  const submitHandler = (event) => {
    event.preventDefault();
    const newTodo = {
      id: uuidv4(),
      text: todo,
      completed: false,
    };
    dispatch(listActions.addTodo(newTodo));
    setTodo('');
  };

  const changeHandler = (event) => {
    event.preventDefault();
    setTodo(event.target.value);
  };

  return (
    <Card className='m-50'>
      <form onSubmit={submitHandler} className='new-todo'>
        <div className='circle'></div>
        <input
          type="text"
          placeholder="Create a new todo..."
          value={todo}
          onChange={changeHandler}
        />
      </form>
    </Card>
  );
};

export default NewTodo;
