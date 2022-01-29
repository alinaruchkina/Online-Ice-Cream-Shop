import React from 'react';
import styles from './Cards.module.css';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import Footer from '../../components/Footer/footer';

function Cards() {
  const cards = useSelector((state) => state.card.card);
  return (
    <div>
      <div className={styles.ice_cream_list}>
        {cards.map((item) => (
          <Link
            className={styles.link}
            key={item.id}
            to={{
              pathname: `/card/${item.id}`,
            }}>
            <div className={styles.cart_main_box}>
              <div>
                <img className={styles.image} src={item.image} alt="image" />
              </div>
              <div className={styles.content__card}>
                <div className={styles.card_name}>{item.name}</div>
                <div className={styles.card_description}>{item.description}</div>
                <div className={styles.card_price}>{item.price}$</div>
              </div>
            </div>
          </Link>
        ))}
      </div>
      <Footer />
    </div>
  );
}

export default Cards;
