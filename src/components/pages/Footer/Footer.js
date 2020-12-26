import React from 'react';
import './Footer.css';
import { Button } from '../Button';
import { Link } from 'react-router-dom';
import {
  FaYoutube,
  FaTwitter,
  FaDiscord
} from 'react-icons/fa';
import { SiTiktok } from 'react-icons/si';
import { GiAirplane } from 'react-icons/gi';

function Footer() {
  return (
    <div className='footer-container'>
      <div className='footer-links'>
        
      </div>
      <section className='social-media'>
        <div className='social-media-wrap'>
          <div className='footer-logo'>
            <Link to='/' className='social-logo'>
              <GiAirplane className='navbar-icon' />
              &nbsp;AIR OPTIONS
            </Link>
          </div>
          <small className='website-rights'>AIR OPTIONS © 2020</small>
          <div className='social-icons'>
            <Link
              className='social-icon-link'
              to='//twitter.com/air_options'
              target='_blank'
              aria-label='Twitter'
            >
              <FaTwitter />
            </Link>
            <Link
              className='social-icon-link'
              to='//discord.gg/fRnwnEBrjh'
              target='_blank'
              aria-label='Discord'
            >
              <FaDiscord />
            </Link>

            <Link
              className='social-icon-link'
              to='//tiktok.com/@airoptions'
              target='_blank'
              aria-label='TikTok'
            >
              <SiTiktok />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;