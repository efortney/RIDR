import React from 'react';

require('../styles/marketing.css');

const Marketing = () => {
  return (
<div className="marketing">

<header className="text-black">
    <div className="container-fluid text-center">
      <h1>Welcome to RIDR!</h1>
      <p className="lead">Learn more about RIDR and what we are all about down below or click the button to get started.</p>
      <a href="/auth/google">
          <button className="btn btn-primary blue">Get Started
          </button>
      </a>
          <img src={require('../images/taxi.png')} />    
    </div>
  </header>

<section id="about">
    <div className="container-fluid">
      <div className="row">
        <div className="col-lg-8 mx-auto">
          <h2>About this company</h2>
          <p className="lead">RIDR is a PWA (Progressive Web App) that allows for a user to take full advantage of compaines such as Uber, Lyft, and local taxi companies all from one app. Some of the things that RIDR can do for you include:</p>
          <ul>
            <li>Giving you the best ride options for Uber.</li>
            <li>Giving you the best ride options for Lyft.</li>
            <li>Allowing you to see any local taxi company that may offer better pricing than Uber or Lyft.</li>
            <li>Save as many of your dollars as possible!</li>
          </ul>
          <img src={require('../images/driver.jpg')} />
        </div>
      </div>
    </div>
  </section>

  <section id="services" >
    <div class="container-fluid">
      <div class="row">
        <div class="col-lg-8 mx-auto">
          <h2>Services we offer</h2>
          <p class="lead">We offer riders a unique opportunity to bring all of your various ride sharing apps under one hood. You can now simply log into the RIDR app and have access to the best ride options for you so that you can save as much money as possible. Who would want to go through all their ride sharing apps to find the best price anyways? We got you covered!</p>
          <img src={require('../images/uberlyft.jpg')} />
        </div>
      </div>
    </div>
  </section>

  <section id="contact">
    <div class="container-fluid">
      <div class="row">
        <div class="col-lg-8 mx-auto">
          <h2>Contact us</h2>
          <p class="lead">You can contact us at: ###-###-#### or by email at: loremipsum@ridr.com</p>
        </div>
      </div>
    </div>
  </section>

  <footer class="py-5 bg-dark">
    <div class="container">
      <p class="m-0 text-center text-white">Copyright &copy; RIDR 2019</p>
    </div>
  </footer>

  </div>

  );
};

export default Marketing;
