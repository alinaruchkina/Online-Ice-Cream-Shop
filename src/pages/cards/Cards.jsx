import React from 'react';
import styles from './Cards.module.css';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

function Cards() {
  const cards = useSelector((state) => state.card.card);
  return (
    <div>
      <div className={styles.ice_cream_list}>
        {cards.map((item) => (
          <Link
            to={{
              pathname: `/card/${item.id}`,
            }}>
            <div className={styles.cart_main_box} key={item.id}>
              <img src={item.image} alt="image" />
              <div>{item.name}</div>
              <div>{item.description}</div>
              <div>{item.price}$</div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Cards;
