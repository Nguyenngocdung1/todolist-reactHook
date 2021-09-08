import React, { useState } from 'react';
import {useSelector, useDispatch} from 'react-redux'
import {Button,Input} from 'reactstrap';
import { deleteItem, editItem } from '../../redux/actions';

import '../index.css'

function List() {
    //Gia tri chinh sua !
    const inputEdit = React.createRef();

    // Khởi tạo state thông qua useState
    const [toggleId, setToggleId] = useState(-1);
    const [editInput, setEditInput] = useState('');

    //Lấy dữ liệu từ state: State list, keySearch
    const list = useSelector(state => state.list.list);
    const keySearch = useSelector(state => state.list.keySearch);

    const [listItem, setListItem] = useState(list.filter(item => item.name.includes(keySearch)));

    // dispatch goi actions: k cần thông qua container
    const dispatch = useDispatch();

    //Xóa item
    const deleteItemList = (id) => {
      dispatch(deleteItem(id));
    }

    // bật ô input sửa item
    const toggleEdit = (id, name) => {
      setEditInput(name);
      setToggleId(id);
    }

    // Xác nhận hoàn thành chỉnh sửa, đóng ô input sửa
    const doneEditItemList = (id) => {
      setToggleId(-1);
      const item = inputEdit.current.value;
      dispatch(editItem(id, item))
    }

    //check sự thay đổi của ô input chỉnh sửa
    const handeInputEdit = (even) => {
      setEditInput(even.target.value);
    }

    const handleTypeItem = (even, id) => {
      let newState = [...list];
      newState[id].status = even.target.checked;
      setListItem(newState)
    }
    debugger;

    return (
        <div>
              {listItem.length > 0 ? listItem.map((item, index) => {
                  return (
                    <div className="list-item">
                      <Input className="input-check" type="checkbox" onChange={(even) => handleTypeItem(even, item.id)} checked={item.status}/>
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