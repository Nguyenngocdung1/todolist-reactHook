import React, { useState } from 'react';
import {useSelector, useDispatch} from 'react-redux'
import {Button,Input} from 'reactstrap';

import '../index.css'

function List() {
    const list = useSelector(state => state.list);
    const deleteItem = (id) => {
      // setList(list.filter(item => item.id !== id));
    }
    return (
        <div>
              {list && list.map((item) => {
                  return (
                    <div className="list-item">
                      <Input className="input-check" type="checkbox" />
                      <div className="list-item">
                          <div>{item.id}</div> - 
                          <div> {item.name}</div>
                      </div>
                      <Button className="button-delete-todolist" onClick={() => deleteItem(item.id)}>Xóa</Button>
                    </div>
                  )
              })}
          </div>
    )
}

export default List;