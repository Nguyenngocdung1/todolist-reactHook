import React from 'react';
// import Header from './Header/index';
import List from './Todolist/index';

import {useSelector} from 'react-redux'
// import { searchItem } from '../redux/actions';

import './index.css'

function TodoList() {
    const list = useSelector(state => state.list.list);
    const keySearch = useSelector(state => state.list.keySearch);

    return (
      <div>
        <List keySearch={keySearch} list={list}/>
      </div>
    )
}

export default TodoList;