import React from 'react';
import styles from './DescriptionOfThePromotion.module.css';
import icon from '../../utils/images/icon_of_the_ice_cream.png';

function DescriptionOfThePromotion(params) {
  return (
    <div>
      <div>
        <div className={styles.headline}> Find Your Taste </div>
        <div>Buy any ice cream @ get One Free</div>
        <img src={icon} alt="icon of the ice cream" />
      </div>
    </div>
  );
}

export default DescriptionOfThePromotion;
