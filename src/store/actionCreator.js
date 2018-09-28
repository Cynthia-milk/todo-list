import { CHANGE_INPUT_VALUE, ADD_ITEM, DELETE_ITEM } from './actionType'
export const getInputValue = (data) => ({
    type: CHANGE_INPUT_VALUE,
    value: data
})
export const getAddItem = () => ({
    type: ADD_ITEM
})

export const getDelete = (index) => ({
    type: DELETE_ITEM,
    index: index
})