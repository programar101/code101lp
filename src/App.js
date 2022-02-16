import * as React from 'react';
import Hero from './sections/Hero/Hero';
import NavBar from './sections/NavBar/NavBar';
import Dinamica from './sections/Dinamica/Dinamica';
import Syllabus from './sections/Syllabus/Syllabus';
import Boxes from './sections/Boxes/Boxes';


export default function App() {
    return (
        <div >
            <NavBar/>
            <Hero/>
            <Dinamica/>
            <Syllabus/>
            <Boxes/>
        </div>
    );
}
