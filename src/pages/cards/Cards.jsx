import React from 'react';
import styles from './Cards.module.css';
import { useSelector } from 'react-redux';

function Cards() {
  const cards = useSelector((state) => state.card.card);
  return (
    <div>
      <div>
        {cards.map((item) => (
          <div key={item.id}>
            <div>{item.name}</div>
            <div>{item.description}</div>
            <div>{item.price}$</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Cards;
