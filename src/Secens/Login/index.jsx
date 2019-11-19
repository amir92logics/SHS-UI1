import React, { Component } from 'react'
import './index.css'
import Header from '../../Component/Header'
import { connect } from 'react-redux'
import { Link, Redirect,browserHistory } from 'react-router-dom'
import { tokenState } from '../../actions/userAccessToken';
import { userIdState } from '../../actions/userId';
import $ from 'jquery';

import cookie from 'react-cookies'
import SweetAlert from '@sweetalert/with-react';
// import Dashboard from '../../Component/Dashboard'
class index extends Component {
  constructor(props){

    super(props);
    this.state={
      loading: false,
     
      email:"",
      password:"",
      Token:'',
      errormessage:false,
      success:false,
      alert: false,
      login:false,
      emailLabel:false,
      userId: '',
      passwordLabel:false,
      next: false,
    }
    this.userLogin = this.userLogin.bind(this);
    this.hideAlert = this.hideAlert.bind(this);

  }
  componentWillUnmount(){
    // console.log("Login unmounted")
  }
componentWillMount(){
  // console.log('googtrans= '+cookie.load('googtrans'))
  // $(this.refs['email']).scrollIntoView(true)
  this.setState({ Token: cookie.load('Token') })
  this.setState({
    login:true
  })
}

  onEmailChange=(e)=>{
    let email= e.target.value.split(' ').join('');
    this.setState({
      email:email,
      emailLabel:false
    })
  }
  onPasswordChange=(e)=>{
    // let Lname= e.target.value.split(' ').join('');
    this.setState({
      password:e.target.value,
      passwordLabel:false
    })
  }

  userLogin = (e) => {
    const {email, password} = this.state;
    e.preventDefault();
    this.setState({
      loading:true,
      submitDisabled:true
    })
    // const =this.state.{Fname,Lname,email,password, confirmPassword}
   
if (this.state.email==="") {
  this.setState({
    emailLabel:!this.state.emailLabel,
    loading:false,
    submitDisabled:false
  })
}

else if (this.state.password==="") {
  this.setState({
    passwordLabel:!this.state.passwordLabel,
    loading:false,
    submitDisabled:false
  })
}

  else {
      // make API call
      // console.log(email)
      // this.props.accessToken(email);
      // cookie.save('Token', email)
            // this.props.accessToken(token.accessToken);
            // this.setState({
            //   next: true
            // })
              // this.props.history.push('/dashboard');
  
      fetch('https://shsbackend.azurewebsites.net/api/TokenAuth/Authenticate', {
        method: 'post',
        // redirect: 'follow',
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json",
      },
        mode: 'cors', 
       
        body: JSON.stringify(
          {
           
          
            "userNameOrEmailAddress": email,
            "rememberClient": true,
           
            "password": password
          }
        )
    }) .then(function (response) {
        return response.json(); //response.json() is resolving its promise. It waits for the body to load
    }).then((responseData)=> {
      if(!responseData.success){
       
        
        // console.log(responseData.error.message)
        this.setState({
          errormessage:responseData.error.details,
          success:false
        })
        SweetAlert(
          <div style={{color: 'red'}}>
          <h1> <strong>Error!</strong></h1>
          <p style={{ fontSize: "20px" }}>{this.state.errormessage}</p>
        </div>
        )
        this.setState({

          email:'',
        
          password:'',
          submitDisabled: false   ,
          
          
          errormessage: false,
          success:responseData.success,
          loading: false
        })
      }
      if(responseData.success===true){
      let token = responseData.result;
      // console.log(responseData);
this.setState({
  success:responseData.success,
  Token:token,
  userId: token.userId
})
      cookie.save('Token', token.accessToken)
      this.props.accessToken(token.accessToken);
      this.props.add2(token.userId);
// return <Redirect to="/register"/>
      // return <Link to='/dashboard' />
      // window.location.reload();
      this.props.history.push('/dashboard');
       

  //  alert(responseData);
//  this.deleteThisGoal();
// SweetAlert(
//    <div className="alert alert-success alert-dismissible fade show">
//                            <h1> <strong>Success!</strong></h1> 
//                             <p style={{fontSize:"30px"}}><strong>Congrats!</strong> Login successful...</p>
                           
//                         </div>
// )
  
      // return <Dashboard Token={this.state.Token} />
     
      }
    },
    (error) => {
      // console.log(error)
      // this.setState({

      //   errormessage:error,
      // });
    }).catch(error=>{
      // console.log(error)
    });
  }
}
deleteThisGoal() {
  const getAlert = () => (
    <SweetAlert 
      success 
      title="Woot!" 
      onConfirm={() => this.hideAlert()}
    >
      Hello world!
    </SweetAlert>
  );

  this.setState({
    alert: getAlert()
  });
}

hideAlert() {
  // console.log('Hiding alert...');
  this.setState({
    alert: false
  });
}
cursorFocus = (elem)=> {
  var x = window.scrollX, y = window.scrollY;
  window.scrollTo(x, y);
  $(this.refs['email']).focus();
}
  render() {
// this.cursorFocus(document.getElementById('divFirst'));
// $('input').focus(function () {
//   $('html, body').animate({
//       scrollTop: $(this).offset().top + 'px'
//   }, 'fast');
// $("#divFirst").focus(
// $ ('.main-menu').hover(
  // $('html, body').animate({ scrollTop: 50000 }, "slow")
  // return false;
    // $(this.refs['email']).focus();
  // )
  // $(window).scrollTop($('input').offset().top) 
  /*
  $form = $(this).closest('form');
  $field = $(this);
  // Accounts for positioning inside of scrollable elements
  var scroll = $form.scrollTop() + ($field.position().top - $form.position().top) - ($form.height() / 2) + ($field.height() / 2);

  $('form').animate({
      scrollTop: scroll + 'px'
  }, 'fast');
  */
// });
    // document.getElementById("divFirst").scrollIntoView(true);
    if(cookie.load('googtrans')==='/en/ar')
    {alert("Arabic")}
    // this.props.add1('token.accessToken');
    // this.props.accessToken("malik");
    // this.props.Token
    // console.log("Login "+this.props.Token)
    // console.log(this.state.success)

    // // this.props.add1("malik");
    if (cookie.load('Token')) {
      // return <LoginPanel onSuccess={this.onLogin} />
      // return <Dashboard />
        this.props.history.push('/dashboard');

    }
 
   
    return (

      <div className="bg-login">
 <Header login={this.state.login}/>
        <section>

          {/* <div className="container pb-3 pt-2 animated bounceIn"> */}
          <div className="container pb-3 pt-2">

            <div className="row container col-md-12 col-12  main-login ml-1">

              <div className="col-md-6 col-12 left-side">
                <div className="col-md-12 login" >
                  <div className="triangle-left"></div>
                  <h3 className="text-uppercase">Sign In</h3>

                </div>
            

                <Link to="/choose-signup">
                  <div className="col-md-12 sign-up">

                    <h3 className="text-uppercase">Sign Up</h3>

                  </div>
                
                </Link>
              </div>
              <div className="col-md-6 col-12 left-side1">
                <Link to="/choose-signup">
                  <div className="col-md-12 sign-up1">
                    <h3 className="text-uppercase">Sign Up</h3>

                  </div>
               
                </Link>
               
                <div className="col-md-12  login1">

                  <h3 className="text-uppercase">Log in</h3>
                  <div className="triangle-left1"></div>

                </div>


              </div>
              <div className="col-md-6 right-side">
                <h1 ><strong style={{ color: '#203957'}}>S<span style={{ color: '#88bdef'}}>H</span>S</strong></h1>
                <span style={{ color: '#000'}}><h4>Sign in to SHS</h4></span>
                <form>
               
                             {/* {this.state.success? 
                        ( )
                            :null} */}
                  <div className="form-group">
                    <label style={{ fontSize: "25px" }}>Email <span style={{color:"#203957"}}>*</span></label>
                    <input type="text" autocomplete="off" autoFocus={true} ref='email' className="login-email form-control" id='divFirst' placeholder=" Enter your email or username" value={this.state.email} onChange={this.onEmailChange}/>
                    {this.state.emailLabel?<label className="text-danger">Email Or username required.</label>:null}
                  </div>
                  <div className="form-group">
                    <label style={{ fontSize: "25px" }}>Password <span style={{color:"#203957"}}>*</span></label>
                    <input type="password" className="form-control login-pass" placeholder="Password" value={this.state.password} onChange={this.onPasswordChange}/>
                    {this.state.passwordLabel?<label className="text-danger">Password required.</label>:null}
                  </div>
                  {/* <div className="form-group "> */}
                    <div className="container row col-md-12 col-12 col-sm-12 col-lg-12 col-xl-12 btnForgetPwd">

                      <div className="col-md-12 col-12 col-sm-12 col-lg-8 col-xl-6">

                        <label className="check checkbox">Remember me
                           <input type="checkbox" name="is_name" />
                          <span className="checkmark"></span>
                        </label>
                      </div>


                      <div className="col-md-8 col-9  col-sm-5 col-lg-8 col-xl-6">

                        <a href="/" className="forgot float-right" value="Login">Forgot Password ?</a>
                      </div>


                    </div>
                 
                    <div className="form-group col-md-12 mt-5 text-center" onClick={this.userLogin} disabled={this.state.submitDisabled}>
                    {this.state.loading?<input type="submit" className="btSnubmit" value="Wait..." />: <input value="save" name="save" type="submit" className="btSnubmit" value="Sign In" />}
                    {/* { this.state.success?<Redirect to="/dashboard"/>:null} */}
                    </div>
                    <div className="form-group col-md-12 mt-3 text-center user">
                      <span>New User?</span><Link to="/choose-signup">&nbsp;Sign Up</Link>
                    </div>

</form>
</div>

              </div>
            </div>
</section>
{/* <Footer/> */}
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
const mapDispatchToProps = dispatch => {
  return {
  
    accessToken: (value) => {
      dispatch(tokenState(value))
    },
    add2: (value) => {
      dispatch(userIdState(value))
    },

  }
}
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(index);
   