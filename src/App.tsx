import React from 'react';

import s from './App.module.css';
import Header from './header/header';
import Skiplink from './skiplink/skiplink';
import MainContent from './main-content';

function App() {
  return (
  <Layout>
    <MainContent />
  </Layout>
  );
}

export default App;

function Layout(props: any) {
  return (
    <>
    <div className={ s.layout }>
    <Skiplink />
      <Header />
    <div className={s['layout-container']} >
      {props.children}
    </div>
    </div>
    </>
  );
}