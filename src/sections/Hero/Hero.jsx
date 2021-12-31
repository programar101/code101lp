import * as React from 'react';
import heroImg from './heroImg.png';
// eslint-disable-next-line
import base from './../../base.css';
// eslint-disable-next-line
import theme from './hero.css';
import {Button} from "@mui/material";

export default function Hero() {
    return (
        <div className="heroContainer">
            <div className="leftContainer">
                <div className="text">
                    <h1>WORKSHOP</h1>
                    <h2>FULLSTACK DEVELOPER</h2>
                </div>
                <a href={"https://forms.gle/iptgMk59ePRmUPhn7"} className={"ctaButton"}>
                    <h2>Inscripción</h2>
                </a>
            </div>
            <img className="image" src={heroImg} alt={"Fullstack Developer Bootcamp"}/>
        </div>
    );
}