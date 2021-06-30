import React, {Component} from "react";
import { ReactDOM } from 'react-dom';
import axios from "axios";
import history from "../history";
import "regenerator-runtime/runtime";
import "../styles/AdComponent.css";
import { jsx, css, Global, ClassNames } from '@emotion/react'
import styled from '@emotion/styled';
import DOMPurify from 'dompurify';

class Ad extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showMore: false,
        };
        this.handleClick = this.handleClick.bind(this);
    };
    handleClick() {
        this.setState({ showMore: !this.state.showMore });
    }
    render() {
        const isShowMore = this.state.showMore;
        let element;
        if (isShowMore) {
            element = <div className="ad-bottom" dangerouslySetInnerHTML={{__html: DOMPurify.sanitize('<div className="ad-text">aaa</div><div className="ad-bottom-info"><div className="ad-client-name></div><input type="submit" value="Связаться"></div>')}}></div>;
        } else {
            element = <div className="ad-text"></div>;
        }
    return (
        
        <div className="ad-container">
            
            <div className="ad-content">
                
                    
                    <div className="ad-content-info-culture-name">
                        Пшеница
                    </div>
                    <div className="ad-content-info-culture-price">
                        50 руб/тн
                    </div>
                    <div className="ad-type">
                        Продажа
                    </div>
                    
                    <div className="ad-content-info-culture-place">
                        Астраханская область
                    </div>
                    <div className="ad-content-info-culture-weight">
                        100 тонн
                    </div>
                    
                    {element}
                
                <div className="Button">
                    <button
                type="submit"
                className="btn btn-default filter-col btn-user-form btn-get-user"
                onClick={() => this.handleClick()}
                >
                <svg width={126} height={126} viewBox="0 0 126 126" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g filter="url(#filter0_d)">
                    <path d="M84.5954 48.2591C85.6124 47.2421 87.2613 47.2421 88.2783 48.2591C89.2953 49.2761 89.2953 50.9249 88.2783 51.9419L67.4449 72.7753C66.4279 73.7923 64.7791 73.7923 63.7621 72.7753L42.9288 51.9419C41.9118 50.9249 41.9118 49.2761 42.9288 48.2591C43.9457 47.2421 45.5946 47.2421 46.6116 48.2591L65.6035 67.251L84.5954 48.2591Z" fill="#00B454" />
                </g>
                <defs>
                    <filter id="filter0_d" x="-3.5" y="0.750977" width={133} height={133} filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                        <feFlood floodOpacity={0} result="BackgroundImageFix" />
                        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                        <feOffset dy={4} />
                        <feGaussianBlur stdDeviation={2} />
                        <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
                        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow" />
                        <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape" />
                    </filter>
                </defs>
                </svg>
              </button>
                </div>
            </div>
        </div>
                
    );
  }

}
export default Ad;
