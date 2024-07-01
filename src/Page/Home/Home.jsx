import React, { useEffect, useState } from 'react';
import Header from '../../components/Header';
import CarouselComponent from '../../components/Banner';
import BuildingLifeStyles from '../../components/Building LifeStyles/BuildingLifeStyles';
import Locations from '../../components/Locations and Qote/Locations';
import CarouselSection from '../../components/Carousel Section/CarouselSection';
import ServiceSection from '../../components/Service Section/ServiceSection';
import MoreAbout from '../../components/More About/MoreAbout';
import ContactSection from '../../components/Contact Section/ContactSection';
import Footer from '../../components/Footer/Footer';
// import axios from 'axios';
import BuildingCard from '../../components/BuildingCard/BuildingCard';
const Home = () => {
  return (
    <>
      <Header />
      <CarouselComponent />
      <BuildingLifeStyles />
      <BuildingCard />
      <Locations />
      <CarouselSection />
      <ServiceSection />
      <MoreAbout />
      <ContactSection />
      <Footer />
    </>
  );
};

export default Home;
