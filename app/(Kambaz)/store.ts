import { configureStore } from "@reduxjs/toolkit";
import accountReducer from "./Account/reducer";
import coursesReducer from "./Courses/reducer";
import modulesReducer from "./Courses/[cid]/Modules/reducer";

const store = configureStore({
  reducer: {
    accountReducer,
    coursesReducer,
    modulesReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export default store;
