import { configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import formReducer from './features/form/formSlice';
import formSaga from './features/form/formSaga';

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer: {
    form: formReducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(sagaMiddleware),
});

sagaMiddleware.run(formSaga);

export default store;
