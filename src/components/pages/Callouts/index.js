import React from "react";
import "./Callouts.css";
import { Tweet } from 'react-twitter-widgets'


export const Callouts = () => (
    <>
  <div className='callouts__section'>
    <h1 className='callouts__heading'>Crawlouts</h1>
    <div className="callouts__container">
      <Tweet tweetId="841418541026877441" options={{height: '400px'}}/>
      <Tweet tweetId="841418541026877441" options={{height: '400px'}}/>
      <Tweet tweetId="841418541026877441" options={{height: '400px'}}/>
    </div>
    <div className="callouts__container">
    <div className="callouts__container">
      <Tweet tweetId="841418541026877441" options={{height: '400px'}}/>
    </div>
    <div className="callouts__container">
      <Tweet tweetId="841418541026877441" options={{height: '400px'}}/>
    </div>
    <div className="callouts__container">
      <Tweet tweetId="841418541026877441" options={{height: '400px'}}/>
    </div>
    </div>
  </div>
  </>
);

export default Callouts;
