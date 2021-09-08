import { ADD_ITEM, DELETE_ITEM, EDIT_ITEM, SEARCH_ITEM, GET_ITEM } from './actionType';

const initialState = {
    list: [
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
    ],
    listSearch: [],
}

const listReducer = (state = initialState, action) => {
    switch (action.type){
        case ADD_ITEM: {
            debugger;
            return {
                ...state,
                list: [
                    action.item,
                    ...state.list,
                ]
            }
        }
        case DELETE_ITEM: {
            const index = state.list.findIndex(item => item.id === action.id)
            return {
                ...state,
                list: [
                    ...state.list.slice(0, index),
                    ...state.list.slice(index + 1),
                ]
            }
        }
        case EDIT_ITEM: {
            const index = state.list.findIndex(item => item.id === action.id)
            return {
                ...state,
                ...state.list[index].name = action.item,
            }
        }
        case SEARCH_ITEM: {
            const newState = state.list.filter(item => item.name.includes(action.item));
            return {
                ...state,
                listSearch: newState,                
            }
        }
        case GET_ITEM: {
            state.list = initialState
            return [...state]
        }
        default: {
            return state;
        }
    }
}

export default listReducer;
