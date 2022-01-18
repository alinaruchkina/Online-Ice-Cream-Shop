export const addCardToOrder = (tasteIndex, amount) => ({
  type: 'ADD_CARD_TO_ORDER',
  payload: {
    taste: tasteIndex,
    amount,
  },
});
