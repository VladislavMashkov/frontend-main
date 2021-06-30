import React, {Component} from "react";
import { ReactDOM } from 'react-dom';
import axios from "axios";
import history from "../history";
import "regenerator-runtime/runtime";
import { Carousel } from "react-responsive-carousel";
import "../styles/Footer.css";

class Footer extends Component {
    constructor(props) {
    super(props);
    };
    render() {
    return (
        <footer>
        <div className = "footer-company-text">© 2021 AgroGenereal — агрегратор ляля-ляля</div>
        <ul className="social-icons icon-circle list-unstyled list-inline"> 
          <li> <a href="#"><i className="fa fa-facebook"></i></a></li>
          <li> <a href="#"><i className="fa fa-twitter"></i></a></li>
          <li> <a href="#"><i className="fa fa-instagram"></i></a></li> 
          <li> <a href="#"><i className="fa fa-youtube-play"></i></a></li>
        </ul>
      </footer>
    );
  }

}
export default Footer;
