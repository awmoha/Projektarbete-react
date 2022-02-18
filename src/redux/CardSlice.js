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
        cardName: "",
        endor: "",
        cardNumber: "",
        cardMonth: "",
        cardYear: "",
        bankName: "",
        status : null,
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
  },
  extraRedusers: {
    [fetchRandomUser.pending] :(state) =>{
      state.status = "Loading"
    },
    [fetchRandomUser.fulfilled]:(state, action) =>{
      state.status = "success";
      const {first, last} = action.payload.name;
      let allName = first + " " + last;
      for ( let i = 0; i < state.infoCard.length; i++){
        state.infoCard[i].cardName = allName.toUpperCase();
      }
    },
    [fetchRandomUser.rejected]:(state) =>{
      state.status = "rejected";
      
    }
  },
});
export const { addNewCard } = CardSlice.actions;
export default CardSlice.reducer;
