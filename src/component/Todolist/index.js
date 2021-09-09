import React, { useState } from 'react';
import { useDispatch} from 'react-redux'
import {Button,Input} from 'reactstrap';
import { deleteItem, editItem, confirmCompeletedItem } from '../../redux/actions';
import Header from '../Header/index'
import Footer from '../Footer/index';
import Patination from './Patination';
import '../index.css'

function List(props) {
    //Gia tri chinh sua !
    const inputEdit = React.createRef();
    const [list, setList ] = useState(props.list);
    const [patination, setPatination] = useState({
      page: 1,
      limit: 4,
      totalRows: list.length,
    })

    // Khởi tạo state thông qua useState
    const [toggleId, setToggleId] = useState(-1);
    const [editInput, setEditInput] = useState('');

    // dispatch goi actions: k cần thông qua container
    const dispatch = useDispatch();

    //Xóa item
    const deleteItemList = (id) => {
      //Thay doi reducer
      dispatch(deleteItem(id));
      //Thay doi list
      setList(list.filter(item => item.id !== id))
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
      //thay doi reducer
      dispatch(editItem(id, item))
      //thay doi list
      const indexID = list.findIndex(item => item.id === id);
      list[indexID].name = item;
      setList(list)
    }


    //check sự thay đổi của ô input chỉnh sửa
    const handeInputEdit = (even) => {
      setEditInput(even.target.value);
    }

    const handleTypeItem = (even, id) => {
      dispatch(confirmCompeletedItem(even.target.checked, id))
    }

    function onPageChange(page) {
      console.log(page);
    }

    return (
        <div>
              <Header list={list} setList={setList}/>
              {list.length > 0 ? list.map((item, index) => {
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
              <Patination patination={patination} onPageChange={onPageChange}/>

              <Footer />

          </div>
    )
}

export default List;