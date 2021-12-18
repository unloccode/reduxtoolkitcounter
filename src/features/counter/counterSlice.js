import { createSlice } from "@reduxjs/toolkit";

export const counterSlice = createSlice({
    name: 'counter', //string name for the slice this is used to identify the slice
    initialState: {
        value: 0
    },
    reducers: {
        increment: state => {
             state.value += 1;
            },
        decrement: state => { state.value -= 1 },
    },
});
export const { increment, decrement } = counterSlice.actions
export default counterSlice.reducer
//export const selectCount = state => state.counter.value;