import React, {Component} from "react";
import { ReactDOM } from 'react-dom';
import axios from "axios";
import history from "../history";
import "regenerator-runtime/runtime";
import "../styles/LatestNewsComponent.css";
import LatestNew from "./LatestNew.js";


class LatestNews extends Component {

    constructor(props) {
        super(props);
        this.state = {
        ads: [1, 2, 3, 4, 5, 6],
        };
    };
    render() {
    return (
        <div className="latest-news-box">
      		<div className="latest-news-title">
                Новости
            </div>
            <div className="latest-news-elements-container">
                {this.state.ads.map(ad =>
                    <LatestNew key={ad} />
                )}
            </div>
            <div className="button-container">
                <button type="button" className="btn btn-show-all-news">Все новости</button>
      	     </div>
        </div>
    );
  }

}
export default LatestNews;
