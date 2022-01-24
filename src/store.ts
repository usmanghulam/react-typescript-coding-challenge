import { TypedUseSelectorHook, useSelector as useReduxSelector } from 'react-redux';
import { configureStore, createSlice, PayloadAction } from '@reduxjs/toolkit';

import { State } from './types';

const initialState: State = {
  user: "",
  transactions: {},
  tasks: []
};

export const { actions, reducer } = createSlice({
  name: 'store',
  initialState,
  reducers: {
    set: (state, action: PayloadAction<Partial<State>>) => ({ ...state, ...action.payload }),
    setUser: (state, { payload }) => {
      state.user = payload;
    },
    setUsers: (state, { payload }) => {
      state.transactions = payload.transaction;
    },
    deleteUser: (state, { payload }) => {
      const { deleted, id } = payload.user;
      const transactions = state.transactions;
      delete transactions[id];
      state.transactions = transactions;
    },
    addTransactions: (state, { payload }) => {
      state.transactions = { ...state.transactions, ...payload.transaction };
    },
  }
});

const store = configureStore({
  reducer,
  devTools: true
});

export default store;

export { useDispatch } from 'react-redux';

export const useSelector: TypedUseSelectorHook<State> = useReduxSelector;
