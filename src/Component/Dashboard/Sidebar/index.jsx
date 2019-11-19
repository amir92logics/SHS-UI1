import React, { Component } from 'react'
import imglogo from '../../../images/logo.png';
import SweetAlert from '@sweetalert/with-react';
import $ from 'jquery';
// import '../Projects/node_modules/@trendmicro/react-sidenav/dist/react-sidenav.css';
import cookie from 'react-cookies';
import decode from "jwt-decode";

import "./index.css";
class index extends Component {
    constructor(props) {
        super(props)
        this.state={
          toggle : true,
          scrollTop: 0,
          name: '',
          surname: '',
          email: ''
        
        }
        // this.resultsDiv = React.createRef();
        this.bignav = this.bignav.bind(this)
        this.mynav = this.mynav.bind(this)
        this.logout = this.logout.bind(this)

        // this.resultsDiv = React.createRef();
      }
      componentDidMount(){
        // $ ('.main-menu').hover()
        this.bignav();
        if (cookie.load('Token')) {

          let token = decode(cookie.load('Token'))
          //  console.log("cockies: "+token.sub)
          
        fetch('https://shsbackend.azurewebsites.net/api/services/app/User/Get?Id='+ token.sub)
        .then(res => res.json())
        .then(json => {
          if (json.success) {
            //  console.log(json.result)
            let name = json.result.name
            let surname = json.result.surname
            let email = json.result.emailAddress
        
          //  console.log("user: "+ user);
            this.setState({
            name,
            surname,
            email
            })
        
          }
        }).catch((error) => {
          // console.error(error);
        });
      }
      }
    mynav=()=>{
    // let toggle = Object.assign(this.state.toggle);
    let toggle=!this.state.toggle
        // console.log(this.state.toggle)
        $('#mynav').attr('class','main-menu1');
        $("#brand").css({display: "block"});
      $("#userImage").css({display: "none"});
      $('.iconbaar').css({'padding-top':'50px','padding-left':'50px'})
      $('.nav-text').css("width", "0px");
      // $('li').css("text-align", "center");
        // $("#mySidenav").width(55);
        // $('#mynav').attr('className','main-menu1');
        // console.log(this.state.toggle)
        if(this.state.toggle===true){
            $("#mySidenav").width(250);
                // function(){ $(this).addClassnclassName('hover'); $('#mynav').attr('className','main-menu1'); },
                // function(){ $(this).removeClassnclassName('hover');$('#mynav').attr('className','main-menu1'); }
                $('#mynav').attr('class','main-menu1');
                $("#brand").css({display: "block"});
                $("#userImage").css({display: "none"});
                $('.iconbaar').css({'padding-top':'50px','padding-left':'50px'})
                $('.nav-text').css("width", "0px");
          //  $('li').css("text-align", "center");
        //    $('li').css("text-align", "start");

            // $('#mynav').attr('className','main-menu1');

        }else{
            $("#mySidenav").width(-55);

            $('#mynav').attr('class','main-menu');
            // $('#mySidenav').attr('className','sidenav');
            $("#brand").css({display: "block"});
           $("#userImage").css({display: "none"});
           $('.iconbaar').css({'padding-top':'50px','padding-left':'50px'})
           $('.nav-text').css("width", "0px");
          //  $('li').css("text-align", "center");
        //    $('li').css("text-align", "start");


        }
        this.setState({
            toggle
        })   
      
      }
    //   sidebar(){
    
    //     if(this.state.toggle===true){
    //         $('#mynav').attr('className','main-menu1');

           

    //     }else{
    //         $('#mynav').attr('className','main-menu');

    //     }     
    //   }
    //   bignav1=()=>{
    //     $('.main-menu').hover(
    //         function(){ $(this).addClassnclassName('hover'); $('#mynav').attr('className','main-menu1'); },
    //         function(){ $('#mynav').attr('className','main-menu'); }
    //  )
    //   }
    // sidenav=()=>{
    //     $("#brand").css("display", "block");
    //     $("#userImage").css("display", "none");
    // }
  
      bignav=()=>{
         // $('#mynav').attr('className','main-menu1');
         
          $ ('.main-menu').hover(
                    function () {
                      
                        $('.main-menu').css({
                            width:'240px',
                            overflow:'hidden',
                            opacity:1
                          })
                        
                        //   $("#brand").css({display: "block"});
                        //   $("#userImage").css({display: "none"});
                        if($('.main-menu').width()>60){
                            // console.log($('.main-menu').width())
                           
                            // $('li').css("text-align", "start");
                            $("#brand").css("display", "none");
                            $("#userImage").css("display", "block")
                            $('.iconbaar').css({'padding-top':'10px','padding-left':'0px'})
                            $('.nav-text').css("width", "20px");
                       }
                       else{
                        
                             $("#brand").css("display", "block");
                             $("#userImage").css("display", "none");
                             $('.iconbaar').css({'padding-top':'50px','padding-left':'50px'})
                             $('.nav-text').css("width", "0px");
                          //    $(".hover-menu").hover({
                          //     function () {
                          //       $('.hover-menu').css({
                          //     'background-color': '#0173fc',
                          //   //   '-webkit-transition': 'all 1s ease',
                          //   //   '-moz-transition': 'all 1s ease',
                          //   //   '-o-transition': 'all 1s ease',
                          //   //  ' -ms-transition': 'all 1s ease',
                          //   //   'transition': 'all 1s ease',
                          //   //   'border-radius': '30px',
                          //   })
                          //   },
                          //   function () {
                          //     $('.hover-menu').css({
                          //   'background-color': '#0176fc',
                          // //   '-webkit-transition': 'all 1s ease',
                          // //   '-moz-transition': 'all 1s ease',
                          // //   '-o-transition': 'all 1s ease',
                          // //  ' -ms-transition': 'all 1s ease',
                          // //   'transition': 'all 1s ease',
                          // //   'border-radius': '30px',
                          // })
                          // }
                            // })
                        
                            
                       }
                    },
                    function () {
                        $('.main-menu').css({
                            width:'55px',
                            overflow:'hidden',
                            opacity:1
                          })
                          if($('.main-menu').width()>60){
                            console.log($('.main-menu').width())
                            $("#brand").css("display", "none");
                            $("#userImage").css("display", "block");
                            $('.iconbaar').css({'padding-top':'10px','padding-left':'0px'})
                            $('.nav-text').css("width", "20px");

                            //  $('li').css("text-align", "start");

                            
                       }
                       else{
                        
                             $("#brand").css("display", "block");
                             $("#userImage").css("display", "none");
                           
                             $('.iconbaar').css({'padding-top':'50px','padding-left':'50px'})
                             $('.nav-text').css("width", "0px");

                            //  $('li').css("text-align", "start");

                       }
                        //   $("#brand").css("display", "none");
                        //   $("#userImage").css("display", "block");
                    }
                    
                  );
       
            // $('#mynav').attr('className','main-menu1');
            // $("#brand").css("display", "block");
            // $("#userImage").css("display", "none");

        // $ ('.main-menu').hover(
        //         function () {
                  
        //             $('#mynav').attr('className','main-menu1');
            
        //             $("#brand").css("display", "block");
        //             $("#userImage").css("display", "none");

               
        //         },
        //         function () {
        //             $('#mynav').attr('className','main-menu');
        //             $("#brand").css("display", "none");
        //             $("#userImage").css("display", "block");

        //                 }
            
             
                
        //       );
           
            }
      componentWillUpdate(){
          console.log(this.state.toggle)
      }
      logout=(e)=>{
          e.preventDefault()   ;   
                    console.log('size');

    
        // this.props.history.push('/Login');
        SweetAlert("Are you sure you want to log out?", {
          buttons: {
            catch: {
              text: "Log out",
              value: "catch",
            },
            defeat: true,
          },
        })
        .then((value) => {
          switch (value) {
         
            case "catch":
              {
                 cookie.remove('Token');
                 window.location.reload()}
              break;
         
            default:
              SweetAlert("Got away safely!");
          }
        });
        
        // SweetAlert(
        //   <div classNameName="alert alert-warning fade show">
        //      <h1> <strong>Log Out</strong></h1> 
        //   <p style={{fontSize:"30px"}}>Are you sure you want to log out?</p>
        //  { window.location.reload()}
        //     </div>
           
        // )
     

        // if(this.state.success){
        //      return <Redirect to="/home"/>

        // }
      }    
      
      render() {
        // if (!this.props.Token) {
        //   // return <LoginPanel onSuccess={this.onLogin} />
        //   return <Redirect to="/Login"/>
        // }
     
        // $(window).resize(function (event) {
        //     var size = $(window).width(); 
                 
        //                 //   console.log(size);
        //                   if (size< 1350) {
        //                     $(".toggle-btn1").css("display", "none");
        //                     $("#mySidenav").css("display", "none");

        //                     //  $('#mynav1').attr("display", "block");
        //                      } else {
        //                         // $("#mynav").css("display", "block");
        //                         $("#mySidenav").css("display", "block");
        //                         // $("#mynav1").css("display", "none");
        //                     $(".toggle-btn1").css("display", "block");

        //                     }
                       
                       
        //   })
         
        return (
            <div>
             
              
<nav className="main-menu" id='mynav'   onMouseOver={this.bignav} onClick={this.sidenav}>
  {/* <i className="fa fa-bars fa-2x toggle-btn" onclick={openNav()} ></i>  */}
  <div className="nav-side-menu">
 
  <div className='header col-md-12' style={{height:'50px'}}>
  <h5 style={{fontSize:'15px',fontWeight:'bold',    paddingTop: '15px',marginLeft: '-7px'}}>SHS</h5>
  <i  className="fa fa-bars fa-2x toggle-btn1 mr-5" onClick={this.mynav} ></i>
  
       
     
      </div>
<div className="scrollbar pt-1 " id="style-1">

      <div className='userImagediv col-md-12' id='userImage' styel={{}}><img src={imglogo} className='userImage' alt=''/></div>
      {/* <div id='userImage' className="user-img1 col-md-12"  styel={{backgroundColor:' #1e2128', height:'500px'}}>malik</div> */}
   
      <div id='brand' className="brand col-md-12 " style={{display:'none'}}>
    <div className="col-md-12 d-flex justify-content-center">
    <div className="logo col-md-6 pt-3">SHS</div>
      </div>

      <div className="col-md-12 d-flex justify-content-center">
       <div className="name col-md-12 pt-2 "> {this.state.name} <span>{this.state.surname}</span></div>
      </div>

      <div className="col-md-12 d-flex justify-content-center">
    <div className="email col-md-12">{this.state.email}</div>
      </div>
      <div className="col-md-12 d-flex justify-content-center">
    <div className="user-img col-md-12"><img src={imglogo} alt=''/></div>
      </div>

  </div>
{/* <div className="settings"></div> */}

<ul className="iconbaar">

<li className="active hover-menu">
  <a href="/">
  <i className="fa fa-dashboard fa-lg"></i><span className="nav-text">DASHBOARD</span>
  </a>
</li>

{/* <li>                                  */}

{/* <i className="fa fa-user fa-lg"></i>
<span className="nav-text">Login</span>

</li>    */}

<li className="hover-menu">
  <a href="/">
  <i className="fa fa-user fa-lg"></i> <span className="nav-text">DRAFTS</span>
  </a>
</li>

<li className="hover-menu">
  <a href="/">
  <i className="fa fa-comments fa-lg"></i><span className="nav-text">MESSAGES</span>
  </a>
</li>
<li className="hover-menu">
  <a href="/">
  <i className="fa fa-cog fa-lg"></i> <span className="nav-text">SETTING</span>
  </a>
</li> 
</ul>
</div>
</div> 
      </nav>
      <div id="mySidenav" className="sidenav">
        {/* <a href="javascript:void(0)" className="closebtn"></a> */}
       <i className="fa fa-dashboard fa-lg" style={{paddingLeft: '30px',fontSize:'20px'}}></i>
       <i className="fa fa-search" style={{paddingLeft: '30px',fontSize:'20px'}}></i>
        <i className="fa fa-envelope" style={{paddingLeft: '30px',fontSize:'20px'}}></i>
        <i className="fa fa-globe" style={{paddingLeft: '30px',fontSize:'20px'}}></i>
        <i className="fa fa-trash" style={{paddingLeft: '30px',fontSize:'20px'}}></i>
      </div>



      <nav className="main-menu1" id='mynav1'  style={{display:'none'}}>
  
  <div className="nav-side-menu1">
 
  <div className='header col-md-12' style={{verticalAlign:'middle'}}>
  <img src={imglogo} className="sideImg pt-2" style={{fontSize:'12px'}} alt='' />
  {/* <i  className="fa fa-bars fa-2x toggle-btn1 mr-5 pb-3" onClick={this.mynav} ></i>
   */}
       
     
      </div>
   
     
{/* <div className="settings"></div> */}
<div className="scrollbar " id="style-1">

<ul className="iconbaar1">

<li className="active hover-menu">
  <a href="/">
  <i className="fa fa-dashboard fa-lg"></i><span className="nav-text">DASHBOARD</span>
  </a>
</li>

{/* <li>                                  */}

{/* <i className="fa fa-user fa-lg"></i>
<span className="nav-text">Login</span>

</li>    */}

<li className="hover-menu">
  <a href="/">
  <i className="fa fa-user fa-lg"></i> <span className="nav-text">DRAFTS</span>
  </a>
</li>

<li className="hover-menu">
  <a href="/">
  <i className="fa fa-comments fa-lg"></i><span className="nav-text">MESSAGES</span>
  </a>
</li>
<li className="hover-menu">
  <a href="/">
  <i className="fa fa-cog fa-lg"></i> <span className="nav-text">SETTING</span>
  </a>
</li> 
</ul>
</div>
</div> 
      </nav>
    
      <nav className="main-menu3" id='mynav3'  style={{display:'none'}}>
  {/* <i className="fa fa-bars fa-2x toggle-btn" onclick={openNav()} ></i>  */}
  <div className="nav-side-menu">
 
  <div className='header col-md-12' style={{verticalAlign:'middle',height:'50px'}}>
  <span style={{fontSize:'15px',fontWeight:'bold',marginTop:'55px'}}>SHS</span>
  <i  className="fa fa-bars fa-2x toggle-btn1 mr-5" onClick={this.mynav} ></i>
  
       
     
      </div>
      <div id='userImage' className="user-img1 col-md-12"  styel={{backgroundColor:' #1e2128;'}}><img src={imglogo} className='userImage' alt=''/></div>
   
      <div id='brand' className="brand col-md-12" style={{display:'none'}}>
    <div className="col-md-12 d-flex justify-content-center">
    <div className="logo col-md-6 pt-3">SHS</div>
      </div>

      <div className="col-md-12 d-flex justify-content-center">
       <div className="name col-md-12 pt-2 ">Charlie <span>Adams</span></div>
      </div>

      <div className="col-md-12 d-flex justify-content-center">
    <div className="email col-md-12">adams.charlie@mail.com</div>
      </div>
      <div className="col-md-12 d-flex justify-content-center">
    <div className="user-img col-md-12"><img src={imglogo} alt='' /></div>
      </div>

  </div>
<div className="settings"></div>
<div className="scrollbar " id="style-1">

<ul className="">

<li className="active">
  <a href="/">
  <i className="fa fa-dashboard fa-lg"></i><span className="nav-text">DASHBOARD</span>
  </a>
</li>

{/* <li>                                  */}

{/* <i className="fa fa-user fa-lg"></i>
<span className="nav-text">Login</span>

</li>    */}

<li className="">
  <a href="/">
  <i className="fa fa-user fa-lg"></i> <span className="nav-text">DRAFTS</span>
  </a>
</li>

<li className="">
  <a href="/">
  <i className="fa fa-comments fa-lg"></i><span className="nav-text">MESSAGES</span>
  </a>
</li>
<li className="">
  <a href="/">
  <i className="fa fa-cog fa-lg"></i> <span className="nav-text">SETTING</span>
  </a>
</li> 
</ul>
</div>
</div> 
      </nav>
   
</div>
        )
    }
}

export default index
