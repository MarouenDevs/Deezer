import { combineReducers } from 'redux';
import SongsReducer from "./songs.reducer"


const rootReducer = combineReducers({
    songs: SongsReducer
});

export default rootReducer;