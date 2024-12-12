import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./UserSlice";
import movieReducer from "./movieSlice"
import GptReducer from "./GptSlice"

const appStore = configureStore({
  reducer: {
    user:userReducer,
    movie:movieReducer,
    gpt:GptReducer,
  },
});

export default appStore;
