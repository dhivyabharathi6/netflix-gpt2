import {configureStore} from "@reduxjs/toolkit"
import userSliceReducer from "./userSlice"
import movieSliceReducer from "./movieSlics"
import gptreducer from "./gptSlice"
import configSlicereducer from "./configSlice"

let appStore = configureStore({
    reducer : {
       user: userSliceReducer,
       movie: movieSliceReducer,
       gpt : gptreducer,
       config: configSlicereducer
    }
})

export default appStore