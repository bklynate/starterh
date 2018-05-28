import React from 'react';

const LandingPage = () => (
  <div>
    <div className="section no-pad-bot" id="index-banner">
      <div className="container-fluid">
        <br/>
        <h1 className="header center orange-text">ProMeHealth</h1>
        <div className="row center">
          <h5 className="header col s12 light">A personable health record that empowers you to take your health into your own hands.</h5>
        </div>
        <div className="row center">
          <a href="/auth/google" id="download-button" className="btn-large waves-effect waves-light orange">Get Started</a>
        </div>
        <br/>

      </div>
    </div>

    <div className="container-fluid">
      <div className="section">

        <div className="row">
          <div className="col s12 m4">
            <div className="icon-block">
              <h2 className="center light-blue-text"><i className="material-icons">Meds</i></h2>
              <h5 className="center">Manage your medication</h5>

              <p className="light">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptas vero iusto, ut asperiores hic, vel, quasi odio aperiam sed est veniam dolore dignissimos tempora officiis? Ratione esse ad non, vel.</p>
            </div>
          </div>

          <div className="col s12 m4">
            <div className="icon-block">
              <h2 className="center light-blue-text"><i className="material-icons">Patient Focused</i></h2>
              <h5 className="center">Emphasis on being user friendly</h5>

              <p className="light">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eveniet voluptatum expedita, neque cupiditate labore itaque laborum perspiciatis, debitis optio illum consequuntur ad hic! Totam soluta voluptatem ab, necessitatibus modi doloremque!</p>
            </div>
          </div>

          <div className="col s12 m4">
            <div className="icon-block">
              <h2 className="center light-blue-text"><i className="material-icons">No configuration</i></h2>
              <h5 className="center">Easy to work with</h5>

              <p className="light">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quas doloremque magnam harum, ullam eaque, illum doloribus velit eveniet esse autem reprehenderit nam sed modi adipisci molestias. Tempora molestias neque similique.</p>
            </div>
          </div>
        </div>
      </div>
      <br/>
    </div>
  </div>
);

export default LandingPage;
