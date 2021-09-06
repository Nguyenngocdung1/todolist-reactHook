import React, { useState } from 'react';
import {useSelector, useDispatch} from 'react-redux'
import {Button,Input} from 'reactstrap';
import { deleteItem, editItem } from '../../redux/actions';

import '../index.css'

function List() {
    const inputEdit = React.createRef();

    const [toggleId, setToggleId] = useState(-1);
    const [editInput, setEditInput] = useState('');

    const list = useSelector(state => state.list);
    const dispatch = useDispatch();

    const deleteItemList = (id) => {
      dispatch(deleteItem(id));
    }

    const toggleEdit = (id, name) => {
      setEditInput(name);
      setToggleId(id);
    }

    const doneEditItemList = (id) => {
      setToggleId(-1);
      const item = {
        id: id,
        name: inputEdit.current.value,
      }
      dispatch(editItem(id, item))
      debugger;
    }

    const handeInputEdit = (even) => {
      setEditInput(even.target.value);
    }

    return (
        <div>
              {list && list.map((item, index) => {
                  return (
                    <div className="list-item">
                      <Input className="input-check" type="checkbox" />
                      <div className="list-item">
                          <div>{index+1}</div> - 
                          <div> {item.name}</div>
                      </div>
                      <Button onClick={() => deleteItemList(item.id)}>Xóa</Button>
                      <input 
                        style={toggleId === index ? {} : {display: "none"}} 
                        ref={inputEdit}
                        value={editInput}
                        onChange={handeInputEdit}
                      />
                      <Button onClick={() => toggleEdit(item.id, item.name)}>Sửa</Button>
                      <Button onClick={() => doneEditItemList(item.id)}>Xong</Button>
                    </div>
                  )
              })}
          </div>
    )
}

export default List;