import "./index.css";
import { RouterProvider } from "react-router-dom";
import { routes } from "./routes/routes.tsx";
import { Provider, useSelector } from "react-redux";
import { configureStore, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IUser } from "./model/IUser.ts";
import { createRoot } from "react-dom/client";

type UserSliceType = { users: IUser[] };

const initialState: UserSliceType = { users: [] };
console.log(initialState);

export const userSlice = createSlice({
  name: "userSlice",
  initialState: initialState,
  reducers: {
    loadUsers: (state, action: PayloadAction<IUser[]>) => {
      state.users = action.payload;
    },
  },
});

export const UserSliceAction = { ...userSlice.actions };

const store = configureStore({
  reducer: {
    userSlice: userSlice.reducer,
  },
});

export const useAppSelector =
  useSelector.withTypes<ReturnType<typeof store.getState>>();

createRoot(document.getElementById("root")!).render(
  <Provider store={store}>
    <RouterProvider router={routes} />
  </Provider>,
);
