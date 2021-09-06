import { ADD_ITEM, GET_ITEM, DELETE_ITEM } from './actionType';

export const addItem = (item) => ({
    type: ADD_ITEM,
    item,
})

export const getItem = () => ({
    type: GET_ITEM,
})

export const deleteItem = (id) => ({
    type: DELETE_ITEM,
    id,
})

