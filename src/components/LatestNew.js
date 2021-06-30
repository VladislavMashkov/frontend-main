import React, {Component} from "react";
import { ReactDOM } from 'react-dom';
import axios from "axios";
import history from "../history";
import "regenerator-runtime/runtime";
import "../styles/LatestNewComponent.css";

class LatestNew extends Component {
    constructor(props) {
    super(props);
    };
    render() {
    return (
        
        <div className="latest-news-container">
            <div className="latest-news-container-date">
                Feb 21
            </div>
            <div className="latest-news-container-content">
                <div className="latest-news-container-title">
                    Masters of disquise
                </div>
                <div className="latest-news-container-text">
                    Lorem ipsum dolor sit amet
                </div>
            </div>
        </div>
                
    );
  }

}
export default LatestNew;
