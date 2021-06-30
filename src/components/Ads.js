import React, {Component} from "react";
import { ReactDOM } from 'react-dom';
import axios from "axios";
import history from "../history";
import Select from 'react-select';
import "regenerator-runtime/runtime";
import "../styles/AdsComponent.css";
import Ad from "./Ad.js";
const aquaticCreatures = [
  { label: 'Shark', value: 'Shark' },
  { label: 'Dolphin', value: 'Dolphin' },
  { label: 'Whale', value: 'Whale' },
  { label: 'Octopus', value: 'Octopus' },
  { label: 'Crab', value: 'Crab' },
  { label: 'Lobster', value: 'Lobster' },
];
class Ads extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
        ads: [1, 2, 3, 4, 5],
        filterProducts: [
  { label: '1', value: '1' },
  { label: 'Dolphin', value: 'Dolphin' },
  { label: 'Whale', value: 'Whale' },
  { label: 'Octopus', value: 'Octopus' },
  { label: 'Crab', value: 'Crab' },
  { label: 'Lobster', value: 'Lobster' },
],
        };
    };
    render() {
    return (
        <div className="ads-box">
            <div className="ads-filter-form">
                <div className="ads-title">
                    Объявления
                </div> 
                <div className="form-inline">
                   <Select
        options={this.state.filterProducts}
      />
      <Select
        options={aquaticCreatures}
      />
      <Select
        options={aquaticCreatures}
      />
                </div>
            </div>
            <div className="ads-container">
                {this.state.ads.map(ad =>
                    <Ad key={ad} />
                )}
            </div>
            <button type="button" className="btn btn-show-more-ads">Загрузить еще</button>
        </div>
    );
  }

}
export default Ads;
