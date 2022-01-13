import React from 'react';
import styles from './SelectionOfIceCream.module.css';
import icon from '../../utils/images/icon_of_the_ice_cream.png';
import ProductCard from './productCard/productCard';
import { useSelector } from 'react-redux';
import style from 'react-responsive-carousel/lib/styles/carousel.min.css';
// import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';

function SelectionOfIceCream() {
  const cake_carousel = useSelector((state) => state.cake_carousel.cake_carousel);
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
      <div className={styles.ProductCard_wrap}>
        <Carousel
          showArrows={true}
          showIndicators={false}
          infiniteLoop={true}
          swipeable={true}
          width={1000}
          centerMode={true}
          centerSlidePercentage={10}>
          {cake_carousel.map((item, index) => (
            // <div key={index} className={style.item}>
            <ProductCard image={item.image} name={item.name} price={item.price} />
            // </div>
          ))}
        </Carousel>
      </div>
    </div>
  );
}
export default SelectionOfIceCream;
