import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./UserSlice";
import movieReducer from "./movieSlice";
import GptReducer from "./GptSlice";
import LanguageReducer from "./LanguageSlice"

const appStore = configureStore({
  reducer: {
    user:userReducer,
    movie:movieReducer,
    gpt:GptReducer,
    config:LanguageReducer,
  },
});

export default appStore;
