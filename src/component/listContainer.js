import { connect } from 'react-redux';
import { addItem } from '../redux/actions';
import TodoList from './index';

const mapStateToProps = (state) => ({
    list: state.list,
})

const mapDispatchToProps = (dispatch) => ({
    addItem: (item) => {
        dispatch(addItem(item));
    },
})

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);