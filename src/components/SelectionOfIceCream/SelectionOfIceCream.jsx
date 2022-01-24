import React from 'react';
import styles from './SelectionOfIceCream.module.css';
import icon from '../../utils/images/icon_of_the_ice_cream.png';
// import { useSelector } from 'react-redux';

function SelectionOfIceCream() {
  // const cake_carousel = useSelector((state) => state.cake_carousel.cake_carousel);
  return (
    <div className={styles.main_of_the_selection}>
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
      <div className={styles.ProductCard_wrap}></div>
    </div>
  );
}
export default SelectionOfIceCream;
