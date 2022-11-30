import React, { useState } from 'react';
import { alphButtons } from '../../utils/alphButtons';
import './MainNav.scss';
import data from '../../api/api.json'
import { CardType } from '../../types/cardType';

export const MainNav: React.FC = () => {
  const [allAlphButtons] = useState(alphButtons);
  const [activeButtons] = useState<CardType[]>(data);

  console.log(activeButtons);

  return (
    <nav className="nav">
      <ul className='nav__list'>
        {allAlphButtons.map(el => (
          <li
            key={el}
            className={'nav__item ' +
              `nav__item${activeButtons
                .some(apiEl => apiEl.letter === el) ? '--active' : ''}`}
          >
            <a href={`#${el}`} className="nav__link">
              {el}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};
