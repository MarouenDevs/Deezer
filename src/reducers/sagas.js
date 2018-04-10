import {fork} from 'redux-saga/effects'
import {songsFetchSaga} from './songs.saga';

const sagas = [
    songsFetchSaga
]

function* rootSaga() {
    yield sagas.map(saga => fork(saga));
}
export default rootSaga;