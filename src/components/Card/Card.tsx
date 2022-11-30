import React from 'react';
import './Card.scss';
import { cardBlock } from '../../types/cardBlock';

interface CardProps {
  card: cardBlock;
  cardLetter: string;
}

export const Card: React.FC<CardProps> = ({ card, cardLetter }) => {
  return (
    <div className="card">
      <h2 className="card__title">{`${cardLetter} ${card.name}`}</h2>
    </div>
  );
};
