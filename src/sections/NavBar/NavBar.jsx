import * as React from 'react';
// eslint-disable-next-line
import base from './../../base.css';
// eslint-disable-next-line
import theme from './navBar.css';

export default function NavBar(props) {
    return (
        <div className="navBar">
            <h2>Code 101</h2>
            <div className="navBarItems">
                <a href='#'>Bootcamp</a>
                <a href='#'>Din&aacute;mica</a>
                <a href='#'>Temario</a>
                <a href='#'>Tallerista</a>
            </div>
        </div>
    );
}