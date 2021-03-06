/* eslint-disable react/jsx-props-no-spreading */

import React, { useState, useEffect } from 'react';
import Header from '../components/Header';
import Search from '../components/Search';
import Categories from '../components/Categories';
import CarouselItem from '../components/CarouselItem';
import Carousel from '../components/Carousel';
import Footer from '../components/Footer';
import useInitialState from '../hooks/useInitialState';
import '../assets/styles/App.scss';

const API = 'https://pokeapi.co/api/v2/pokemon';

const App = () => {

  const initialState = useInitialState(API);
  return (
    <div className='App'>
      <Header />
      <Search />

      <Categories title='lista'>
      <Carousel>
        {initialState?.results?.map((item) => <CarouselItem key={item.name} name={item.name} url={item.url} />)}
        </Carousel>
      </Categories>
      <Categories title='Tendencias'>
        <Carousel>
        {initialState?.results?.map((item) => <CarouselItem key={item.name} name={item.name} url={item.url}  />)}

        </Carousel>
        </Categories>

        <Categories title='Originales de Platzi Video'>
        <Carousel>
        {initialState?.results?.map((item) => <CarouselItem key={item.name} name={item.name} url={item.url} />)}
        </Carousel>
        </Categories>
      <Footer />
    </div>
  );

};

export default App;
