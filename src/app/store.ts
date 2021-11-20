import { configureStore } from '@reduxjs/toolkit';
import radioReducer from './reducers/radioSlice';
import logger from 'redux-logger';
import createSagaMiddleware from 'redux-saga';
import { radioSaga } from './sagas/radioSaga';

const sagaMiddleware = createSagaMiddleware();

export const store = configureStore({
  reducer: {
    radio: radioReducer,
  },
  middleware: [sagaMiddleware, logger],
});

sagaMiddleware.run(radioSaga);

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export default store;
