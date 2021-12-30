import * as React from 'react';
import Hero from './sections/Hero/Hero';
import NavBar from './sections/NavBar/NavBar';
import Syllabus from './sections/Syllabus/Syllabus';
import Tutor from './sections/Tutor/Tutor';
import Ayudantes from './sections/Ayudantes/Ayudantes';


export default function App() {
    return (
        <div >
            <NavBar/>
            <Hero/>
            <Syllabus/>
            <Tutor/>
            <Ayudantes/>
        </div>
    );
}
