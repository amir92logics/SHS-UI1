import React from 'react';
import ReactDOM from 'react-dom';
// import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
// import 'bootstrap/dist/css/bootstrap.min.css';
import  'jquery';
import 'popper.js';
// import 'bootstrap/dist/js/bootstrap.bundle.min';
import { Route, BrowserRouter as Router } from 'react-router-dom'
import Login from './Secens/Login'
import SPsignup from './Secens/SPsignup'
import Aboutus from './Secens/AboutUs'
import Blog from './Secens/Blog'
import HowItWorks from './Secens/HowItWorks'
import CustomerSignup from './Secens/CustomerSignup'
import BasicInfo from './Component/Basic_info'
import SP_TechnicalInfo from './Component/Technical-info'
import SP_ContractType from './Component/Contract-type'
import SelectSignup from './Secens/SignUpSlect';
import { CookiesProvider } from 'react-cookie';
import {Provider} from 'react-redux';
import configureStore  from './store';
import NewFeeds from './Component/NewFeeds';
import Dashboard from './Component/Dashboard';
import NewProject from './Component/Dashboard/Projects/AddNewProject'; 
import ProjectTechnicalInfo from './Component/Dashboard/Projects/ProjectTechnicalInfo';
import ProjectType from './Component/Dashboard/Projects/ProjectType';
import MakeBid from './Component/makeBid';
import MyProject from './Component/Dashboard/myproject'; 
// import Bid from './Component/bid';
// import Bidding from './Component/bidding';
import ProjectInfo from './Component/NewFeeds/projectinfo'


const store = configureStore()

// import store from './store.js'
// const initialState = {};
// const store = configureStore(initialState, browserHistory);
// const store = createStore(rootReducer, initialStore);
const routing = (
  <CookiesProvider>

    <Router >
    <Provider store={store}>
      <div>
        <Route exact path='/' component={App}/>
        <Route path='/CustSignup' component={CustomerSignup}/>
        <Route path='/SP_TechnicalInfo' component={SP_TechnicalInfo}/>
        <Route path='/basicInfo' component={BasicInfo}/>
        <Route path='/SP_ContractType' component={SP_ContractType}/>
        <Route path='/newfeeds' component={NewFeeds}/>
        <Route path='/dashboard' component={Dashboard}/>
        <Route path='/addnew' component={NewProject}/>
        <Route path='/makebid' component={MakeBid}/>  
        <Route path='/myproject' component={MyProject}/>
        {/* <Route path='/bid' component={Bid}/>  
        // <Route path='/bidding' component={Bidding}/>   */}
        <Route path='/projectInfo' component={ProjectInfo}/>
        <Route path='/projectTechnicalInfo' component={ProjectTechnicalInfo}/>
        <Route path='/projectType' component={ProjectType}/>

        <Route path='/Login' component={Login}/>
        <Route path='/spsingup' component={SPsignup}/>
       <Route path='/about' component={Aboutus}/>
        <Route path='/blog' component={Blog}/>
        <Route path='/howitwork' component={HowItWorks}/> 
        <Route path='/choose-signup' component={SelectSignup} />
      </div>
      </Provider>
    </Router>
   
    </CookiesProvider>
  )
ReactDOM.render(routing , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
