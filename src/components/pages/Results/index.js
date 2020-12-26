import { Tweet } from "react-twitter-widgets";
import React from "react";
import "./Results.css";

export const Results = () => (
    <>
<div className='results__section'>
<h1 className='results__heading'>Callouts</h1>
  <div className="results__container">
    <Tweet
      tweetId="841418541026877441"
      options={{ align: 'left', width: "400" }}
    />
    <Tweet
      tweetId="841418541026877441"
      options={{ align: "left", width: "400" }}
    />
    <Tweet
      tweetId="841418541026877441"
      options={{ align: "left", width: "400" }}
    />
  </div>
  <div className="results__container">
    <Tweet
      tweetId="841418541026877441"
      options={{ align: 'left', width: "400" }}
    />
    <Tweet
      tweetId="841418541026877441"
      options={{ align: "left", width: "400" }}
    />
    <Tweet
      tweetId="841418541026877441"
      options={{ align: "left", width: "400" }}
    />
  </div>
  </div>
  </>
);

export default Results;
