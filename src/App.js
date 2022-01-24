import * as React from 'react';
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
            <Objetivo/>
            <Dinamica/>
            <Syllabus/>
        </div>
    );
}
