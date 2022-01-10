import React from 'react';
import styles from './DescriptionOfThePromotion.module.css';
import icon from '../../utils/images/icon_of_the_ice_cream.png';

function DescriptionOfThePromotion(params) {
  return (
    <div>
      <div>
        <div className={styles.headline}> Find Your Taste </div>
        <div className={styles.promotion}>Buy any ice cream @ get One Free</div>
        <img className={styles.image_with_ice_cream} src={icon} alt="icon of the ice cream" />
      </div>
    </div>
  );
}

export default DescriptionOfThePromotion;
