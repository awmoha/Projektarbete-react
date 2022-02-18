import { createSlice } from "@reduxjs/toolkit";
const CardSlice = createSlice({
  name: "card",
  initialState: {
    infoCard: [
      {
        id: 1,
        name: "Moha",
        endor: "Master",
        cardNumber: "1111 1111 1111 1111",
        cardMonth: "11",
        cardYear: "11",
        bankName: "Visa",
        cardsStateActiv: false,
      },
    ],
    notActiveCards: [
      {
        isUsed: false,
      },
    ],

    reducers: {
      showCard: (state) => {
        state.infoCard = state.infoCard
      },

    },
  },
});
export const { showCard } = CardSlice.actions;
export default CardSlice.reducer;
