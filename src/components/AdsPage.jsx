import React, {Component} from 'react';
import "../styles/mainPage.css";
import Ads from "./Ads.js";
import Header from "./Header.js";
import Footer from "./Footer.js";
const AdsPage = () => {
  let elementHeader = <Header />
  let elementAds = <Ads />;
  
  let elementFooter = <Footer />;
  return (
    <div>
      
      {elementHeader}
     {elementAds}
     {elementFooter}
    </div>
  );
};

export default AdsPage;
