import React, { Component } from 'react'
import imagefb from '../../images/fb.png';
import imageinsta from '../../images/insta.png';
import imagetwt from '../../images/twiter.png';
import imagein from '../../images/in.png';
import imagepint from '../../images/pint.png';
import "./index.css";
class index extends Component {
    render() {
        return (
            <div>
                <footer>
              <div className=" footer-bg">
                <div className=" col-md-12 row  pb-5">
                  <div className="col-md-2">
                    <p>SITE MAP</p>
                   
                    <ul >
                      <li><a href="/"> Home</a></li>
                      <li><a href="/"> About Us</a></li>
                      <li><a href="/"> How we work</a></li>
                      <li><a href="/"> Details</a></li>
                      <li><a href="/"> History</a></li>
                    </ul>
                  
                  </div>
                  <div className="col-md-2">
                    <p>SERVICES</p>
                  <ul >
                      <li><a href="/"> Home</a></li>
                      <li><a href="/"> About Us</a></li>
                      <li><a href="/"> How we work</a></li>
                      <li><a href="/"> Details</a></li>
                      <li><a href="/"> History</a></li>
                    </ul>
                  
                  </div>
                  <div className="col-md-2">
                    <p>CONTACT US</p>
                  <ul >
                      <li><a href="/"> Home</a></li>
                      <li><a href="/"> About Us</a></li>
                      <li><a href="/"> How we work</a></li>
                      <li><a href="/"> Details</a></li>
                      <li><a href="/"> History</a></li>
                    </ul>
                   
                  </div>
                  <div className="col-md-6 d-flex justify-content-center">
                    <ul className="row icons">
                      <li><span><a href="/"><img src={imagefb} className="fb1" alt=''/></a></span></li>
                      <li><span><a href="/"><img src={imageinsta} className="insta" alt='' /></a></span></li>          
                      <li><span><a href="/"><img src={imagetwt} className="twiter" alt='' /></a></span></li>
                      <li> <span><a href="/"><img src={imagein} className="linkedin" alt='' /></a></span></li>
                      <li><span><a href="/"><img src={imagepint} className="pintrest" alt='' /></a></span></li>
                    </ul>
                  </div>
                </div>
              </div>
            </footer>
            <div className="footer-copyright text-right py-2"><span>© 2019</span> 
            </div>
            </div>
        )
    }
}

export default index
