import { ADD_PLACE, DELETE_PLACE, DESELECT_PLACE, SELECT_PLACE, CHANGE_INPUT } from './actionTypes';


export const handleChange = (val) => {
    console.log(val)
    return {
        type: CHANGE_INPUT,
        input: val
    }
}
export const addPlace = () => {
    return {
        type: ADD_PLACE,
    }
}

export const deletePlace = () => {
    return {
        type: DELETE_PLACE,
        
    }
}
export const selectPlace = (key) => {
    return {
        type: SELECT_PLACE,
        key
    }
}
export const unselectPlace = () => {
    return {
        type: DESELECT_PLACE
    }
}