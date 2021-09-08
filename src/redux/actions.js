import { ADD_ITEM, DELETE_ITEM, EDIT_ITEM, SEARCH_ITEM, GET_ITEM, CONFIRM_STATUS } from './actionType';

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

export const editItem = (id, item) => ({
    type: EDIT_ITEM,
    id,
    item,
})

export const searchItem = (item) => ({
    type: SEARCH_ITEM,
    item
})

export const confirmCompeletedItem = (status, id) => ({
    type: CONFIRM_STATUS,
    status,
    id,
})

