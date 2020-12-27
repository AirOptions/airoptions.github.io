import React from "react";
import "./Callouts.css";
import { Tweet } from 'react-twitter-widgets'


export const Callouts = () => (
    <>
  <div className='callouts__section'>
    <h1 className='callouts__heading'>CaLLouts</h1>
    <div className="callouts__container">
      <Tweet tweetId="1339944656138883072" options={{align: 'left', width: '400'}}/>
      <Tweet tweetId="1334912438001692675" options={{align: 'left', width: '400'}}/>
      <Tweet tweetId="1337108867948408843" options={{align: 'left', width: '400'}}/>
    </div>
    <div className="callouts__container">
      <Tweet tweetId="1341050886915813377" options={{align: 'left', width: '400'}}/>
      <Tweet tweetId="1334513945336565761" options={{align: 'left', width: '400'}}/>
      <Tweet tweetId="1339964394030161923" options={{align: 'left', width: '400'}}/>
    </div>
  </div>
  </>
);

export default Callouts;
