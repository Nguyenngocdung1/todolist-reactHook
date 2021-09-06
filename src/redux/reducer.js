import { ADD_ITEM, DELETE_ITEM, EDIT_ITEM } from './actionType';

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
        case DELETE_ITEM: {
            state.splice(action.id, 1);
            return [...state]
        }
        case EDIT_ITEM: {
            state[action.id] = action.item;
            return [...state]
        }
        default: {
            return state;
        }
    }
}

export default listReducer;
