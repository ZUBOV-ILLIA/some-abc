import React, { useState } from 'react';
import './Cards.scss';
import data from '../../api/api.json'
import { Card } from '../Card/Card';

export const Cards: React.FC = () => {
  const [activeCards] = useState(data);

  return (
    <section className="cards">
      {activeCards.map(cardRow => (
        <div key={cardRow.letter} className="cards__row" id={cardRow.letter}>
          <h2 className="cards__title">{cardRow.letter}</h2>
          <div className="cards__container">
            {cardRow.blocks.map(card => (
              <div key={card.id} className="cards__card">
                <Card card={card} cardLetter={cardRow.letter} />
              </div>
            ))}
          </div>
        </div>
      ))}
    </section>
  )
}
