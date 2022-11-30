import React from 'react';
import { Header } from './components/Header/Header';
import { Main } from './components/Main/Main';

export const App: React.FC = () => {
  return (
    <div className="App">
      <Header />
      <Main />
    </div>
  );
};
