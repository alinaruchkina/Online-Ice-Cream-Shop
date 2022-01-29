import React from 'react';
import styles from './DescriptionOfThePromotion.module.css';
import icon from '../../utils/images/icon_of_the_ice_cream.png';

function DescriptionOfThePromotion() {
  return (
    <div>
      <div className={styles.stock_title}>
        <div className={styles.headline}> Find Your Taste </div>
        <div className={styles.promotion}>Buy any ice cream @ get One Free</div>
        <img className={styles.image_with_ice_cream} src={icon} alt="icon of the ice cream" />
      </div>
      <div className={styles.content_of_promotion}>
        <div className={styles.card_box}>
          <div className={styles.imageContainerBlue}>
            <div className={styles.informationAboutIceCream}>
              <div className={styles.raspberryFlavour}>Raspberry Flavour</div>
              <div className={styles.icуCreamTaste}>Blue Moon</div>
            </div>
          </div>
        </div>
        <div>
          <div className={styles.card_box}>
            <div className={styles.imageContainerGreen}>
              <div className={styles.informationAboutIceCream}>
                <div className={styles.meldOfFlavor}>Meld of Flavor</div>
                <div className={styles.icуCreamTaste}>Neapolitan</div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className={styles.card_box}>
            <div className={styles.imageContainerRose}>
              <div className={styles.informationAboutIceCream}>
                <div className={styles.naturalSweetness}>Natural Sweetness</div>
                <div className={styles.icуCreamTaste}>Lucuma</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DescriptionOfThePromotion;
