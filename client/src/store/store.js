import {configureStore} from '@reduxjs/toolkit'
import globalSlice from './globalSlice'
const store = configureStore({
    reducer: {
        // Add your reducers here
        global: globalSlice,
    }
})

export default store;