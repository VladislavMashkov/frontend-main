import React, {Component} from "react";
import { ReactDOM } from 'react-dom';
import axios from "axios";
import history from "../history";
import "regenerator-runtime/runtime";
import { Carousel } from "react-responsive-carousel";
import styles from "react-responsive-carousel/lib/styles/carousel.min.css";
import "../styles/CarouselComponent.css";



class BannerCarousel extends Component {
    constructor(props) {
    super(props);
    };
    render() {
    return (
        <div className="carousel-container">
      <Carousel showThumbs={false} infiniteLoop={true} showArrows={false} dynamicHeight={false} showStatus={false}>
                <div className="carousel-element-container" style={{ backgroundImage: `url('https://img4.goodfon.ru/wallpaper/nbig/0/e1/pole-urozhai-uborka-kombain-traktor-pritsep.jpg')` }}>
                    <div className="carousel-element-title">
                        <h1 className="unselectable">Качественная площадка для мониторинга свежих и актуальных новостей</h1>
                    </div> 
                </div>
                <div className="carousel-element-container" style={{ backgroundImage: `url('https://img4.goodfon.ru/wallpaper/nbig/0/e1/pole-urozhai-uborka-kombain-traktor-pritsep.jpg')` }}>
                    <div className="carousel-element-title">
                        <h1 className="unselectable">Качественная площадка для мониторинга свежих и актуальных новостей</h1>
                    </div> 
                </div>
                <div className="carousel-element-container" style={{ backgroundImage: `url('https://img4.goodfon.ru/wallpaper/nbig/0/e1/pole-urozhai-uborka-kombain-traktor-pritsep.jpg')` }}>
                    <div className="carousel-element-title">
                        <h1 className="unselectable">Качественная площадка для мониторинга свежих и актуальных новостей</h1>
                    </div> 
                </div>
      </Carousel>
      </div>
    );
  }

}
export default BannerCarousel;
