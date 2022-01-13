import React from 'react';
import styles from './Product_Cart.module.css';
import vanilla_prague from '../../utils/images/vanilla_prague.jpg';

function Product_Cart() {
  return (
    <div>
      <div className={styles.header_product}>
        <div className={styles.product_inscription}>PRODUCT</div>
        <div>All / Vanilla Prague</div>
      </div>
      <div className={styles.test}>
        <div>
          <div className={styles.header_vanilla_prague}>Vanilla Prague</div>
          <img className={styles.image_vanilla_prague} src={vanilla_prague} alt="Vanilla Prague" />
        </div>
        <div>
          <div className={styles.vanilla_prague_container}>
            <div className={styles.specification_vanilla_prague}>
              The creamy perfection of classic Swiss ice cream, lovingly crafted by Swiss artisans
              and topped with waves of chocolate sauce
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Product_Cart;
