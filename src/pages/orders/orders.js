import React from 'react';
import styles from './orders.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { deleteAllCard } from './../../state/actions/orders';

function Orders() {
  const orders = useSelector((state) => state.orders.orders);
  const dispatch = useDispatch();
  return (
    <div className={styles.orders}>
      {orders &&
        orders.map((item) => (
          <div className={styles.orders__card}>
            <img src={item.image} alt="1" />
            <div>
              <div>{item.name}</div>
              <div>{item.taste}</div>
              <div>{item.price}</div>
            </div>
          </div>
        ))}

      <div>
        <button onClick={() => dispatch(deleteAllCard())}>Delete all</button>
      </div>
    </div>
  );
}

export default Orders;
