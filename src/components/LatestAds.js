import React, {Component} from "react";
import { ReactDOM } from 'react-dom';
import axios from "axios";
import history from "../history";
import "regenerator-runtime/runtime";
import "../styles/LatestAdsComponent.css";
import LatestAd from "./LatestAd.js";

class LatestAds extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
        ads: [1, 2, 3, 4, 5],
        };
    };
    render() {
    return (
        <div className="latest-ads-box">
            <div className="latest-ads-title">
                Последние объявления
            </div> 
            <div className="latest-ads-container">
                {this.state.ads.map(ad =>
                    <LatestAd key={ad} />
                )}
            </div>
            <button type="button" className="btn btn-show-all-ads">Все объявления</button>
        </div>
    );
  }

}
export default LatestAds;
