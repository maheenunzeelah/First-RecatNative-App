import { ADD_PLACE, DELETE_PLACE, SELECT_PLACE, DESELECT_PLACE, CHANGE_INPUT } from '../actions/actionTypes'

const initialState = {
    input: '',
    places: [],
    selectedItem: null
}

 const reducer = (state = initialState, action) => {
    switch (action.type) {
        case CHANGE_INPUT:
            return {
                ...state,
                input: action.input

            }
        case ADD_PLACE:
        console.log(state.input)
            if (state.input.trim() === '') {
                return
            }
            return {
                ...state,
                places: state.places.concat(
                    {
                        key: Math.random(),
                        name: state.input,
                        image: {
                            uri: 'https://www.fortywinks.com.au/getmedia/f4614e1e-9b00-476b-bdcd-e28afa3d34db/jackson_bed_frame-front.jpg?width=1000'
                        }
                    })
            };
        case DELETE_PLACE:
        return {
            ...state,
            places: state.places.filter((place) => {
              return place.key !== state.selectedItem.key
            }),
            selectedItem:null
          }
        case SELECT_PLACE:
        return{
            ...state,
            selectedItem: state.places.find((place) => {
                return place.key === action.key
              })
        }
        case DESELECT_PLACE:
        return{
            ...state,
            selectedItem:null
        }
        default:
            return state
    }
}

export default reducer;