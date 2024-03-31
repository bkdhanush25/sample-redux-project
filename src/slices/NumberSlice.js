import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    number: 0
  };

const numberSlice = createSlice({
    name: 'number',
    initialState,
    reducers: {
        incrementNumber(state){
            state.number += 1;
        },
        decrementNumber(state){
            state.number -= 1;
        },

    }
})

export const { incrementNumber, decrementNumber } = numberSlice.actions;
export default numberSlice.reducer;