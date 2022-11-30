import React from 'react';
import { Cards } from '../Cards/Cards';
import { MainNav } from '../MainNav/MainNav';
import './Main.scss';

export const Main: React.FC = () => {
  return (
    <main className="main">
      <div className="container">
        <div className="main__inner">
          <div className="main__nav">
            <MainNav />
          </div>

          <div className="main__cards">
            <Cards />
          </div>
        </div>
      </div>
    </main>
  );
};
