import * as React from 'react';
import theme from './Dinamica.css';

export default function Dinamica() {
    return (
        <div className="dinamics" >
            <div className="threeColumn">
                <div className="column">
                
                <p><strong>5</strong></p>
                <p> Horas de videos explicativos por semana (en inglés con subtitulos en inglés).</p>
                </div>
            
                <div className="column">
                <p><strong>1</strong></p>
                <p>Trabajo práctico semanal para poner en práctica lo aprendido.</p>
                </div>
            
                <div className="column">
                <p><strong>1</strong></p>
                <p>Encuentro semanal para hacer consultas y dar/recibir feedback.</p>
                </div>
            </div>

            <div className="textCenter">
                <p>COMUNICACIÓN CONSTANTE CON TUS COMPAÑERXS POR CHAT</p> 
                <p><strong>APRENDÉ AYUDANDO</strong></p>
                <h2>NIVEL: PRINCIPIANTE</h2>
            </div>


        </div>
    );
}
