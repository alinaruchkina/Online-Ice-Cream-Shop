import React, { useState, useEffect } from 'react';
import styles from './Selected_Card.module.css';
import vanilla_prague from '../../utils/images/vanilla_prague.jpg';
import { useSelector, useDispatch } from 'react-redux';
import { addCardToOrder, setCard } from '../../state/actions/card';
import { Redirect, useParams } from 'react-router-dom';

function Product_Cart() {
  let { id } = useParams();
  const currentCard = useSelector((state) => state.card.currentCard);
  const dispatch = useDispatch();
  const [taste, setTaste] = useState(0);
  const [amount, setAmount] = useState(1);
  useEffect(() => {
    dispatch(setCard(Number(id)));
  }, []);
  const addCard = () => {
    dispatch(addCardToOrder(currentCard, taste, amount));
  };

  return (
    <div>
      {!currentCard ? (
        <Redirect to="/home" />
      ) : (
        <div>
          <div className={styles.header_product}>
            <div className={styles.product_inscription}>PRODUCT</div>
          </div>
          <div className={styles.test} key={currentCard.id}>
            <div>
              <img
                className={styles.image_vanilla_prague}
                src={currentCard.image ? currentCard.image : vanilla_prague}
                alt="product image"
              />
            </div>
            <div>
              <div className={styles.header_vanilla_prague}>{currentCard.name}</div>
              <div className={styles.vanilla_prague_container}>
                <div className={styles.specification_vanilla_prague}>{currentCard.description}</div>
              </div>
              <div className={styles.description_product}>
                <div className={styles.description_product_stat}>
                  <div className={styles.description_flavour}>Flavour:</div>
                  <div className={styles.description_quantity}>Quantity:</div>
                  <div className={styles.description_price}>Price:</div>
                </div>
                <div className={styles.description_product_dynamic}>
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
                    <div
                      className={`${styles.card__description_change} ${styles.card__description_change_minus}`}
                      onClick={amount === 1 ? null : () => setAmount(amount - 1)}>
                      -
                    </div>
                    <div>{amount}</div>
                    <div
                      className={`${styles.card__description_change} ${styles.card__description_change_minus}`}
                      onClick={() => setAmount(amount + 1)}>
                      +
                    </div>
                  </div>
                  <div className={styles.price_dynamic}>{currentCard.price}$</div>
                </div>
              </div>
            </div>
          </div>
          <button className={styles.button_to_order} onClick={addCard}>
            Add to order
          </button>
        </div>
      )}
    </div>
  );
}
export default Product_Cart;
