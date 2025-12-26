import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import OurClients from './components/OurClients'
import OurStory from './components/OurStory';
import Industries from './components/Industries';
import Exellence from './components/Exellence';
import Faq from './components/Faq';
import Footer from './components/Footer';
import DownloadCards from './components/DownloadCards';

const App = () => {
  return (
    <div className="">
      <Navbar />
      <Hero />
      <OurClients />
      <OurStory/>
      <Industries/>
      <Exellence/>
      <DownloadCards/>
      <Faq/>
      <Footer/>
      
    </div>
  );
};

export default App;
