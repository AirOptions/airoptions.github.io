import React from 'react';
import { Button } from '../pages/Button';
import { Link } from 'react-router-dom';
import './Herosection.css';
import mainLogo from './images/bearmarket.svg';

function Herosection({
    lightBg, topLine, lightText, lightTextDesc, headLine, description, buttonLabel, img, alt, imgStart 
}) {
    return (
        <div className = {lightBg ? 'home__hero-section' : 'home__hero-section darkBg'}>
            <div class="container">
                <div className="row home__hero-row" style={{display: 'flex', flexDirection: imgStart === 'start' ? 'row-reverse': 'row'}}>
                <div className = 'col'>
                        <div className="home__hero-img-wrapper">
                            <img src={mainLogo} alt={alt} className="home__hero-img"/>
                        </div>
                    </div>
                    <div className = 'col'>
                        <div className="home__hero-text-wrapper">
                            <div className = 'top-line'>{topLine}</div>
                            <h1 className={lightText ? 'heading' : 'heading dark'}>{headLine}</h1>
                            <p className={lightTextDesc ? 'home__hero-subtitle' : 'home__hero-dark'}>{description}</p>
                            <Link to='/features'>
                                <Button buttonSize='btn--mobile' buttonColor='royalblue'>{buttonLabel}</Button>
                            </Link>
                        </div>
                    </div>
                    
                </div>
            </div>
        </div>
    );
}

export default Herosection
