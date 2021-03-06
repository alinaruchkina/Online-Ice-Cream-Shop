import React from 'react';
import styles from './first_slide.module.css';
import icon from '../../utils/images/icon.png';
import { useDispatch } from 'react-redux';
import { nextSlide, prevSlide } from './../../state/actions/slider';
function First_slide({ title_small, title_big, image }) {
  const dispatch = useDispatch();

  return (
    <div className={styles.main}>
      <div className={styles.content}>
        <div className={styles.button__switch}>
          <button className={styles.button_previous} onClick={() => dispatch(prevSlide())}>
            {'<'}
          </button>
          <button className={styles.button_previous} onClick={() => dispatch(nextSlide())}>
            {'>'}
          </button>
        </div>
        <div className={styles.slider_content}>
          <div className={styles.slide}>
            <img src={icon} alt="icon" />
            <div className={styles.slide_text_first}>{title_small}</div>
            <div className={styles.slide_text_second}>{title_big}</div>
          </div>
        </div>
        <img className={styles.content__background_image} src={image} alt="ice_cream" />
      </div>
    </div>
  );
}

export default First_slide;
