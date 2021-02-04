import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { createStore, combineReducers } from 'redux';

export interface SnackState {
  snack: string | undefined;
}

export interface AppState {
  snack: SnackState;
}

const snackSlice = createSlice({
  name: 'snack',
  initialState: { snack: undefined } as SnackState,
  reducers: {
    update(state, action: PayloadAction<SnackState>) {
      return { ...state, ...action.payload };
    }
  }
});

const { reducer: snackReducer } = snackSlice;

export const {
  actions: { update: updateSnackAction }
} = snackSlice;

export const snackSelector = (state: AppState) => state.snack.snack;

export const store = createStore(combineReducers({ snack: snackReducer }));
