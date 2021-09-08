import React, { useState } from 'react';
import {useSelector, useDispatch} from 'react-redux'
import {Button,Input} from 'reactstrap';
import { deleteItem, editItem } from '../../redux/actions';

import '../index.css'

function List() {
    const inputEdit = React.createRef();

    const [toggleId, setToggleId] = useState(-1);
    const [editInput, setEditInput] = useState('');

    const listItem = useSelector(state => state.list.list);
    const listSearch = useSelector(state => state.list.listSearch);

    const list = listSearch.length > 0 ? listSearch : listItem;  

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
      const item = inputEdit.current.value;
      dispatch(editItem(id, item))
      debugger;
    }

    const handeInputEdit = (even) => {
      setEditInput(even.target.value);
    }
    debugger;
    return (
        <div>
              {list.length > 0 ? list.map((item, index) => {
                  return (
                    <div className="list-item">
                      <Input className="input-check" type="checkbox" />
                      <div className="list-item">
                          <div>{index+1}</div> - 
                          <div> {item.name}</div>
                      </div>
                      <Button onClick={() => deleteItemList(item.id)}>Xóa</Button>
                      <input 
                        style={toggleId === item.id ? {} : {display: "none"}} 
                        ref={inputEdit}
                        value={editInput}
                        onChange={handeInputEdit}
                      />
                      <Button style={toggleId !== item.id ? {} : {display: "none"}} onClick={() => toggleEdit(item.id, item.name)}>Sửa</Button>
                      <Button style={toggleId === item.id ? {} : {display: "none"}} onClick={() => doneEditItemList(item.id)}>Xong</Button>
                    </div>
                  )
              }) : (
                <div>Danh sách rỗng !</div>
              )}
          </div>
    )
}

export default List;