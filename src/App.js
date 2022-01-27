import * as React from 'react';
import Resumen from './sections/Resumen/Resumen';
import Hero from './sections/Hero/Hero';
import NavBar from './sections/NavBar/NavBar';
import Dinamica from './sections/Dinamica/Dinamica';
import Syllabus from './sections/Syllabus/Syllabus';
import Objetivo from './sections/Objetivo/Objetivo';




export default function App() {
    return (
        <div >
            <NavBar/>
            <Hero/>
            <Resumen/>
            <Objetivo/>
            <Dinamica/>
            <Syllabus/>
        </div>
    );
}
