import React from 'react';
import Header from './Header/index';
import List from './Todolist/index';

import './index.css'

function TodoList() {
    return (
      <div>
        <Header />
        <List />
      </div>
    )
}

export default TodoList;