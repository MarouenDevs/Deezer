import {takeEvery, call, put} from 'redux-saga/effects'
import {getSongs as fetch , getMoreSongs as fetchMore,searchSong} from '../api/song';
import {FETCH_MORE_SONG, FETCH_SONG, REQUEST, SEARCH_SONG} from "./contants/actions";
import {success, fail, successSearch} from './songs.reducer'



export function* load(action) {
    try {
        const fetchNotes = yield call(fetch, action);

        yield put(success(fetchNotes.data));
    }
    catch (error) {
        yield put(fail(error));
    }
}

export function* search(action) {
    try {
        const fetchNotes = yield call(searchSong, action.payload);

        yield put(successSearch(fetchNotes.data));
    }
    catch (error) {
        yield put(fail(error));
    }
}

export function* loadMore(action) {
    try {

        const fetchNotes = yield call(fetchMore, action.payload);

        yield put(success(fetchNotes.data));
    }
    catch (error) {
        yield put(fail(error));
    }
}





export function* songsFetchSaga() {
    yield takeEvery(FETCH_SONG + REQUEST, load);
    yield takeEvery(FETCH_MORE_SONG + REQUEST, loadMore);
    yield takeEvery(SEARCH_SONG + REQUEST, search);
}







