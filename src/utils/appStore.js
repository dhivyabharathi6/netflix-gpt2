import {configureStore} from "@reduxjs/toolkit"
import userSliceReducer from "./userSlice"
import movieSliceReducer from "./movieSlics"

let appStore = configureStore({
    reducer : {
       user: userSliceReducer,
       movie: movieSliceReducer
    }
})

export default appStore