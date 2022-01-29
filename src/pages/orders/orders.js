import React from 'react';
import styles from './orders.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { deleteAllCard, changeAmountCard, deleteOneCard } from './../../state/actions/orders';
import defaultImage from '../../utils/images/green_ice_cream.jpg';
import Footer from '../../components/Footer/footer';

function Orders() {
  const orders = useSelector((state) => state.orders.orders);
  const totalPrice = useSelector((state) => state.orders.totalPrice);
  const dispatch = useDispatch();
  return (
    <div>
      <div className={styles.orders}>
        {orders &&
          orders.map((item) => (
            <div>
              <div className={styles.orders__card}>
                <img
                  className={styles.orders__card_image}
                  src={item.image ? item.image : defaultImage}
                  alt="1"
                />
                <div className={styles.orders__card__description}>
                  <div className={styles.description_name}>Name:</div>
                  <div className={styles.description_taste}>Taste:</div>
                  <div className={styles.description_amount}>Amount:</div>
                  <div className={styles.description_price}>Price:</div>
                </div>
                <div className={styles.orders__card__description}>
                  <div className={styles.orders__card__description_name}>{item.name}</div>
                  <div className={styles.orders__card__description_taste}>{item.taste}</div>
                  <div className={styles.amount_box}>
                    <div
                      className={styles.orders__card__description_taste_plus}
                      onClick={
                        item.amount > 1
                          ? () => dispatch(changeAmountCard(item.id, false, item.taste))
                          : null
                      }>
                      -
                    </div>
                    <div className={styles.orders__card__description_amount}>{item.amount}</div>
                    <div
                      className={styles.orders__card__description_taste_minus}
                      onClick={() => dispatch(changeAmountCard(item.id, true, item.taste))}>
                      +
                    </div>
                  </div>
                  <div className={styles.orders__card__description_price}>{item.price}$</div>
                </div>
                <div
                  className={styles.delete_one}
                  onClick={() => dispatch(deleteOneCard(item.id, item.taste))}>
                  X
                </div>
              </div>
            </div>
          ))}

        <div>
          <div className={styles.total_price}>
            <div className={styles.desc_total}>Total price:</div>
            <div>{totalPrice}$</div>
          </div>
          {orders.length !== 0 ? (
            <button className={styles.buy} onClick={() => dispatch(deleteAllCard())}>
              Delete all
            </button>
          ) : null}
        </div>
        <div className={styles.buy}>Buy</div>
      </div>
      <Footer bottom />
    </div>
  );
}

export default Orders;
