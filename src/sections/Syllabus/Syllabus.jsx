import * as React from 'react';
// eslint-disable-next-line
import base from './../../base.css';
// eslint-disable-next-line
import theme from './Syllabus.css';
import ApiIcon from '@mui/icons-material/Api';
import CustomizedTimeline from "../../components/Timeline/Timeline";

export default function Syllabus() {
    const subjects = [
        {icon: <ApiIcon/>, title: 'Maquetado', text: ['HTML', 'CSS']},
        {icon: <ApiIcon/>, title: 'Intro a la Programación', text: ['Estructuras de control','Javascript']},
        {icon: <ApiIcon/>, title: 'Desarrollo Frontend', text: ['React', 'APIs']},
        {icon: <ApiIcon/>, title: 'Desarrollo Backend', text: ['Node.js', 'Express']},
        {icon: <ApiIcon/>, title: 'Bases de Datos', text: ['Mongo', 'SQL']}
    ]
    return (
        <>
            <div className="syllabusContainer">
                <h1>Temario</h1>
            </div>
            <div className="syllabusTimelineContainer">
                <CustomizedTimeline subjects={subjects}/>
            </div>
        </>
    );
}