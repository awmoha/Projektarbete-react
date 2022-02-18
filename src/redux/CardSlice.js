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
    
    lateId: 1,
  },
  

    reducers: {
      addNewCard: (state, action) => {
        state.infoCard.push(action.payload);
        state.lateId +=1;
      },
  },
});
export const { addNewCard } = CardSlice.actions;
export default CardSlice.reducer;
