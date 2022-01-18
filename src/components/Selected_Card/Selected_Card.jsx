import React, { useEffect, useState } from 'react';
import styles from './Selected_Card.module.css';
import vanilla_prague from '../../utils/images/vanilla_prague.jpg';
import { useSelector, useDispatch } from 'react-redux';
import { addCardToOrder } from '../../state/actions/card';
import { addedNewCard } from '../../state/actions/orders';
import { Link } from 'react-router-dom';

function Product_Cart() {
  const currentCard = useSelector((state) => state.card.currentCard);
  // const test = useSelector((state) => state.orders.orders);
  const card = useSelector((state) => state.card.addNewCardToOrder);
  const dispatch = useDispatch();
  const [taste, setTaste] = useState(0);
  const [amount, setAmount] = useState(1);
  useEffect(() => {
    // const card = useSelector((state) => state.card.addNewCardToOrder);
    // return card;
  }, [amount, taste]);
  const addCard = () => {
    dispatch(addCardToOrder(taste, amount));
    dispatch(addedNewCard(card));
  };

  return (
    <div>
      <div className={styles.header_product}>
        <div className={styles.product_inscription}>PRODUCT</div>
        <div>All / Vanilla Prague</div>
      </div>
      <div className={styles.test} key={currentCard.id}>
        <div>
          <div className={styles.header_vanilla_prague}>{currentCard.name}</div>
          <img
            className={styles.image_vanilla_prague}
            src={currentCard.image ? currentCard.image : vanilla_prague}
            alt="product image"
          />
        </div>
        <div>
          <div className={styles.vanilla_prague_container}>
            <div className={styles.specification_vanilla_prague}>{currentCard.description}</div>
          </div>
          <div className={styles.card__taste}>
            {currentCard.taste.map((item, index) => (
              <div
                className={`${styles.card__taste_element} ${
                  taste === index ? styles.card_taste_element_selected : null
                }`}
                key={index}
                onClick={() => setTaste(index)}>
                {item}
              </div>
            ))}
          </div>
          <div className={styles.card__quantity}>
            <div>Quantity:</div>
            <div
              className={styles.card__quantity_minus}
              onClick={amount === 1 ? null : () => setAmount(amount - 1)}>
              -
            </div>
            <div>{amount}</div>
            <div className={styles.card__quantity_plus} onClick={() => setAmount(amount + 1)}>
              +
            </div>
          </div>
          <div>{currentCard.price}</div>
        </div>
      </div>
      <button onClick={addCard}>Add to order</button>
      <Link to="/orders">tttttt</Link>
    </div>
  );
}
export default Product_Cart;
