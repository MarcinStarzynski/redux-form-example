import React from 'react';

import styles from './styles/App.module.scss';

import FormPage from './components/form/formContainer';

function App() {
  return (
    <div className={styles.App}>
      <header className={styles.AppHeader}>
        Dish Form
      </header>
      <p>Hello, this is simple dish form, please fill it and send to Us!</p>
      <FormPage />
    </div>
  );
}

export default App;
