import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface CounterState {
  value: number
}

const initialState: CounterState = {
  value: 0,
}

// -------------------- ASYNC THUNKS --------------------
export const fetchAJoke = createAsyncThunk(
  'counter/fetchAJoke',
  async (_, { rejectWithValue }) => {
    const resp = await fetch('https://api.chucknorris.io/jokes/random');
    return resp.json();
  }
)
// -------------------- ASYNC THUNKS --------------------

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment: (state) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.value += 1
    },
    decrement: (state) => {
      state.value -= 1
    },
    incrementByAmount: (state, action: PayloadAction<number>) => {
      state.value += action.payload
    },
  },
  extraReducers: builder => {
    builder.addCase(fetchAJoke.fulfilled, (state, joke) => {
      state.value = 99999999;
      console.log(joke);
    }),
    builder.addCase(fetchAJoke.rejected, (state, error) => {
      console.log('here');
      console.log(error);
    })
  }
})

// Action creators are generated for each case reducer function
export const { increment, decrement, incrementByAmount } = counterSlice.actions

export default counterSlice.reducer
