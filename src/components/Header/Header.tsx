import React from 'react';
import './Header.scss';

export const Header: React.FC = () => {
  return (
    <header className="header">
      <div className="container">
        <div className="header__inner">
          <h1 className="header__title">
            Test work
          </h1>
        </div>
      </div>
    </header>
  );
};
