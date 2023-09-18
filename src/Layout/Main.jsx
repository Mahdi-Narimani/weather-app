import React from 'react';
import { Routes, Route } from 'react-router-dom'
import News from '../router/News';
import About from '../router/About';
import Home from '../router/Home';
import classes from './Main.module.css';

const Main = ({ cityID }) =>
{
  return (
    <main className={classes.main}>
      <Routes>
        <Route path='/' element={<Home cityID={cityID} />} />
        <Route path='/news' element={<News />} />
        <Route path='/about' element={<About />} />
      </Routes>
    </main>
  )
}

export default Main