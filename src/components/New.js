import React, {Component} from "react";
import { ReactDOM } from 'react-dom';
import axios from "axios";
import history from "../history";
import Select from 'react-select';
import "regenerator-runtime/runtime";
import "../styles/NewComponent.css";

class New extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
        ads: [1, 2, 3, 4, 5],
        
        };
    };
    render() {
    return (
        <div className="new-container">
            <div className="new-content-left">
                <div className="new-content-image" style={{ backgroundImage: `url('https://resizer.mail.ru/p/bfb6892b-d201-5a99-8ad8-7b071a9d461f/AAAc9zhILoLMo6htzGJBi6fdqzFisJclxbXTZKHvxwmg8fEX8UoWxVJptivn2L4VO5hrO2znCKqExJQ6BnUYadCZnz0.jpg')` }}></div>
            </div>
            <div className="new-content-right">
                <div className="new-content-title">Эксперты спрогнозировали рекордное за 10 лет потребление мороженого в России</div>
                <div className="new-content-text">Эксперты Центра отраслевой экспертизы (ЦОЭ) Россельхозбанка спрогнозировали, что объем потребления мороженого в России по итогам года вырастит на 1%, до рекордных за последние 10 лет 3,1 кг на человека или 448 тыс. тонн. </div>
                <button type="button" className="btn btn-show-source-new">Источник</button>
            </div>
        </div>
    );
  }

}
export default New;
