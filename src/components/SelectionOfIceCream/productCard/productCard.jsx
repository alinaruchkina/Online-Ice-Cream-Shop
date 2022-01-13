import React from 'react';
import styles from './productCard.module.css';
import ice_cake from '../../../utils/images/Choco_Cherry.jpg';

function ProductCard({ image, name, price }) {
  return (
    <div>
      <div className={styles.products_container}>
        <img className={styles.image_of_the_product} src={image} alt="ice cake" />
      </div>
      <div className={styles.product_names}>
        <div>
          <div className={styles.product}>{name}</div>
          <div className={styles.price_of_the_ice_cake}>{price}$</div>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
