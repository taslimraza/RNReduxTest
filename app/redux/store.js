import {configureStore} from '@reduxjs/toolkit'
import rootReducer from './reducers/rootReducer';
import quoteSaga from './saga/quoteSaga'
import createSagaMiddleware from 'redux-saga';

const sagaMiddleware = createSagaMiddleware();
const store  = configureStore({
    reducer:rootReducer,
    middleware:()=>[sagaMiddleware]
});

sagaMiddleware.run(quoteSaga);

export default store;