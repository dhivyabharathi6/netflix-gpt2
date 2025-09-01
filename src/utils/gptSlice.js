import { createSlice } from "@reduxjs/toolkit";

let gptSlice = createSlice({
    name: "gpt",
    initialState: {
        showgpt : false,
        movieResults: null,
        movieNames: null
    },
    reducers:{
        togglegpt: (state) =>{
            state.showgpt = !state.showgpt
        },
        addGptMovies:(state, action)=>{
            const{movieNames, movieResults} = action.payload
            state.movieNames = movieNames
            state.movieResults = movieResults
        }
    }
})

export const {togglegpt, addGptMovies}= gptSlice.actions
export default gptSlice.reducer