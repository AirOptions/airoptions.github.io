import React from "react";

import "./Disclaimer.css";

export const Disclaimer = () => (
  <div className="disclaimer__section">
    <div className="disclaimer__header" style={{ fontFamily: "monospace" }}>
      <h1>Disclaimer</h1>
    </div>
    <div className="disclaimer__text">
      <ul className>
        <p>
          [DISCLAIMER: airoptions.io, Air Options, AIR OPTIONS LLC and its
          employees are not Registered Investment Advisors, a Broker Dealer or a
          member of any association for other research providers in any
          jurisdiction whatsoever and we are not qualified to give financial
          advice. Our social media profiles are for Entertainment purposes only.
          Never invest in any stock featured on our site or emails unless you
          can afford to lose your entire investment. The disclaimer is to be
          read and fully understood before subscribing.​ Release of Liability:
          Through use of this server, viewing or using, you agree to hold
          airoptions.io, Air Options, AIR OPTIONS LLC, its operators, owners and
          employees harmless and to completely release them from any and all
          liability due to any and all loss (monetary or otherwise), damage
          (monetary or otherwise), or injury (monetary or otherwise) that you
          may incur. If you invest in any stock or options that you see in our
          alert system, you are doing so at your own will and not because
          airoptions.io, Air Options, AIR OPTIONS LLC or its staff advised you
          to.]
        </p>
      </ul>
    </div>
    <div className="disclaimer__header" style={{ fontFamily: "monospace" }}>
      <h1>No Warranty</h1>
    </div>
    <div className="disclaimer__text">
      <ul className>
        <p>
          The information contained in this Website, Discord, Twitter, and TikTok is provided by Air
          Options LLC as a service/promotion to its users, subscribers,
          customers and possible others. It does not contain (legal) advice.
          Although we try to provide quality information, we do not guarantee of
          results obtained from the use of this information, and without
          warranty of any kind, express or implied, including, but not limited
          to warranties of performance for a particular purpose.
        </p>
      </ul>
    </div>
    <div className="disclaimer__header" style={{ fontFamily: "monospace" }}>
      <h1>No Liability</h1>
    </div>
    <div className="disclaimer__text">
      <ul className>
        <p>
        In no way Air Options LLC is liable to user or any other party for any damages, costs of any character including but not limited to direct or indirect, consequential, incidental or other costs or damages, via the use of the information contained in the Paid Service or Social Media.
        </p>
      </ul>
    </div>
    <div className="disclaimer__header" style={{ fontFamily: "monospace" }}>
      <h1>Refunds</h1>
    </div>
    <div className="disclaimer__text">
      <ul className>
        <p>
        No refunds are permitted except with respect to any statutory warranties or guaranties that cannot be excluded or limited by law.
        </p>
      </ul>
    </div>
  </div>
);

export default Disclaimer;
