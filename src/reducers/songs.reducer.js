import {FETCH_SONG, FETCH_MORE_SONG, SEARCH_SONG} from "./contants/actions";
import {request as r} from "./http/http.reducer";
import {success as s} from "./http/http.reducer";
import {fail as f} from "./http/http.reducer";

export const request = r(FETCH_SONG);
export const success = s(FETCH_SONG);
export const fail = f(FETCH_SONG);
export const fetchMore = r(FETCH_MORE_SONG);
export const searchSongs = r(SEARCH_SONG);
export const successSearch = s(SEARCH_SONG);


export default function reducer(state = {fetching: false}, action) {


    switch (action.type) {
        case request().type: {
            return {...state, ...action.payload};

        }
        case success().type: {
            if (state.data) {
                return {data: {data: state.data.data.concat(action.payload.data), next: action.payload.next}};

            } else {
                return {data: action.payload};
            }

        }
        case successSearch().type: {
            return {data: action.payload};
        }

        case fail().type: {
            return {...state, ...action.payload};

        }
        default: {
            return state;
        }

    }

}