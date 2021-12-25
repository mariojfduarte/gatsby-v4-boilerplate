import { createSlice, configureStore } from "@reduxjs/toolkit"
//import { combineReducers } from "redux";

const appReducer = createSlice({
  name: "appReducer",
  initialState: {
    mode: "light",
    lang: "pt",
  },
  reducers: {
    setMode: (state, action) => {
      localStorage.setItem("mode", action.payload)
      return { ...state, mode: action.payload }
    },
    setLang: (state, action) => {
      return { ...state, lang: action.payload }
    },
  },
})

export const { setMode, setLang } = appReducer.actions

/* const reducer = combineReducers({
  reducer_name_1: appReducer.reducer,
  reducer_name_2: counterSlice.reducer,
}); */

const store = configureStore({
  reducer: appReducer.reducer,
})

export default store
