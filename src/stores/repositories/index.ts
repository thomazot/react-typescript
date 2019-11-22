
import { Reducer } from 'redux'
import { RepositoriesState, RepositoriesTypes } from './types'

const INITAL_STATE:RepositoriesState = {
    data: [{
        id: 1, name: 'Thomaz',
    }],
    error: false,
    loading: false,
}

const reducer: Reducer<RepositoriesState> = (state = INITAL_STATE, { type, payload }) => {
    switch (type) {
    case RepositoriesTypes.LOAD_REQUEST:
        return { ...state, loading: true }
    case RepositoriesTypes.LOAD_SUCCESS:
        return {
            ...state, loading: false, error: false, data: payload.data,
        }
    case RepositoriesTypes.LOAD_FAILURE:
        return {
            ...state, loading: false, error: true, data: [],
        }
    default:
        return state
    }
}

export default reducer
