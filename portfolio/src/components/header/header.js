import React, { Component } from 'react';

export default class Header extends Component {
    render() {
        return (
            <header id="home">
              <nav id="nav-wrap">
                <a className="mobile-btn" href="#nav-wrap" title="Show navigation">Show navigation</a>
                <a className="mobile-btn" href="#" title="Hide navigation">Hide navigation</a>
                <ul id="nav" className="nav">
                  <li className="current"><a className="smoothscroll" href="#home">Home</a></li>
                  <li><a className="smoothscroll" href="#about">About</a></li>
                  {/*<li><a className="smoothscroll" href="#resume">Resume</a></li>*/}
                  {/*<li><a className="smoothscroll" href="#portfolio">Projects</a></li>*/}
                  {/*<li><a className="smoothscroll" href="#contact">Contact</a></li>*/}
                </ul> {/* end #nav */}
              </nav> {/* end #nav-wrap */}
              <div className="row banner">
                <div className="banner-text">
                  <h1 className="responsive-headline">I'm Deep Bhuller.</h1>
                  <h3>I'm a San Francisco Bay Area based <span>software developer</span>, skilled in <span>full-stack web development</span>, <span>object-oriented programming</span> and the <span>agile software development method</span>. Fluent in <span>Java</span>, <span>JavaScript</span>, and <span>Python</span>. 
                    </h3>
                  <hr />
                  <ul className="social">
                    <li><a href="https://github.com/dbhuller"><i className="fa fa-github" /></a></li>
                    <li><a href="https://www.linkedin.com/in/deep-bhuller-599616173/"><i className="fa fa-linkedin" /></a></li>
                  </ul>
                </div>
              </div>
              <p className="scrolldown">
                <a className="smoothscroll" href="#about"><i className="icon-down-circle" /></a>
              </p>
            </header> 
          );
    }
}

// var Header = React.createClass({
//     render: function() {
      
//     }
//   });

//   export default Header;