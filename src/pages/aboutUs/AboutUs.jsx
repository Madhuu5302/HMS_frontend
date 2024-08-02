import React from 'react';
import './aboutUs.css';
import Navbar from '../../Components/navbar/Navbar';
import Header from '../../Components/header/Header';
import MailList from '../../Components/mailList/MailList';
import Footer from '../../Components/footer/Footer';

const AboutUs = () => {
  return (
    <div>
      <Navbar />
      <Header type="list" />
      <div className="about-content">
  <div>
    <div className="about-image-container">
      <img src="https://img.freepik.com/free-vector/hand-drawn-international-trade-with-globe\_23-2149161541.jpg?t=st=1715591255~exp=1715594855~hmac=44f5aa00a02367dc3d8688a9530b28bac9b0918b5548938a20471a5e56e02247&w=740" alt="" className="about-image" />
    </div>
    <div className="about-card">
      <h2>Our Story</h2>
      <p>Cozy Haven Stays was born from a passion for travel and a desire to provide exceptional hospitality experiences. Founded in 2018, our mission is to create a seamless and personalized booking experience for travelers seeking comfortable and inviting accommodations around the world.</p>
    </div>
  </div>

  <div>
    <div className="about-image-container">
      <img src="https://img.freepik.com/premium-vector/motivational-coach-isolated-cartoon-vector-illustrations\_107173-21809.jpg?w=740" alt="" className="about-image" />
    </div>
    <div className="about-card">
      <h2>Our Values</h2>
      <ul>
        <li>Authenticity: We celebrate the unique character and local charm of each destination.</li>
        <li>Sustainability: We prioritize eco-friendly practices and support sustainable tourism initiatives.</li>
        <li>Exceptional Service: Our dedicated team strives to exceed your expectations at every step.</li>
        {/* <li>Continuous Improvement: We constantly adapt and innovate to enhance your travel experience.</li> */}
      </ul>
    </div>
  </div>

  <div>
    <div className="about-image-container">
      <img src="https://img.freepik.com/free-vector/male-team-illustration\_23-2150176790.jpg?t=st=1715591733~exp=1715595333~hmac=9b26436c0af1b470ce5223b778bfa296760bee6c012ac11ef2998256d7b4e66a&w=740" alt="" className="about-image" />
    </div>
    <div className="about-card">
      <h2>Our Team</h2>
      <p>At Cozy Haven Stays, we are a diverse group of travel enthusiasts, hospitality professionals, and technology experts who share a common passion for creating memorable experiences. Our team brings a wealth of knowledge and expertise to ensure that your journey with us is truly exceptional.</p>
    </div>
  </div>
</div>
      <MailList />
      <Footer />
    </div>
  );
};

export default AboutUs;
