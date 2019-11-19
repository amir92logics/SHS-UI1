import React, { Component } from 'react'
import './index.css'
import Header from '../../Component/Header'
import Footer from '../../Component/Footer'

export default class index extends Component {
    render() {
        return (
            <div>

                <section class="bg-image-about">
             <Header />

 <div class="container about-main-container">
   <div class="col-md-12 col-12 col-sm-12 col-lg-12 about-main-content pb-2">
    <h2 className='about-main-content-h2'>ABOUT &nbsp;<span className='about-main-content-span'>US</span></h2>
     <p className='about-main-content-p'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
proident, sunt in culpa qui ocia deserunt mollit anim id est laborum.</p>
   </div>
   
 </div>
</section>
<section class="about-ppl-say-bg">
<div class="container">
<div class="row">
  <div class='col-md-12  text-center mb-5 mt-5'>
  <h2 class="ppl-say">What People <span >Say</span></h2>
  </div>
</div>
<div class='row'>
  <div class='col-md-12'>
    <div class="carousel slide sq-crousal4" data-ride="carousel" id="sq-crousal4">
    
      <ol class="carousel-indicators">
        <li data-target="#sq-crousal4" data-slide-to="0" className="active carousel-indicators-li sq-crousal4-li"></li>
        <li data-target="#sq-crousal4" data-slide-to="1" className='carousel-indicators-li sq-crousal4-li'></li>
        <li data-target="#sq-crousal4" data-slide-to="2" className='carousel-indicators-li sq-crousal4-li'></li>
      </ol>
      
    
      <div class="carousel-inner">
      
     
        <div class="carousel-item active">
          <blockquote>
            <div class="row">
              <div class="col-md-12 d-flex justify-content-center  d-md-flex d-block text-center text-lg-left">
       
        <div class="feedback-text pl-3 col-md-8">
          <p >Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maiores aliquid officia similique delectus atque at perferendis, impedit earum esse ad incidunt. Dignissimos ducimus saepe laborum, provident nihil necessitatibus magni impedit!</p>
        </div>
              </div>
            </div>
          </blockquote>
          <div class="col-md-12 d-flex justify-content-center">
             <img class="rounded-circle" src="https://s3.amazonaws.com/uifaces/faces/twitter/mantia/128.jpg" style={{width: '100px',height:'100px'}}/>
             
          </div>
          <div class="col-md-12 d-flex justify-content-center ppl-say-name">
             <p class="pb-0 mb-0 ppl-say-name-p">SHAHZAD SOHAIL</p>
          </div>
          <div class="col-md-12 d-flex justify-content-center ppl-say-company">
             
             <p className='ppl-say-company-p'>CEO ABC COMPANY</p>
          </div>
        </div>
      
        <div class="carousel-item">
      <blockquote>
        <div class="row">
          <div class="col-md-12 d-flex justify-content-center  d-md-flex d-block text-center text-lg-left">
            
            <div class="feedback-text col-md-8 pl-3">
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa, in ratione quaerat odio architecto dolor, reiciendis atque nemo soluta dicta, fuga ipsam commodi? Ut nam aperiam quo, quam est, consequatur.</p>

            </div>
          </div>
        </div>
      </blockquote>
      <div class="col-md-12 d-flex justify-content-center">
             <img class="rounded-circle" src="https://s3.amazonaws.com/uifaces/faces/twitter/mantia/128.jpg" style={{width: '100px',height:'100px'}}/>
          </div>
           <div class="col-md-12 d-flex justify-content-center ppl-say-name">
             <p class="pb-0 mb-0">SHAHZAD SOHAIL</p>
          </div>
          <div class="col-md-12 d-flex justify-content-center ppl-say-company">
             
             <p className='ppl-say-company-p'>CEO ABC COMPANY</p>
          </div>
        </div>
      
        <div class="carousel-item">
          <blockquote>
      <div class="">
        <div class="col-md-12  d-md-flex d-block text-center d-flex justify-content-center">
          
          <div class="feedback-text pl-3 col-md-8">
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officia debitis, adipisci, inventore excepturi repudiandae non natus blanditiis itaque asperiores pariatur, vero ex distinctio aperiam molestias cumque ipsum, sapiente nihil at.</p>
          </div>

        </div>
              </div>
           
          </blockquote>
          <div class="col-md-12 d-flex justify-content-center">
             <img class="rounded-circle" src="https://s3.amazonaws.com/uifaces/faces/twitter/mantia/128.jpg" style={{width: '100px',height:'100px'}}/>
          </div>
           <div class="col-md-12 d-flex justify-content-center ppl-say-name">
             <p class="pb-0 mb-0">SHAHZAD SOHAIL</p>
          </div>
          <div class="col-md-12 d-flex justify-content-center ppl-say-company">
             
             <p className='ppl-say-company-p'>CEO ABC COMPANY</p>
          </div>
        </div>
      </div>
    
    
      </div>                    
  </div>
</div>
</div>
{/* </div> */}

</section>

<section class="about-mission-section-bg">
  <div class="container pt-5 ">
    <div class="col-md-12 row">
      <div class="col-md-4 about-mission-left">
        <h2 className='about-mission-left-h2'><span className='about-mission-left-span'>OUR</span> MISSION</h2>
        <p>We focus on the needs
market businesses, not the Fortune 5000. We focus on the needs
market businesses, not the Fortune 5000</p>
      </div>
      <div class="col-md-4 d-flex justify-content-center">
        <div class="about-bbl-line">
          <div class="about-bbl-outer-top">
            <div class="about-bbl-inner-top"></div>
          </div>
          <div  class="about-bbl-outer-btm">
            <div class="about-bbl-inner-btm"></div>
          </div>
        </div>

      </div>
      <div class="col-md-4 about-mission-right">
        <h2 className='about-mission-right-h2'><span className='about-mission-right-span'>OUR</span> VISION</h2>
        <p>We focus on the needs
market businesses, not the Fortune 5000. We focus on the needs
market businesses, not the Fortune 5000</p>
      </div>
    </div>
  </div>
</section>

<section id="contact">
      
      <div class="contact-section">
      <div class="container">
        <form>
           <div class="row col-md-12 col-12">
            <div class="col-md-6 col-12">
              <div class="get-in-touch">
                <p className='get-in-touch-p'>GET IN TOUCh</p>
                <h2 className='get-in-touch-h2'><span className='get-in-touch-span'>Contact</span> Details</h2>
                <h6 className='get-in-touch-h6'>If you are interested in working with us then please
drop us a line, we would love to hear from you.</h6>
              </div>
              <div class="pt-3 about-contact-touch">
               <p><i class="fa fa-envelope fa-2x"></i> info@shs.com</p>
               <p><i class="fa fa-phone fa-2x"></i> +800 1234 56 78</p>
               <p><i class="fa fa-map-marker fa-2x"></i> 121 Wallstreet Street, Dubai, ABC</p>
              </div>
              
          </div>
          <div class="form-lin"></div>
          <div class="col-md-5 col-12">
            <div class="contact-us">
              <p className='contact-us-p'>CONTACT US</p>
                <h2 className='contact-us-h2'><span className='contact-us-span'> Drop Us</span> A Line</h2>
                <h6 className='contact-us-h6'>If you are interested in working with us then please
drop us a line, we would love to hear from you.</h6>
            </div>
              <div class="form-group">
                
                
                <input type="text" class="form-control about-form"  placeholder="Name *"/>
              </div>
              <div class="form-group">
                
                <input type="email" class="form-control about-form" id="exampleInputEmail" placeholder="Email *"/>
              </div>  
              <div class="form-group">
                
                <input type="tel" class="form-control about-form" id="telephone" placeholder="Message *"/>
              </div>
              <button class="about-submit-btn ">Send Message</button>
            </div>
          </div>
        </form>
      </div>
      </div>
    </section>
    <Footer/>
            </div>
        )
    }
}
