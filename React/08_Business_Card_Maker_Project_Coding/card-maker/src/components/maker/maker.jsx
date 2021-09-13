import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import Editor from '../editor/editor';
import Footer from '../footer/footer';
import Header from '../header/header';
import Preview from '../preview/preview';
import styles from './maker.module.css';

const Maker = ({ authService }) => {
  const [cards, setCards] = useState([
    {
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
    {
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
    {
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
  ]);
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

  return (
    <section className={styles.maker}>
      <Header onLogout={onLogout} />
      <div className={styles.container}>
        <Editor cards={cards} />
        <Preview cards={cards} />
      </div>
      <Footer />
    </section>
  );
;}

export default Maker;