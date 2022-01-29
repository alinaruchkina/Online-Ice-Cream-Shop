import React from 'react';
import styles from './footer.module.css';
import git from '../../utils/images/git.png';
import vk from '../../utils/images/vk.png';

function Footer({ bottom }) {
  return (
    <div className={styles.wrapper}>
      <div className={styles.content}>
        <div
          className={bottom ? `${styles.footer} ${styles.footer_desc_bottom}` : `${styles.footer}`}>
          <div className={styles.footer_desc}>
            <div>Design by @alinaruchkina</div>
            <div className={styles.icon}>
              <div>Contacts: </div>
              <a href="https://github.com/alinaruchkina" className={styles.logo}>
                <img className={styles.image__git} src={git} alt="git" />
              </a>
              <a href="https://vk.com/alinalexand" className={styles.logo}>
                <img className={styles.image__git} src={vk} alt="vk" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
