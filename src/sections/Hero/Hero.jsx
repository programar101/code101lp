import * as React from 'react';
import heroImg from './heroImg.png';
// eslint-disable-next-line
import base from './../../base.css';
// eslint-disable-next-line
import theme from './hero.css';

export default function Hero() {
    return (
        <div className="heroContainer" >
            <div className="text">
                <h1>WORKSHOP</h1>
                <h2>FULLSTACK DEVELOPER</h2>
            </div>
            <img className="image" src={heroImg} alt={"Fullstack Developer Bootcamp"}/>
        </div>
    );
}