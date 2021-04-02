import React from 'react';
import { Button } from './Button';
import './Pricing.css';
import { FaFire } from 'react-icons/fa';
import { GiCutDiamond, GiGoldBar } from 'react-icons/gi';
import { IconContext } from 'react-icons/lib';
import { Link } from 'react-router-dom';

function Pricing() {
  return (
      <div className='pricing__section'>
        <div className='pricing__wrapper'>
          <h1 className='pricing__heading'>Pricing</h1>
          <div className='pricing__container'>

            //<Link className='pricing__container-card-gold' to='//donatebot.io/checkout/786381620075692042' target='_blank'>
              <div className='pricing__container-cardInfo-gold'>
                <div className='icon' >

                  <IconContext.Provider value = {{color: '#1c2237', size: 64}}>
                  <GiGoldBar  />
                  </IconContext.Provider>
                </div>
                <h3>Gold</h3>
                <h4>$99.99</h4>
                <p>per month</p>
                <ul className='pricing__container-features'>
                  <li>Alert System by Conviction</li>
                  <li>Access to Discord with Bot</li>
                  <li>Risk Mangement and Notes</li>
                </ul>
                <Button buttonSize='btn--wide' buttonColor='primary'>
                  Choose Plan
                </Button>
              </div>
            //</Link>
            
            //<Link className='pricing__container-card-diamond' to='//donatebot.io/checkout/786381620075692042' target='_blank'>
              <div className='pricing__container-cardInfo-diamond'>
                <div className='icon'>
                <IconContext.Provider value = {{color: '#fff', size: 64}}>
                  <GiCutDiamond />
                  </IconContext.Provider>
                </div>
                <h3>Diamond</h3>
                <h4>$149.99</h4>
                <p>per month</p>
                <ul className='pricing__container-features'>
                  <li>Weekend Reviews/Top Setups</li>
                  <li>Former Investment Banker Input</li>
                  <li>Bronze Features Included</li>
                </ul>
                <Button buttonSize='btn--wide' buttonColor='primary'>
                  Choose Plan
                </Button>
              </div>
            //</Link>
          </div>
        </div>
      </div>
  );
}
export default Pricing;
