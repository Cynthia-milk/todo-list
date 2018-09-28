import { CHANGE_INPUT_VALUE, ADD_ITEM, DELETE_ITEM } from './actionType'
const defaultState = {
    inputValue: '223',
    list: [1, 2, 3]
}
const reducer = (state = defaultState, action) => {
    const newState = JSON.parse(JSON.stringify(state));
    if (action.type === CHANGE_INPUT_VALUE) {
        newState.inputValue = action.value;
        return newState;
    }
    if (action.type === ADD_ITEM) {
        newState.list.push(newState.inputValue);
        newState.inputValue = ''
        return newState;
    }
    if (action.type === DELETE_ITEM) {
        newState.list.splice(action.index, 1)
        return newState;
    }
    return state;
}
export default reducer;