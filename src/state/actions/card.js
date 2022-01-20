export const addCardToOrder = (card, tasteIndex, amount) => ({
  type: 'ADD_CARD_TO_ORDER',
  payload: { card, taste: tasteIndex, amount },
});
