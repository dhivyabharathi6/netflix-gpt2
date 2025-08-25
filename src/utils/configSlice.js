import { createSlice } from "@reduxjs/toolkit";

let configSlice = createSlice({
    name : "config",
    initialState :{
        language : "en"
    },
    reducers :{
        changelang:(state,action)=>{
            state.language = action.payload
        }
    }

})
export const {changelang} = configSlice.actions
export default configSlice.reducer