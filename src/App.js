import * as React from 'react';
import Resumen from './Resumen/Resumen';
import Hero from './sections/Hero/Hero';
import NavBar from './sections/NavBar/NavBar';
import Dinamica from './sections/Dinamica/Dinamica';
import Syllabus from './sections/Syllabus/Syllabus';


export default function App() {
    return (
        <div >
            <NavBar/>
            <Hero/>
            <Resumen/>
            <Dinamica/>
            <Syllabus/>
        </div>
    );
}
