import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';
import './footer.css';

const Footer = () => {
  return (
    <div className="footer">
      <div className="fLists">
        <ul className="fList">
          <li className="fListItem">Cities</li>
          <li className="fListItem">Districts</li>
          <li className="fListItem">Hotels</li>
        </ul>
        <ul className="fList">
          <li className="fListItem">Resorts </li>
          <li className="fListItem">Villas</li>
          <li className="fListItem">Hostels</li>
        </ul>
        <ul className="fList">
          <li className="fListItem">Unique places to stay </li>
          <li className="fListItem">Reviews</li>
          <li className="fListItem">Unpacked: Travel articles </li>
          <li className="fListItem">Seasonal and holiday deals </li>
        </ul>
        <ul className="fList">
          <li className="fListItem">Customer Service</li>
          <li className="fListItem">Terms & conditions</li>
        </ul>
      </div>
      <div className="fText">Copyright © 2024 CozyHaven.</div>

      {/* Social Media Icons */}
      <div className="social-icons">
        <FontAwesomeIcon icon={faFacebookF} className="social-icon" />
        <FontAwesomeIcon icon={faTwitter} className="social-icon" />
        <FontAwesomeIcon icon={faInstagram} className="social-icon" />
      </div>
    </div>
  );
};

export default Footer;
