import { Fragment } from 'react';
import './App.css';
import TodoHeader from './components/todolist/header/TodoHeader';
import NewTodo from './components/todolist/new-todo/NewTodo';
import List from './components/todolist/list/List';
import Card from './components/UI/card/Card';

function App() {
  return (
    <Fragment>
      
      <main className="todo-list">
        <TodoHeader />
        <NewTodo />
        <List />
        <Card className="list-footer-mobile">
         
        </Card>
      </main>
    </Fragment>
  );
}

export default App;
