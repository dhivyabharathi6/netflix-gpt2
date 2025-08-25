import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
    name: "movies",
    initialState: {
        nowPlaying : null,
        trailer:null,
        popular:null,
        toprated: null,
        upcoming :null
    },
    reducers: {
        addNowPlaying : (state,action)=>{
            state.nowPlaying = action.payload
        },
        addTrailer :(state,action)=>{
            state.trailer =action.payload
        },
        addPopular: (state,action)=>{
            state.popular=action.payload
        },
        addToprated: (state,action)=>{
            state.toprated=action.payload
        },
        addUpcoming: (state,action)=>{
            state.upcoming=action.payload
        }
    }
})
export const {addNowPlaying,addTrailer,addPopular, addToprated,addUpcoming} = movieSlice.actions
export default movieSlice.reducer