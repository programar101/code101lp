import * as React from 'react';
import tutorImg from './tutorImg.jpeg';
import ricImg from './ayudantesImgRic.jpeg';
import criImg from './ayudantesImgCri.jpeg';


// eslint-disable-next-line
import base from './../../base.css';
// eslint-disable-next-line
import theme from './Boxes.css';

export default function Boxes(props) {
    return (

        <div className="boxes">
        <div className="left">

            <div className="box">

                <div className="titleBox">
                    <h2>TUTORA</h2>
                </div>

                <img className="imageBox" src={tutorImg} alt={"Mentora Bootcamp"} />

                <div className="nameBox">
                    <p>Marina Olivella</p>
                    <p>Full Stack Developer</p>
                </div>

                <div className="descriptionBox">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto, aut cum, vitae asperiores voluptatibus doloremque explicabo natus distinctio quam culpa iure. Necessitatibus non nam repellendus veritatis ut magni vero dolor.</p>
                </div>
            </div>

        </div><div className="right">
                <div className="titleBoxSmall">
                    <h2>AYUDANTES</h2>
                </div>
                <div className="boxesRight">

                    <div className="boxSmall">

                        <img className="imageBoxSmall" src={ricImg} alt={"Ayudante Bootcamp"} />


                    <div className="details">
                            <div className="nameBoxSmall">
                                <p>Ricardo Montecinos</p>
                                <p>Implementador de sistemas</p>
                            </div>

                            <div className="descriptionBoxSmall">
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto, aut cum, vitae asperiores voluptatibus doloremque explicabo natus distinctio quam culpa iure. Necessitatibus non nam repellendus veritatis ut magni vero dolor.</p>
                            </div>
                        </div>
                    </div>

                    <div className="boxSmall">

                        <img className="imageBoxSmall" src={criImg} alt={"Ayudante Bootcamp"} />
                    <div className="details">
                        <div className="nameBoxSmall">
                            <p>Cristian Carballo</p>
                            <p>Actividad principal</p>
                        </div>

                        <div className="descriptionBoxSmall">
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto, aut cum, vitae asperiores voluptatibus doloremque explicabo natus distinctio quam culpa iure. Necessitatibus non nam repellendus veritatis ut magni vero dolor.</p>
                        </div>
                    </div>

                    </div>

                </div>
            </div>
            </div>

    );
}