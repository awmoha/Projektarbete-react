import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchRandomUser = createAsyncThunk(
  "card/fetchRandomUser",
  async () => {
    return fetch(`https://randomuser.me/api/`)
      .then((response) => response.json())
      .then((data) => data.results[0]);
  }
);
const CardSlice = createSlice({
  name: "card",
  initialState: {
    infoCard: [
      {
        id: 1,
        name: "",
        endor: "",
        cardNumber: "",
        cardMonth: "",
        cardYear: "",
        bankName: "",
        cardsStateActiv: false,
      },
    ],

    lateId: 1,
  },

  reducers: {
    addNewCard: (state, action) => {
      state.infoCard.push(action.payload);
      state.lateId += 1;
    },
    extraRedusers:{}
  },
});
export const { addNewCard } = CardSlice.actions;
export default CardSlice.reducer;
