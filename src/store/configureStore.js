import {combineReducers,createStore} from 'redux';
import placeReducers from './reducers/places';

const rootReducer=combineReducers({
    places:placeReducers
})
const configureStore=()=>{
    return createStore(rootReducer);
}

export default configureStore;
