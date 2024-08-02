import React, { useState, useEffect } from "react";
import "./mailList.css";

const MailList = () => {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = () => {
    setSubscribed(true);
  };

  useEffect(() => {
    let timer;
    if (subscribed) {
      timer = setTimeout(() => {
        setSubscribed(false);
      }, 1000); 
    }
    return () => clearTimeout(timer);
  }, [subscribed]);

  return (
    <div className="mail">
      <h1 className="mailTitle">Save time, save money!</h1>
      <span className="mailDesc">Sign up and we'll send the best deals to you</span>
      <div className="mailInputContainer">
        <input
          type="text"
          placeholder="Your Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <button onClick={handleSubscribe}>Subscribe</button>
      </div>
      {subscribed && (
        <div className="popup">
          <div className="popupContent">
            <h2>Subscribed Successfully!</h2>
            <p>You are now subscribed to receive our best deals.</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default MailList;