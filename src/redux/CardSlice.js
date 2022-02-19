import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchRandomUser = createAsyncThunk(
  "card/fetchRandomUser",
  async () => {
    return fetch(`https://randomuser.me/api/`)
      .then((response) => response.json())
      .then((data) => data.results[0]);
  }
);

const initialState = {
  activeObject: null,
  loading: false,
  error: false,
  cardList: [],
  infoCard: [
    {
      id: 1,
      cardName: "",
      cardNumber: "1111 1111 1111 1111",
      cardMonth: "22",
      cardYear: "22",
      bankName: "Visa",
      status: null,
      isActive: true,
    },
  ],
  notActiveCards: [
    {
      isUsed: false,
    },
  ],
};
const cardSlice = createSlice({
  name: "card",
  initialState,
  reducers: {
    addNewCard: (state, action) => {
      state.infoCard = state.infoCard.concat(action.payload);
    },
    addActiveCard: (state, action) => {
      //push to notActive array from cards array
      state.notActiveCards = [...state.infoCard, action.payload];
      state.infoCard.push();

      //push to cards array from input
      state.infoCard = [...state.infoCard, action.payload];
      state.notActiveCards.push();
    },
    deletItem: (state, action) => {
      state.infoCard = state.infoCard.filter(
        (item) => item.id !== action.payload
      );
    },
  },
  extraReducers: {
    [fetchRandomUser.pending]: (state) => {
      state.status = "Loading";
      console.log(state.status);
    },
    [fetchRandomUser.fulfilled]: (state, action) => {
      state.status = "success";
      const { first, last } = action.payload.name;
      let allName = first + " " + last;
      for (let i = 0; i < state.infoCard.length; i++) {
        state.infoCard[i].cardName = allName.toUpperCase();
      }
      console.log(state.status);
    },
    [fetchRandomUser.rejected]: (state) => {
      state.status = "rejected";
      console.log(state.status);
    },
  },
});
export const { addNewCard, addActiveCard, deletItem } = cardSlice.actions;
export default cardSlice.reducer;
