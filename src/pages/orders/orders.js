import React from 'react';
import styles from './orders.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { deleteAllCard, changeAmountCard } from './../../state/actions/orders';
import defaultImage from '../../utils/images/green_ice_cream.jpg';

function Orders() {
  const orders = useSelector((state) => state.orders.orders);
  const totalPrice = useSelector((state) => state.orders.totalPrice);
  const dispatch = useDispatch();
  return (
    <div className={styles.orders}>
      {orders &&
        orders.map((item) => (
          <div className={styles.orders__card}>
            <img
              className={styles.orders__card_image}
              src={item.image ? item.image : defaultImage}
              alt="1"
            />
            <div className={styles.orders__card__description}>
              <div>Name:</div>
              <div>Taste:</div>
              <div>Amount:</div>
              <div>Price:</div>
            </div>
            <div className={styles.orders__card__description}>
              <div className={styles.orders__card__description_name}>{item.name}</div>
              <div className={styles.orders__card__description_taste}>{item.taste}</div>
              <div className={styles.amount_box}>
                <div
                  className={styles.orders__card__description_taste_plus}
                  onClick={() => dispatch(changeAmountCard(item.id, true))}>
                  +
                </div>
                <div className={styles.orders__card__description_amount}>{item.amount}</div>
                <div
                  className={styles.orders__card__description_taste_minus}
                  onClick={() => dispatch(changeAmountCard(item.id, false))}>
                  -
                </div>
              </div>
              <div className={styles.orders__card__description_price}>{item.price}$</div>
            </div>
          </div>
        ))}

      <div>
        {totalPrice}
        <button onClick={() => dispatch(deleteAllCard())}>Delete all</button>
      </div>
    </div>
  );
}

export default Orders;
