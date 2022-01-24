export const deleteAllCard = () => ({
  type: 'DELETE_ALL_CARD',
});

export const addedNewCard = (card) => ({
  type: 'ADDED_NEW_CARD',
  payload: card,
});

export const changeAmountCard = (id, action) => ({
  type: 'CHANGE_AMOUNT_CARD',
  payload: {
    id,
    action,
  },
});

export const deleteOneCard = (id) => ({
  type: 'DELETE_ONE_CARD',
  payload: id,
});
