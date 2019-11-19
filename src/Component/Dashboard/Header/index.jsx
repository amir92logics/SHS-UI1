import React, { Component } from 'react';
import cookie from 'react-cookies'
import SweetAlert from '@sweetalert/with-react';
import { connect } from 'react-redux'
import { tokenState } from '../../../actions/userAccessToken';
import imglogo from '../../../images/logo.png';
import './index.css';
import $ from 'jquery';
import decode from "jwt-decode";



class index extends Component {
    constructor(props) {
        super(props)
        this.state={
          toggle : true,
          scrollTop: 0,
          dropdown: true,
          currentUser: ''
        
        }
        // this.resultsDiv = React.createRef();
        this.dropdown = this.dropdown.bind(this)
        // this.mynav = this.mynav.bind(this)
        this.logout = this.logout.bind(this)

        // this.resultsDiv = React.createRef();
      }
      componentWillMount(){
        if (cookie.load('Token')) {

          let token = decode(cookie.load('Token'))
          //  console.log("cockies: "+token.sub)
          
        fetch('https://shsbackend.azurewebsites.net/api/services/app/User/Get?Id='+ token.sub)
        .then(res => res.json())
        .then(json => {
          if (json.success) {
            //  console.log(json.result)
            let user = json.result.name
        
          //  console.log("user: "+ user);
            this.setState({
            currentUser: user
            })
        
          }
        }).catch((error) => {
          // console.error(error);
        });
      }
      }
    logout=(e)=>{
        e.preventDefault()   ;   
                  // console.log('size');

  
      // this.props.history.push('/Login');
      SweetAlert("Are you sure you want to log out?", {
        buttons: {
          catch: {
            text: "Logout",
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
               this.props.accessToken('');
               window.location.reload();
            }
            break;
       
          default:
            SweetAlert("Got away safely!");
        }
      });
      
      // SweetAlert(
      //   <div className="alert alert-warning fade show">
      //      <h1> <strong>Log Out</strong></h1> 
      //   <p style={{fontSize:"30px"}}>Are you sure you want to log out?</p>
      //  { window.location.reload()}
      //     </div>
         
      // )
   

      // if(this.state.success){
      //      return <Redirect to="/home"/>

      // }
    }    
    dropdown=()=>{
    this.setState({dropdown:!this.state.dropdown})

    if(this.state.dropdown){
      // $ ('.userImage-header').hover(
      // function () {
                                $('.dropdown-content').css("display", "block")
                              }
                              // function () {
                                else{
                                $('.dropdown-content').css("display", "none")

                              }
      // )
                            }
                          // }
    render(){
      // console.log("userId: "+this.props.userId)
      $(window).resize(function (event) {
      if($(window).width()>500){
        $('#mySidenav1').css("display", "block")
      $('.right-items').css("padding-top", "0px")

    }
    else{
      $('#mySidenav1').css("display", "none")
      $('.right-items').css("padding-top", "30px")

      // right-items
    }
      })
     
    return(
      <div>
        <nav className="navbar navbar-expand  static-top" style={{ justifyContent:'space-between'}}>
        
<div id="mySidenav1" className="sidenav1 " style={{display:'none'}}>
{/* <button className="btn btn-link btn-sm text-white order-1 order-sm-0" id="sidebarToggle" href="#"> */}
{/* <i className="fa fa-bars " ></i> */}
{/* </button> */}
{/* <a href="javascript:void(0)" className="closebtn"></a> */}
<i className="fa fa-dashboard fa-lg" style={{paddingLeft: '50px '}}></i>
<i className="fa fa-search fa-lg" style={{paddingLeft: '20px '}}></i>
<i className="fa fa-envelope fa-lg" style={{paddingLeft: '20px '}}></i>
<i className="fa fa-globe fa-lg" style={{paddingLeft: '20px '}}></i>
<i className="fa fa-trash fa-lg" style={{paddingLeft: '20px '}}></i>
</div>
<div className='right-items'>
<i className="fa fa-bell fa-lg" style={{paddingRight: '10px '}}></i>
{/* <img src={imglogo} className='userImage-header' alt='' onClick={this.dropdown}/>
<div class="dropdown">
        
         <div class="dropdown-content">
      <a href="#">Profile</a>
      <a href="#">Inbox</a>
      <a href="#" onClick={this.logout}>Logout</a>
    </div>
 </div> */}
 <div class="container" style={{display: 'inline'}}>
<div class="dropdown">
<img src={imglogo} className='userImage-header dropdown-toggle' alt='' id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"/>
  {/* <button class="btn btn-primary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
    Dropdown button
  </button> */}
  <div class="dropdown-menu" style={{top:"25px"}} aria-labelledby="dropdownMenuButton">
    <a class="dropdown-item" href="#">Profile</a>   
       <a class="dropdown-item" href="#" onClick={this.logout}>Logout</a>

  </div>
</div>
</div>
    
<p className='welcome-msg' style={{paddingRight: '30px ',paddingLeft:'5px',fontSize: '10px', fontWeight: 'bold'}}>Hi <span>{this.state.currentUser}</span></p>

{/* // { this.state.success?<Redirect to="/Login"/>:null} */}
  </div>
{/* <button class="dropbtn">Dropdown</button> */}

</nav>

  
    </div>
        
    )
}
}
const mapStateToProps = state => {

  return {
    Token: state.places.Token,
    userId: state.places.userId,
  }
}

const mapDispatchToProps = dispatch => {
  return {
  
    accessToken: (value) => {
      dispatch(tokenState(value))
    },

  }
}
export  default connect(
  mapStateToProps,
  mapDispatchToProps
)(index);