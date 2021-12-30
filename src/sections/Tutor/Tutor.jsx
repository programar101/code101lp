import * as React from 'react';
import tutorImg from './tutorImg.jpeg';

// eslint-disable-next-line
import base from './../../base.css';
// eslint-disable-next-line
import theme from './tutor.css';

export default function Tutor(props) {
    return (
        <div className="tutor">


        <div className="box">

        <div className="titleBox">
            <h2>TUTORA</h2>
        </div>
        
            <img className="imageBox" src={tutorImg} alt={"Mentora Bootcamp"}/>    
        
        <div className="nameBox">
            <p>Marina Olivella</p>
            <p>Full Stack Developer</p>
        </div>

        <div className="descriptionBox">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto, aut cum, vitae asperiores voluptatibus doloremque explicabo natus distinctio quam culpa iure. Necessitatibus non nam repellendus veritatis ut magni vero dolor.</p>
        </div>
        </div>
        
        </div>

    );
}