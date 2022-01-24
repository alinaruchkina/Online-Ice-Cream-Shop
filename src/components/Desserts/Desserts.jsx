import React from 'react';
import styles from './Desserts.module.css';
function Desserts() {
  return (
    <div>
      <div className={styles.main_desserts}>
        <div className={styles.image_container_desserts}>
          <div className={styles.selection_of_desserts}>
            <div className={styles.find_your_taste}>Find Your Taste of Desserts</div>
            <div className={styles.button_read_more}>Read more</div>
          </div>
        </div>
      </div>
      <div>
        <div>
          <div>Vanilla Choco Chip</div>
          <div>Read more</div>
        </div>
      </div>
    </div>
  );
}
export default Desserts;
