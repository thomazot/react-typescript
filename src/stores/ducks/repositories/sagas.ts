import { call, put} from 'redux-saga/effects'
import { loadSuccess, loadFailure } from './actions'
import Api from '../../../services/api';

export function* load() {
    try {
        const response = yield call(Api.get, 'users/thomazot/repos')
        yield put(loadSuccess(response.data))
    } catch(err) {
        yield put(loadFailure())
    }
}