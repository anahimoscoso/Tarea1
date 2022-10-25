import { Box, Grid } from '@material-ui/core';
import React, { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { info } from '../utilities/Info';
import { userContext  } from '../App';
import { useContext } from 'react';
import './NavBarMoscoso.css'

export const  NavbarMoscoso = ({ darkMode, handleClick }) => {
    const location = useLocation();
    const [active,setActive]= useState(location.pathname==='/'?'home': location.pathname.slice(1,location.pathname.length));
    const user = useContext(userContext);
    console.log("🚀 ~ file: NavbarMoscoso.jsx ~ line 29 ~ NavbarMoscoso ~ active", active)
    return(
        <Grid container component={'nav'}>
            <Grid item xs={8} component={'section'} className={``}>
                {
                    info.links.map(link => (
                        <Link key={link.active} to={link.to} className={`links ${(link.active === active && !link.type) && 'active'}`}
                        onClick={() => setActive(link.active)}>

                            <p className={`${darkMode ? 'dark' : 'light'}`} >{link.name}</p>
                        </Link>
                    ))
                }
            </Grid>
            <Grid item xs={2} component={'section'}>
            <Box >
                {
                    darkMode ?
                        <img className='bombilla' onClick={handleClick}
                        src="https://cdn.pixabay.com/photo/2016/03/31/15/29/bulb-1293332_640.png" alt="" />
                        :
                        <img className='bombilla' onClick={handleClick}
                        src="https://cdn.pixabay.com/photo/2016/04/09/16/09/light-bulb-1318335_1280.png" alt="" />
                }
            </Box>
                </Grid>
                <Grid item xs={2} component={'section'}>
                    
                    <div className='perfil'>
                        <img className='perfil' src='https://img.freepik.com/vector-gratis/ilustracion-vector-dibujos-animados-lindo-corgi-beber-leche-te-boba-bebida-animal-concepto-aislado-vector-estilo-dibujos-animados-plana_138676-1943.jpg?w=2000' />

                    {user.name}
                    </div>
                </Grid>
            </Grid>
    )
}