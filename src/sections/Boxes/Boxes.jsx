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
                        <h2>TALLERISTA</h2>
                    </div>

                    <img className="imageBox" src={tutorImg} alt={"Tallerista Bootcamp"}/>

                    <div className="nameBox">
                        <p>Marina Olivella</p>
                        <p>Lead Backend Developer</p>
                    </div>

                    <div className="descriptionBox">
                        <p>Tiene 13 años de experiencia docente, y 5 en el rubro de sistemas. Estudiante de Ingeniería
                            en Sistemas en la Universidad Tecnológica Nacional, fue Ayudante de Cátedra y Jefa de
                            Trabajos Prácticos. Cuenta con experiencia como Analista Funcional, Desarrolladora Frontend
                            y Backend, y líder de equipo</p>
                    </div>
                </div>
            </div>

            <div className="right">
                <div className="titleBoxSmall">
                    <h2>AYUDANTES</h2>
                </div>

                <div className="boxesRight">
                    <div className="boxSmall">

                        <img className="imageBoxSmall" src={ricImg} alt={"Ayudante Bootcamp"}/>

                        <div className="details">
                            <div className="nameBoxSmall">
                                <p>Ricardo Montecinos</p>
                                <p>Implementador de sistemas</p>
                            </div>

                            <div className="descriptionBoxSmall">
                                <p>Entusiasta de la tecnología, las plantas y la impresión 3D, dispuesto a aprender
                                    cosas nuevas y orientado al trabajo en equipo.</p>
                            </div>
                        </div>
                    </div>

                    <div className="boxSmall">

                        <img className="imageBoxSmall" src={criImg} alt={"Ayudante Bootcamp"}/>

                        <div className="details">
                            <div className="nameBoxSmall">
                                <p>Cristian Carballo</p>
                                <p>Actividad principal</p>
                            </div>

                            <div className="descriptionBoxSmall">
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto, aut cum, vitae
                                    asperiores voluptatibus doloremque explicabo natus distinctio quam culpa iure.
                                    Necessitatibus non nam repellendus veritatis ut magni vero dolor.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}