import React from 'react';
import styles from './Product_Cart.module.css';
import vanilla_prague from '../../utils/images/vanilla_prague.jpg';
import { useSelector, useDispatch } from 'react-redux';

function Product_Cart() {
  const currentCard = useSelector((state) => state.card.currentCard);
  const dispatch = useDispatch();
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
            src={currentCard.image}
            alt="product image"
          />
        </div>
        <div>
          <div className={styles.vanilla_prague_container}>
            <div className={styles.specification_vanilla_prague}>{currentCard.description}</div>
          </div>
          <div className={styles.card__taste}>
            {currentCard.teste.map((item, index) => (
              <div className={styles.card__taste_element} key={index}>
                {item}
              </div>
            ))}
          </div>
          <div>{currentCard.price}</div>
        </div>
      </div>
      <button>Add to order</button>
    </div>
  );
}
export default Product_Cart;
