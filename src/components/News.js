import React, {Component} from "react";
import { ReactDOM } from 'react-dom';
import axios from "axios";
import history from "../history";
import Select from 'react-select';
import "regenerator-runtime/runtime";
import "../styles/NewsComponent.css";
import New from "./New.js";

class News extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
        ads: [1, 2, 3, 4, 5],
        
        };
    };
    render() {
    return (
        <div className="news-box">
            <div className="news-box-header">
                <div className="news-box-title">Новости</div>
            </div>
            <div className="news-container">
                {this.state.ads.map(ad =>
                    <New key={ad} />
                )}
            </div>
            <button type="button" className="btn btn-show-more-news">Загрузить еще</button>
        </div>
    );
  }

}
export default News;
