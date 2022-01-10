import React from 'react';
import styles from './SelectionOfIceCream.module.css';
import icon from '../../utils/images/icon_of_the_ice_cream.png';
import ice_cake from '../../utils/images/Choco_Cherry.jpg';
import ice_cake2 from '../../utils/images/Creamy_Cake.jpg';
import ice_cake3 from '../../utils/images/Peppermint_Chip.jpg';
import ice_cake4 from '../../utils/images/Red_Velvet_Cake.jpg';
import ice_cake5 from '../../utils/images/Roster_Cream_Cake.jpg';
import ice_cake6 from '../../utils/images/Rainbow_Sherbet.jpg';
import ice_cake7 from '../../utils/images/Toasted_Strawberry.jpg';

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
      <div className={styles.products_container}>
        <img src={ice_cake} alt="ice cake" />
        <img src={ice_cake2} alt="ice cake" />
        <img src={ice_cake3} alt="ice cake" />
        <img src={ice_cake4} alt="ice cake" />
        <img src={ice_cake5} alt="ice cake" />
        <img src={ice_cake6} alt="ice cake" />
        <img src={ice_cake7} alt="ice cake" />
      </div>
      <div className={styles.product_names}>
        <div>
          <div className={styles.product}>Choco Cherry</div>
        </div>
        <div>
          <div className={styles.product}>Creamy Cake</div>
        </div>
        <div>
          <div className={styles.product}>Peppermint Chip</div>
        </div>
        <div>
          <div className={styles.product}>Red Velvet Cake</div>
        </div>
        <div>
          <div className={styles.product}>Roster Cream Cake</div>
        </div>
        <div>
          <div className={styles.product}>Rainbow Sherbet</div>
        </div>
        <div>
          <div className={styles.product}>Toasted Strawberry</div>
        </div>
      </div>
    </div>
  );
}
export default SelectionOfIceCream;
