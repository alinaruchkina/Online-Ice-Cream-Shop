export const deleteAllCard = () => ({
  type: 'DELETE_ALL_CARD',
});

export const addedNewCard = (card) => ({
  type: 'ADDED_NEW_CARD',
  payload: card,
});
