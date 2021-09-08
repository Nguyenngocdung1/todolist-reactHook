import { ADD_ITEM, DELETE_ITEM, EDIT_ITEM, SEARCH_ITEM, GET_ITEM, CONFIRM_STATUS } from './actionType';

const initialState = {
    list: [
        {
            id: 0,
            name: 'Ngọc Dũng',
            status: false,
        },
        {
            id: 1,
            name: 'Hà Hưng',
            status: false,
        },
        {
            id: 2,
            name: 'Danh Huỳnh',
            status: false,
        },
        {
            id: 3,
            name: 'Hiển Hảo',
            status: false,
        },
    ],
    keySearch: '',
}

const listReducer = (state = initialState, action) => {
    switch (action.type){
        case ADD_ITEM: {
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
            return {
                ...state,
                keySearch: action.item,
            }
        }
        case GET_ITEM: {
            return [...state]
        }
        case CONFIRM_STATUS: {
            debugger;
            return {
                ...state,
                ...state.list[action.id].status = action.status,
            };

        }
        default: {
            return state;
        }
    }
}

export default listReducer;
