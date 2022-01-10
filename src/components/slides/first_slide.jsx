import React from 'react';
import styles from './first_slide.module.css';
import icon from '../../utils/images/icon.png';
import { changeImage } from '../../utils/helpers/image_carousel';
function First_slide({ title_small, title_big }) {
  return (
    <div className={styles.main}>
      <div className={styles.content}>
        <div className={styles.slider_content}>
          <div className={styles.slide}>
            <img src={icon} alt="icon" />
            <div className={styles.slide_text_first}>{title_small}</div>
            <div className={styles.slide_text_second}>{title_big}</div>
          </div>
        </div>
        <img
          class={styles.content__background_image}
          src={changeImage(title_small)}
          alt="ice_cream"
        />
      </div>
    </div>
  );
}

export default First_slide;
