import React from 'react';

const Footer = () => (
  <footer className="page-footer orange">
    <div className="container-fluid">
      <div className="row">
        <div className="col l6 s12">
          <h5 className="white-text footer-white-text">ProMeHealth</h5>
          <p className="grey-text text-lighten-4 footer-paragraph">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut placeat quam atque labore dignissimos unde laboriosam sit veniam quos illo quia error ipsum pariatur, reiciendis, voluptate similique qui aliquam. Sequi.</p>


        </div>
        <div className="col l3 s12">
          <h5 className="white-text">Settings</h5>
          <ul>
            <li><a className="white-text" href="#!">Link 1</a></li>
            <li><a className="white-text" href="#!">Link 2</a></li>
            <li><a className="white-text" href="#!">Link 3</a></li>
            <li><a className="white-text" href="#!">Link 4</a></li>
          </ul>
        </div>
        <div className="col l3 s12">
          <h5 className="white-text">Share & Connect With Us!</h5>
          <ul>
            <li><a className="white-text" href="#!">Link 1</a></li>
            <li><a className="white-text" href="#!">Link 2</a></li>
            <li><a className="white-text" href="#!">Link 3</a></li>
            <li><a className="white-text" href="#!">Link 4</a></li>
          </ul>
        </div>
      </div>
    </div>
    <div className="footer-copyright">
      <div className="container-fluid">
      Built with <i className="far fa-heart"></i> by <a className="orange-text text-lighten-3" href="http://natequash.herokuapp.com">Designate</a>
      </div>
    </div>
  </footer>
);

export default Footer;
