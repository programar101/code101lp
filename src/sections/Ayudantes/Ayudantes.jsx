import * as React from 'react';
import ricImg from './ayudantesImgRic.jpeg';
import criImg from './ayudantesImgCri.jpeg';

// eslint-disable-next-line
import base from './../../base.css';
// eslint-disable-next-line
import theme from './ayudantes.css';

export default function Tutor(props) {
    return (
        <div className="ayudantes">
        <div className="titleBoxA">
            <h2>AYUDANTES</h2>
        </div>
            <div className="boxes">

            <div className="boxA">

                <img className="imageBoxA" src={ricImg} alt={"Ayudante Bootcamp"}/>    
            
                <div className="nameBoxA">
                    <p>Ricardo Montecinos</p>
                    <p>Implementador de sistemas</p>
                </div>

                <div className="descriptionBoxA">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto, aut cum, vitae asperiores voluptatibus doloremque explicabo natus distinctio quam culpa iure. Necessitatibus non nam repellendus veritatis ut magni vero dolor.</p>
                </div>
                
            </div>

            <div className="boxA">

                <img className="imageBoxA" src={criImg} alt={"Ayudante Bootcamp"}/>    

                <div className="nameBoxA">
                <p>Cristian Carballo</p>
                <p>Actividad principal</p>
                </div>

                <div className="descriptionBoxA">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto, aut cum, vitae asperiores voluptatibus doloremque explicabo natus distinctio quam culpa iure. Necessitatibus non nam repellendus veritatis ut magni vero dolor.</p>
                </div>

                </div>

            </div>      
        </div>

    );
}