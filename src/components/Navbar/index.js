import React, {useState} from 'react';
import {Nav, NavbarContainer, NavLogo, MobileIcon, NavMenu, NavItem, NavLinks, NavBtn, NavBtnLink} from './NavbarElements';
import {Link} from 'react-router-dom'
import { GiAirplane } from 'react-icons/gi';
import { FaBars} from 'react-icons/fa';
import { Button } from '../pages/Button';


const Navbar = ({ toggle }) => {

    return (
            <Nav>
                <NavbarContainer>
                    <NavLogo to='/'>
                    <GiAirplane/>&nbsp;AIR OPTIONS
                    </NavLogo>
                    <MobileIcon onClick ={toggle}>
                        <FaBars/>
                    </MobileIcon>
                    <NavMenu onClick={toggle}>
                        <NavItem>
                            <NavLinks to='/'>Home</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to='/features'>Features</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to='/callouts'>Callouts</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to='/pricing'>Pricing</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to='/disclaimer'>Disclaimer</NavLinks>
                        </NavItem>
                    </NavMenu>
                    

                </NavbarContainer>
            </Nav>
    );
};

export default Navbar;
 