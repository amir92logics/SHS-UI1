import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './index.css'
import $ from 'jquery';
import { connect } from 'react-redux'

// import { Element , Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'
 



class index extends Component {
  constructor(props) {
    super(props)
    this.state={
      login : this.props.login,
      scrollTop: 0,
      flag: true
    }
    // this.resultsDiv = React.createRef();
    this._toggleDiv = this._toggleDiv.bind(this)
    this.login = this.login.bind(this)
    // this.resultsDiv = React.createRef();
  }
  componentWillUnmount(){
    // console.log("unmounted")
    
    // console.log(this.state.flag)
    // if(this.state.flag){
    //   console.log('called')
      // $(window).resize();
      // this.scrollFunction1();
      // }

  }
  componentWillMount(){
    if(this.state.flag){
    $(window).resize();
    this.scrollFunction();
    }
    this.setState({
      flag: false
    })
  }
  componentDidUpdate(){
    if(this.state.flag){
    this.scrollFunction();
    }
  }
  login(){
    this.setState({
      login:!this.state.login
    })
    // return this.props.history.push('/choose-signup');
  }


  _toggleDiv() {
    $(this.refs['toggle-div']).toggle()
   
  }
  scrollFunction=() =>{
    // if(this.props.Token===''){
    $(window).resize(function (event) {
      var size = $(window).width(); 
              $(window).scroll(function (event) {
                      var scroll = $(window).scrollTop();
                    if (scroll> 0 && size>1110) {
                       $('#header-mynav').attr('class','header-mynav1');
                       } else {
                        $('#header-mynav').attr('class','header-mynav');
                  
                      }
                   });
                 
    })
  // }
  }
  scrollFunction1=() =>{
    if(this.props.Token===''){
    $(window).resize(function (event) {
      var size = $(window).width(); 
              $(window).scroll(function (event) {
                      var scroll = $(window).scrollTop();
                    if (scroll> 11331150 && size>1111110) {
                       $('#header-mynav').attr('class','header-mynav1');
                       } else {
                        $('#header-mynav').attr('class','header-mynav');
                  
                      }
                   });
                 
    })
  }
  }


    render() {
    //   if(this.state.flag){
    // this.scrollFunction();
    //   }
   console.log("header: "+ this.props.Token);


//    $('document').ready(function () {


// 		// RESTYLE THE DROPDOWN MENU
//     $('#google_translate_element').on("click", function () {

//         // Change font family and color
//         $("iframe").contents().find(".goog-te-menu2-item div, .goog-te-menu2-item:link div, .goog-te-menu2-item:visited div, .goog-te-menu2-item:active div, .goog-te-menu2 *")
//             .css({
//                 'color': '#544F4B',
//                 'font-family': 'Roboto',
// 								'width':'100%'
//             });
//         // Change menu's padding
//         $("iframe").contents().find('.goog-te-menu2-item-selected').css ('display', 'none');
			
// 				// Change menu's padding
//         $("iframe").contents().find('.goog-te-menu2').css ('padding', '0px');
      
//         // Change the padding of the languages
//         $("iframe").contents().find('.goog-te-menu2-item div').css('padding', '20px');
      
//         // Change the width of the languages
//         $("iframe").contents().find('.goog-te-menu2-item').css('width', '10%');
//         $("iframe").contents().find('td').css('width', '100%');
      
//         // Change hover effects
//         $("iframe").contents().find(".goog-te-menu2-item div").hover(function () {
//             $(this).css('background-color', '#4385F5').find('span.text').css('color', 'white');
//         }, function () {
//             $(this).css('background-color', 'transparent').find('span.text').css('color', '#544F4B');
//         });

//         // Change Google's default blue border
//         $("iframe").contents().find('.goog-te-menu2').css('border', 'none');

//         // Change the iframe's box shadow
//         $(".goog-te-menu-frame").css('box-shadow', '0 0px 0px 0px rgba(0, 0, 0, 0.14), 0 0px 0px 0px rgba(0, 0, 0, 0.12), 0 0px 0px 0px rgba(0, 0, 0, 0.3)');
        
      
      
//         // Change the iframe's size and position?
//         $(".goog-te-menu-frame").css({
//           'position': 'absolute',
//             'height': '10%',
//             'width': '10%',
//             // 'top': '0px'
//         });
//         // Change iframes's size
//         $("iframe").contents().find('.goog-te-menu2').css({
//             'height': '10%',
//             'width': '50%'
//         });
//     });
// });

   
           return (
    
            <div className='header_body'>
              
             
 <nav id="header-mynav" ref="header-mynav" className="header-mynav">


    
                  <span className="h-brand"  ><strong> S<span style={{color: 'rgb(39, 255, 239)'}}>H</span>S</strong><span className="bars" onClick={this._toggleDiv}><i className="fa fa-bars" /></span></span>
                  <span className="menu" ref="toggle-div">
                    <ul className='header-ul'>
                      <li className='header-li'>
                        <Link to="/"><a className="header-a" href="/">Home</a></Link>
      
                      </li>
                      <li className='header-li'>
                      <Link className="header-a" to="/howitwork">How it Works</Link>
                        	
                      </li>
                      <li className='header-li'><Link className="header-a" to="/blog">Blog</Link></li>

                      <li className='header-li'><Link className="header-a" to="/about">About Us </Link></li>
                      {/* <div class="ct-topbar">
  <div class="container"> */}
	{/* <ul class="list-unstyled list-inline ct-topbar__list">
	  <li class="ct-language">Language <i class="fa fa-arrow-down"></i>
		<ul class="list-unstyled ct-language__dropdown">
		  <li><a href="#googtrans(en|en)" class="lang-en lang-select" data-lang="en"><img src="https://www.solodev.com/assets/google-translate/flag-usa.png" alt="USA"/></a></li>
		  <li><a href="#googtrans(en|es)" class="lang-es lang-select" data-lang="es"><img src="https://www.solodev.com/assets/google-translate/flag-mexico.png" alt="MEXICO"/></a></li>
		  <li><a href="#googtrans(en|fr)" class="lang-es lang-select" data-lang="fr"><img src="https://www.solodev.com/assets/google-translate/flag-france.png" alt="FRANCE"/></a></li>
		  <li><a href="#googtrans(en|zh-CN)" class="lang-es lang-select" data-lang="zh-CN"><img src="https://www.solodev.com/assets/google-translate/flag-china.png" alt="CHINA"/></a></li>
		  <li><a href="#googtrans(en|ja)" class="lang-es lang-select" data-lang="ja"><img src="https://www.solodev.com/assets/google-translate/flag-japan.png" alt="JAPAN"/></a></li>
		</ul>
	  </li>
	</ul> */}
  {/* </div>
</div> */}
                      {/* <li id="google_translate_element"></li> */}
   
	{/* <ul class="list-unstyled list-inline ct-topbar__list">
	  <li class="ct-language">Language <i class="fa fa-arrow-down"></i>
		<ul class="list-unstyled ct-language__dropdown">
		  <li><a href="#googtrans(en|en)" class="lang-en lang-select" data-lang="en"><img className='img-lang' src="https://www.solodev.com/assets/google-translate/flag-usa.png" alt="USA"/></a></li>
		  <li><a href="#googtrans(en|ar)" class="lang-es lang-select" data-lang="ar"><img className='img-lang' src="http://icons.iconarchive.com/icons/custom-icon-design/all-country-flag/256/Saudi-Arabia-Flag-icon.png" alt="JAPAN"/></a></li>

		</ul>
	  </li>
	</ul> */}


                      <li className="ul-login header-li"> {this.state.login?
                  <Link   
                   onClick={this.login} className="signbtn" style={{textDecoration:"none"}} to="/choose-signup"><button>Sign Up</button></Link>:
                   <Link  
                   onClick={this.login} className="signbtn"  to="/Login" style={{textDecoration:"none"}}><button>Sign In</button></Link>}</li>
                    </ul>
                  </span>
                  {this.state.login?
                  <Link  className="login-corner-btn" 
                   onClick={this.login} style={{textDecoration:"none"}} to="/choose-signup">Sign Up</Link>:
                   <Link  className="login-corner-btn" 
                   onClick={this.login} to="/Login" style={{textDecoration:"none"}}>Sign In</Link>}
                   
                  {/* </div> */}
                </nav>            

            </div>
        )
    }
}
const mapStateToProps = state => {

  return {
    Token: state.places.Token,
    Income: state.places.Income,
  }
}


export default connect(
  mapStateToProps
)(index);
