import React, {Component} from 'react';
import "../styles/mainPage.css";
import BannerCarousel from "./BannerCarousel.js";
import LatestAds from "./LatestAds.js";
import Header from "./Header.js";
import LatestNews from "./LatestNews.js";
import Footer from "./Footer.js";
const MainPage = () => {
  let elementHeader = <Header />
  let elementBannerCarousel = <BannerCarousel />;
  let elementAds = <LatestAds />;
  let elementNews = <LatestNews />;
  let elementFooter = <Footer />;
  return (
    <div>
      
      {elementHeader}
     {elementBannerCarousel}
     {elementAds}
     {elementNews}
     {elementFooter}
    </div>
  );
};

export default MainPage;
