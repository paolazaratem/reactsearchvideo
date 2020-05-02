import React from 'react';
import Carousel from '../components/Carousel';
import CarouselItem from '../components/CarouselItem';
import Category from '../components/Category';
import Footer from '../components/Footer';
import Header from '../components/Header';
import Search from '../components/Search';

import '../assets/styles/App.scss';

const App = () => (
  <div className="App">
    <Header />
    <Search />

    <Category>
      <Carousel>
        <CarouselItem />
        <CarouselItem />
        <CarouselItem />
      </Carousel>
    </Category>
    <Footer />
  </div>
);

export default App;
