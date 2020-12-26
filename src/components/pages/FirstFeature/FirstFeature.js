import React from 'react';
import { Button } from '../Button';
import { Link } from 'react-router-dom';
import './FirstFeature.css';

function FirstFeature({
    lightBg, topLine, lightText, features, lightTextDesc, headLine, description, img, alt, imgStart 
}) {
    return (
        <div className = {lightBg ? 'home__hero-section1' : 'home__hero-section darkBg'}>
            <div class="container">
                <div className="row home__hero-row" style={{display: 'flex', flexDirection: imgStart === 'start' ? 'row': 'row-reverse'}}>
                <div className = 'col1'>
                        <div className="home__hero-text-wrapper1">
                            <div className='bold-title'>{features}</div>
                            <div className = 'top-line1'>{topLine}</div>
                            <h1 className={lightText ? 'heading' : 'heading dark'}>{headLine}</h1>
                            <p className={lightTextDesc ? 'home__hero-subtitle' : 'home__hero-dark'}>{description}</p>
                        </div>
                </div>
                <div className = 'col1'>
                        <div className="home__hero-img-wrapper1">
                            <img src={img} alt={alt} className="home__hero-img"/>
                        </div>
                </div>
                </div>
            </div>
        </div>
    );
}

export default FirstFeature
