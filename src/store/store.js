import { configureStore } from "@reduxjs/toolkit";
import timeFramesReducers from './timeFramesReducer'

export  const store = configureStore({reducer:{
    data:timeFramesReducers,
}})