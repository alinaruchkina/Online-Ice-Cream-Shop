export const deleteAllCard = () => ({
  type: 'DELETE_ALL_CARD',
});

export const addedNewCard = (card) => ({
  type: 'ADDED_NEW_CARD',
  payload: card,
});

export const changeAmountCard = (id, action, taste) => ({
  type: 'CHANGE_AMOUNT_CARD',
  payload: {
    id,
    action,
    taste,
  },
});

export const deleteOneCard = (id, taste) => ({
  type: 'DELETE_ONE_CARD',
  payload: {
    id,
    taste,
  },
});
