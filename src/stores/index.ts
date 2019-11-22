import {
    createStore, applyMiddleware, Store, compose,
} from 'redux';
import createSagaMiddleware from 'redux-saga';
import thunk from 'redux-thunk';
import { RepositoriesState } from './ducks/repositories/types';
import rootReducer from './ducks/rootReducer';
import rootSaga from './ducks/rootSaga';

const composeEnhancers = (window && (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__)
    || compose;

export interface ApplicationState {
    repositories: RepositoriesState
}

const sagaMiddleware = createSagaMiddleware();

const store: Store<ApplicationState> = createStore(rootReducer,
    composeEnhancers(applyMiddleware(sagaMiddleware, thunk)));

sagaMiddleware.run(rootSaga);

export default store;
