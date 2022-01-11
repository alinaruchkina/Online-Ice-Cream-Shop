import React from 'react';
import styles from './SelectionOfIceCream.module.css';
import icon from '../../utils/images/icon_of_the_ice_cream.png';

function SelectionOfIceCream() {
  return (
    <div>
      <div className={styles.stock_title}>
        <div className={styles.headline}> Best Taste of Desserts </div>
        <div className={styles.promotion}>Our Products</div>
        <img className={styles.image_with_ice_cream} src={icon} alt="icon of the ice cream" />
      </div>
      <div className={styles.selection}>
        <div className={styles.selection_of_ice_cream}>Ice cake</div>
        <div className={styles.selection_of_ice_cream}>Ice Bars</div>
        <div className={styles.selection_of_ice_cream}>Cream Cone</div>
      </div>
    </div>
  );
}
export default SelectionOfIceCream;
