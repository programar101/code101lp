import * as React from 'react';
import ResponsiveHideOnScrollAppBar from "../../components/appBar/appBar";

export default function NavBar(props) {
    return (
        <ResponsiveHideOnScrollAppBar pages={['Bootcamp', 'Dinámica', 'Temario', 'Talleristas']}/>
    );
}