import { ADD_ITEM, GET_ITEM } from './actionType';

const initialState = [
        {
            id: 0,
            name: 'Ngọc Dũng',
        },
        {
            id: 1,
            name: 'Hà Hưng',
        },
        {
            id: 2,
            name: 'Danh Huỳnh',
        },
        {
            id: 3,
            name: 'Hiển Hảo',
        },
    ]

const listReducer = (state = initialState, action) => {
    switch (action.type){
        case ADD_ITEM: {
            state.push(action.item);
            return [...state]
        }
        default: {
            return state;
        }
    }
}

export default listReducer;
