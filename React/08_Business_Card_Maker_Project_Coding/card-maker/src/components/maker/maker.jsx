import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import Editor from '../editor/editor';
import Footer from '../footer/footer';
import Header from '../header/header';
import Preview from '../preview/preview';
import styles from './maker.module.css';

const Maker = ({ FileInput, authService }) => {
  const [cards, setCards] = useState({
    '1': {
      id: '1',
      name: 'Seolyu',
      company: 'SY',
      title: 'Software Engineer',
      email: 'seolyu@seolyu.com',
      message: 'hi',
      theme: 'dark',
      fileName: 'seolyu',
      fileURL: null,
    },
    '2' : {
      id: '2',
      name: 'Seolyu',
      company: 'SY',
      title: 'Software Engineer',
      email: 'seolyu@seolyu.com',
      message: 'hi',
      theme: 'dark',
      fileName: 'seolyu',
      fileURL: null,
    },
    '3' : {
      id: '3',
      name: 'Seolyu',
      company: 'SY',
      title: 'Software Engineer',
      email: 'seolyu@seolyu.com',
      message: 'hi',
      theme: 'dark',
      fileName: 'seolyu',
      fileURL: null,
    }
  });

  const history = useHistory();
  const onLogout = () => {
    authService.logout();
  };

  useEffect(() => {
    authService.onAuthChange(user => {
      if (!user) {
        history.push('/');
      }
    })
  });

  const createOrUpdateCard = card => {
    setCards(cards => {
      const updated = { ...cards };
      updated[card.id] = card;
      return updated;
    });
  };

  const deleteCard = card => {
    setCards(cards => {
      const updated = { ...cards };
      delete updated[card.id];
      return updated;
    });
  };

  return (
    <section className={styles.maker}>
      <Header onLogout={onLogout} />
      <div className={styles.container}>
        <Editor
          FileInput={FileInput} 
          cards={cards} 
          addCard={createOrUpdateCard} 
          updateCard={createOrUpdateCard} 
          deleteCard={deleteCard} 
        />
        <Preview cards={cards} />
      </div>
      <Footer />
    </section>
  );
;}

export default Maker;