import React, { useState } from 'react';
import { useDispatch} from 'react-redux'
import {Button,Input} from 'reactstrap';
import {addItem} from '../../redux/actions';

function Header(props) {
    const {list} = props

    const dispatch = useDispatch();

    const itemAdd = React.createRef();

    const [textInput, setTextInput] = useState("");
    
    const addItemList = () => {
      let itemFinal = list.reduce((prev, current) => {
        if (+current.id > +prev.id) {
            return current;
        } else {
            return prev;
        }
      });
      const item = {
        id: itemFinal.id + 1,
        name: itemAdd.current.value,
      }
      //Thay doi reducer
      dispatch(addItem(item))
      //Thay doi list
      props.setList((prevState) => [
        ...prevState,
        item,
      ])
      setTextInput("");
    }

    const onUpdate = (even) => {
      const {value} = even.target
      setTextInput(value);
    }

    return (
        <div>
            <div className="header">TodoList</div>
            <div style={{display: 'flex', width: 600, marginLeft: 700}}>
                <Input className="input-todolist" placeholder="Hãy nhập gì đó" innerRef={itemAdd} onChange={onUpdate} value={textInput}/>
                <Button className="button-todolist" onClick={addItemList}>Thêm</Button>
                {/*<Button className="button-todolist" onClick={searchItemList}>Tìm Kiếm</Button>*/}
            </div>
        </div>
    )
}

export default Header;