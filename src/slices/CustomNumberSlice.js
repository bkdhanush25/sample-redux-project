import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    number: 0
  };

const customNumberSlice = createSlice({
    name: 'customnumbers',
    initialState,
    reducers: {
        incrementCustomNumber(state, action){
            state.number += action.payload;
        },
        decrementCustomNumber(state, action){
            state.number -= action.payload;
        },

    }
})

export const { incrementCustomNumber, decrementCustomNumber } = customNumberSlice.actions;
export default customNumberSlice.reducer;