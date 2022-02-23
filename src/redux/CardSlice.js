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
  infoCard: [
    {
      id: "1",
      cardName: "Loading",
      cardNumber: "2565 5269 0981 0271",
      cardMonth: "22",
      cardYear: "22",
      bankName: "Visa",
      cvv:"098",
      status: null,
      isActive: false,
    },
  ],
};
const cardSlice = createSlice({
  name: "card",
  initialState,
  reducers: {
    addNewCard: (state, action) => {
      //state.infoCard = state.infoCard.concat(action.payload);
      //alternativ 2
      state.infoCard.push(action.payload);
    },

    deleteCard: (state, { payload }) => {
      let deleteCards = state.infoCard.filter((card) => card.id !== payload);
      return { ...state, infoCard: deleteCards };
    },
    setActive: (state, { payload }) => {
      let setActiveCards = state.infoCard.filter(
        (card) => card.id !== payload.id
      );
      setActiveCards.splice(0, 0, payload);
      return { ...state, infoCard: setActiveCards };
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
export const { addNewCard, deleteCard, setActive } = cardSlice.actions;
export default cardSlice.reducer;
