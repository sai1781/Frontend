import { configureStore } from "@reduxjs/toolkit";
import formReducer from "../Slice/formReducer";

const Store = configureStore({
  reducer: {
    FReducer: formReducer,
  },
});

export default Store;
