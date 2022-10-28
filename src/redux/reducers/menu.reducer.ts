import { createSlice } from "@reduxjs/toolkit";
import { StoreE } from "../../utils/constants";

const initialState:any = {
  menu: false,
};
const menuSlice = createSlice({
  name: StoreE.menu,
  initialState,
  reducers: {
    openMenu: (state) => {
      state.menu = true;
    },
    closeMenu: (state) => {
      state.menu = false;
    },
  },
});

export const { openMenu, closeMenu } = menuSlice.actions;
export default menuSlice.reducer;
