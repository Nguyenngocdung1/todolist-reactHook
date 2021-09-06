import { connect } from 'react-redux';
import { addItem, deleteItem, editItem } from '../redux/actions';
import TodoList from './index';

const mapStateToProps = (state) => ({
    list: state.list,
})

const mapDispatchToProps = (dispatch) => ({
    addItem: (item) => {
        dispatch(addItem(item));
    },
    deleteItem: (id) => {
        dispatch(deleteItem(id));
    },
    editItem: (id, item) => {
        dispatch(editItem(id, item));
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);