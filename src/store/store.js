import { createStore, applyMiddleware } from 'redux'
// import { composeWithDevTools } from 'redux-devtools-extension'
// import logger from 'redux-logger'
// import thunk from 'redux-thunk'
import rootReducer from '../reducers/rootReducer'
import rootSaga from '../sagas/rootSaga';
import createSagaMiddleware from 'redux-saga'

const sagaMiddleware=createSagaMiddleware();

const store = createStore(rootReducer,applyMiddleware(sagaMiddleware));
sagaMiddleware.run(rootSaga)

// export interface AppState{
//     items
// }

export default store