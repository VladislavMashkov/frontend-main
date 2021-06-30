import React, {Component} from 'react';
import "../styles/mainPage.css";
import News from "./News.js";
import Header from "./Header.js";
import Footer from "./Footer.js";
const NewsPage = () => {
  let elementHeader = <Header />
  let elementNews = <News />;
  
  let elementFooter = <Footer />;
  return (
    <div>
      
      {elementHeader}
     {elementNews}
     {elementFooter}
    </div>
  );
};

export default NewsPage;
