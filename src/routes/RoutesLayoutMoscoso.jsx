import React, { useState } from 'react'
import { Box, Grid } from '@material-ui/core';
import { NavbarMoscoso } from './NavbarMoscoso';
import { Routes, Route } from 'react-router-dom';
import { HomeMoscoso } from '../components/home/HomeMoscoso';
import { AboutMoscoso } from '../components/about/AboutMoscoso';
import './routesLayoutMoscoso.css';

export const RoutesLayoutMoscoso = () => {
    const [darkMode, setDarkMode] = useState(true);
    function handleClick() {
        setDarkMode(!darkMode);
    }
    return (
        <Grid container spacing={1} className={`content ${darkMode? 'dark': 'light'}`}>
            <Grid item xs={11} component={'header'} className={`${darkMode? 'dark': 'light'}`}>
                <NavbarMoscoso darkMode={darkMode} handleClick={handleClick} />
            </Grid>
            <Grid item xs={11}  className={`container-content ${darkMode? 'dark': 'light'}`}>
                <Routes>
                    <Route exact path={'/'} element={<HomeMoscoso />} />
                    <Route exact path={'/about'} element={<AboutMoscoso />} />
                </Routes>
            </Grid>
            <Grid item xs={11} component={'footer'} >
                <Box  className={`${darkMode? 'dark': 'light'} text-footer`}
                >
                <p>template created with &hearts; by <a target={'_blank'} href={'https://es.reactjs.org/'}>react js</a></p>    
                <p>&copy; 2022</p>
                </Box>
            </Grid>
        </Grid>
    )
}