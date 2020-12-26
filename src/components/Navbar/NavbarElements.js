import styled from 'styled-components'
import { Link as LinkR } from 'react-router-dom';


export const Nav = styled.nav`
    background: #4A90E2;
    height: 80px;
    margin-top: -80px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1.4rem;
    position: sticky;
    top: 0;
    z-index: 10;


    @media screen and (max-width: 968px) {
        transition: 0.8s all ease;
    }
`;

export const NavbarContainer = styled.div`
    display: flex;
    justify-content: space-between;
    height: 80px;
    z-index: 1;
    width: 100%;
    max-width: 1300px;
`

export const NavLogo = styled(LinkR)`
    color: #fff;
    justify-self: start;
    cursor: pointer;
    text-decoration: none;
    font-size: 2rem;
    display: flex;
    align-items: center;

    @media screen and (max-width: 768px) {
        display: flex;
        margin-left: 20px;
        align-items: center;
        justify-content: center;
    }
`;

export const MobileIcon = styled.div`
    display: none;

    @media screen and (max-width: 768px) {
        display: block;
        position: absolute;
        top: 0;
        right: 0;
        transform: translate(-100%, 60%);
        font-size: 1.8rem;
        cursor: pointer;
        color: #fff;
    }
`
export const NavMenu = styled.ul`
    display: flex;
    list-style: none;
    text-align: center;


    @media screen and (max-width: 768px) {
        display: none;
    }
`

export const NavItem = styled.li` 
    height: 80px;
`

export const NavLinks = styled(LinkR)`
    color: #fff;
    display: flex;
    align-items: center;
    text-decoration: none;
    padding: 0 1.5rem;
    height: 100%;
    cursor: pointer;
    font-size: 18px;

    &:hover {
    color: #121fd4;
    transform: scale(1.2);
    transition: all 0.3s ease;
  }
`

export const NavBtn = styled.nav `
    display:flex;
    align-items: center;
    justify-content: center;
    

    @media screen and (max-width: 768px) {
        display: none;
    }
`

export const NavBtnLink = styled(LinkR)`
    border-radius: 50px;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    text-decoration: none;

    &.hover {
        transition: all 0.2s ease-in-out;
        background: #fff;
        color: #010606;
    }
`
