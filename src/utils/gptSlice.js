import { createSlice } from "@reduxjs/toolkit";

let gptSlice = createSlice({
    name: "gpt",
    initialState: {
        showgpt : false
    },
    reducers:{
        togglegpt: (state) =>{
            state.showgpt = !state.showgpt
        }
    }
})

export const {togglegpt}= gptSlice.actions
export default gptSlice.reducer