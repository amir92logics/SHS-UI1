import React, { Component } from 'react';
import $ from 'jquery';
// import '@trendmicro/react-sidenav/dist/react-sidenav.css';
import "./index.css";
import {Link } from 'react-router-dom';
import Footer from '../../../Footer'
import Navbar from '../navbar';
// import ok from '../../../images/images-info/ok.png';
import DatePicker from "react-datepicker";
// import "react-datepicker/dist/react-datepicker.css";
// import { throwStatement } from '@babel/types';
// import { threadId } from 'worker_threads';
import ProjectType from '../ProjectType';
// import moment from 'moment';


class index extends Component {
    constructor(props) {
        super(props)
        this.state={
          toggle : true,
          scrollTop: 0,
          startDate:"",
          endDate: "",
          description: '',
          length: '',
          bodies: '',
          startDateError:false,
          endDateError: false,
          endDateShowError: '',
          startDateShowError: '',
          loading: false,
          errormessage:false,
          success:false,
          submitDisabled:false,
          bodiesError:false,
          descriptionError: false,
          lengthError: false,
          file: '',
          fileError: '',
          // currentDate:moment().format("L"),
          // dateContext:moment(),
          projectInfo : false,

        
        }
        // this.resultsDiv = React.createRef();
        this.startDateHandle = this.startDateHandle.bind(this);
        this.addNewProject = this.addNewProject.bind(this);
        this.endDateHandle = this.endDateHandle.bind(this);
        this.descriptionHandle = this.descriptionHandle.bind(this);
        this.lengthHandle = this.lengthHandle.bind(this);
        this.bodiesHandle = this.bodiesHandle.bind(this);
        this.fileHandler = this.fileHandler.bind(this);
        
        this.attach = this.attach.bind(this);

        


        // this.resultsDiv = React.createRef();
      }
      // componentWillMount(){
      //   this.attach();
      // }
      startDateHandle = e => {
        this.setState({
          startDate: e.target.value,
          startDateError: false
        });
      };
      endDateHandle = e => {
        this.setState({
          endDate: e.target.value,
          endDateError: false
        });
        $(this.refs['endDate']).css(
          {border: 0,
             padding: '4px 0',
              'border-bottom': '1px solid #fff',
               'background-color': 'transparent'
          }
        );
      };
      descriptionHandle = e => {
        this.setState({
          description: e.target.value,
          descriptionError: false
        });
      };
      lengthHandle = e => {
        this.setState({
          length: e.target.value,
          lengthError: false
        });
      };
      bodiesHandle = e => {
        this.setState({
          bodies: e.target.value,
          bodiesError: false
        });
      };
      fileHandler = e => {
        this.setState({
          file: e.target.value,
          fileError: false
        });
      };

      addNewProject=(e)=>{
       e.preventDefault();
     

       this.setState({
        loading:true,
        submitDisabled:true
      })
      // console.log(this.state.startDate)
      var q = new Date();
      var m = ('0' + (q.getMonth()+1)).slice(-2);
      // var d = ('0' +( q.getDay()-1)).slice(-2);
      var d = ('0' + (this.state.dateContext.format("D")-1)).slice(-2);

      var y = q.getFullYear();
      
      var currentDate = y+"-"+m+"-"+d;
      console.log(d)
      console.log("start: "+this.state.startDate+ " current: "+currentDate);
    //  if (this.state.startDate === '') {
    //   // console.log('date '+this.state.startDate)

    //     $(this.refs['startDate']).focus();
    //     // $('.focus-border').attr('className','.focus-border1');
    //     this.setState({
    //       startDateError: !this.state.startDateError,
    //       startDateShowError: "Start date required",
    //       loading: false,
    //       submitDisabled: false
    //     })
    //   }
      
     
           if (this.state.startDate < currentDate) {
            console.log('date '+this.state.startDate)
      
              $(this.refs['startDate']).focus();
              $(this.refs['startDate']).css(
                {border: 0,
                  width: "100%",
                   padding: '4px 0',
                    'border-bottom': '2px solid rgb(250, 4, 4)',
                     'background-color': 'transparent'
                }
              );
                this.setState({
                startDateError: !this.state.startDateError,
                startDateShowError: "Start date must be greater than or equal to current date.",
                loading: false,
                submitDisabled: false
              })
            }
      // else if (this.state.endDate === "") {
      //   $(this.refs['endDate']).focus();
      //   // $('.focus-border').attr('className','.focus-border1');
      //   this.setState({
      //     endDateError: !this.state.endDateError,
      //     loading: false,
      //     endDateShowError:  "End date  required",
      //     submitDisabled: false
      //   })
      // }
       else if(this.state.startDate > this.state.endDate){
          console.log("End date should be greater than start date")
          $(this.refs['endDate']).focus();
        $(this.refs['endDate']).css(
          {border: 0,
            width: "100%",
             padding: '4px 0',
              'border-bottom': '2px solid rgb(250, 4, 4)',
               'background-color': 'transparent'
          }
        );
        this.setState({
          endDateError: !this.state.endDateError,
          loading: false,
          submitDisabled: false,
          endDateShowError:'End date must be greater than start date'
        })
        }
        // else if (this.state.description === "") {
        //   $(this.refs['description']).focus();
        //   $(this.refs['des-border']).css(
        //     {border: 0,
        //       width: "100%",
        //        padding: '4px 0',
        //         'border-bottom': '2px solid rgb(250, 4, 4)',
        //          'background-color': 'transparent'
        //     }
        //   );
        //    this.setState({
        //     descriptionError: !this.state.descriptionError,
        //     loading: false,
        //     submitDisabled: false
        //   })
        // }
        // else if (this.state.length === "") {
        //   $(this.refs['length']).focus();
        //   // $('.focus-border').attr('className','.focus-border1');
        //   this.setState({
        //     lengthError: !this.state.lengthError,
        //     loading: false,
        //     submitDisabled: false
        //   })
        // }
        // else if (this.state.bodies === "") {
        //   $(this.refs['bodies']).focus();
        //   // $('.focus-border').attr('className','.focus-border1');
        //   this.setState({
        //     bodiesError: !this.state.bodiesError,
        //     loading: false,
        //     submitDisabled: false
        //   })
        // }
        // else if (this.state.file === "") {
        //   $(this.refs['file']).focus();
        //   // $('.focus-border').attr('className','.focus-border1');
        //   this.setState({
        //     fileError: !this.state.fileError,
        //     loading: false,
        //     submitDisabled: false
        //   })
        // }
        else{
          this.setState({
            success: true,
            projectInfo: !this.state.projectInfo
          })
          // alert("data entered successfully!!!!")
        }
      }
      attach=(e)=>{
      
      e.preventDefault();
      $('.attach').click(function() {
        $('#fileInput').click();
      });
      }
      currentDay=()=>{
        return this.state.dateContext.format("D");
        }
         render(){
          var q = new Date();
          var m = ('0' + (q.getMonth()+1)).slice(-2);
          var d = ('0' + this.state.dateContext.format("D")).slice(-2);
    
          var y = q.getFullYear();
          
          var currentDate = y+"-"+m+"-"+d;
          this.currentDay();
      // console.log(typeof this.state.startDate)
          
          //  let mydate=new Date('2011-04-11');
          // // console.log(mydate);
          // // let currentDate = new Date();
          //  console.log('current date: '+)
          //  if(this.state.startDate> currentDate){
            //  console.log(currentDate);
          //  }        
             const {startDate, endDate, length, bodies, description} = this.state;
           if(this.state.success){
                  this.props.history.push('/projectType')
             return <ProjectType startDate={startDate} endDate={endDate} length={length} bodies={bodies} description={description} parentInfo={true} />
           }
        return (
            <div >
            
               <div className="bg-pt" id="basic-info">

<section className="sign-body pt-5">
  <Navbar/>

     {/* <div className="col-md-12 justify-content-center d-flex align-items-center">
       <div className="col-md-10 container row justify-content-center " >

         <div className="bubble-pt previous-pt">
           <LinK to='/'><i></i></LinK>
         </div>

         <div className="bubble-separator-pt"></div>
         <div className="bubble-pt previous1-pt">
             
         </div>

         <div className="bubble-separator2-pt"></div>
         <div className="bubble3-pt previous2-pt">

         </div>


       </div>

     </div>
     <div className="col-md-12 col-12 col-sm-12 col-lg-12  col-lg-12 col-xl-9 container justify-content-center d-flex align-items-center" >
       <div className="col-md-10 col-12 col-sm-6 col-lg-5 col-lg-4 col-xl-6 container row justify-content-center " style={{marginBottom: "40px"}}>

         <div className="bubble1-pt text col-md-2 col-2 col-sm-4 col-lg-4 col-lg-4">
           <p>Basic Info</p>
         </div>

         
         <div className="bubble4-pt text1 col-md-2 col-2 col-sm-4 col-lg-4 col-lg-4">
           <p>Project Info</p>
         </div>
         <div className="bubble2-pt text2 col-md-2 col-2 col-sm-4 col-lg-4 col-lg-4">
           <p>Technical Info</p>
         </div>





       </div>

     </div> */}
    
     <div className="col-md-12 pb-5" id="basic-info">

       <h2>ADD NEW PROJECT</h2>
       
         <div className="col-md-12  d-flex justify-content-center">
          <form onSubmit={this.addNewProject}>
            <div className="col-md-12 ">
               <div className="container row">
               <div className="col-md-5 input-effect mt-5">
                 <label>START DATE</label>
                 
                 <input id='input' className="effect-16" title={this.state.startDateShowError} ref="startDate" autoFocus={true} type="date" onChange={this.startDateHandle} value={this.state.startdate} required/>
                 {/* <span className="focus-border"></span><br/> */}
                 {/* {this.state.startDate ? <p className="text-danger">{this.state.startDateShowError}</p> : null} */}
                

               </div>
               <div className='col-md-2 mt-5'></div>
               <div className="col-md-5 input-effect mt-5">
                 <label>END DATE</label>
                 <input id='input' className="effect-16" title={this.state.endDateShowError} ref="endDate" type="date"  onChange={this.endDateHandle} value={this.state.enddate} required/>
                 {/* <span ref='border' className="focus-border"></span> */}
                 {/* {this.state.endDateError ? <p className="text-danger">{this.state.endDateShowError}</p> : null} */}

               </div>
               
              </div>
            </div>
            <div className="col-md-12 ">
               <div className="container row">
               <div className="col-md-12 input-effect mt-5">
                 <label>DESCRIPTION</label>
                 <input autocomplete="off" id='input' title='start date' className="effect-16" ref="description" type="text" onChange={this.descriptionHandle} value={this.state.description} required/>
                 <span ref='des-border' className="focus-border description"></span>
                 {/* {this.state.descriptionError ? <p className="text-danger">Project description required.</p> : null} */}

               </div>
              </div>
            </div>
            <div className="col-md-12">
               <div className="container row">
               <div className="col-md-5 input-effect mt-5">
                 <label>LENGTH</label>
                 <input autocomplete="off" id='input' className="effect-16" ref="length" type="text" onChange={this.lengthHandle} value={this.state.length} required/>
                 <span className="focus-border"></span>
                 {this.state.lengthError ? <p className="text-danger">Project Length required.</p> : null}

               </div>
               <div className='col-md-2 mt-5'></div>
               
               <div className="col-md-5 input-effect mt-5">
                 <label>BODIES</label>
                 <input autocomplete="off" id='input' className="effect-16" ref="bodies" type="text" onChange={this.bodiesHandle} value={this.state.bodies} required/>
                 <span className="focus-border"></span>
                 {this.state.bodiesError ? <p className="text-danger">Project bodies required.</p> : null}

               </div>
               
              </div>
            </div>
            <div className="col-md-12 col-12 mb-5">
               <div className="container row">
               <div className="col-md-6 col-12 mt-5">
                 {/* <label className='attach'  for="fileInput" onClick={this.attach}>ATTACH &nbsp;<i className="fa fa-paperclip"></i></label> */}
                 {/* <label for="fileInput" > */}
   <button ref='file' id="btn-basic-info" className='attach'  for="fileInput" onClick={this.attach}>ATTACH &nbsp;<i className="fa fa-paperclip"></i></button>
{/* </label> */}
<input type="file" style={{display: "none"}}  id="fileInput" onChange={this.fileHandler}  value={this.state.file} />
{/* // {this.state.fileError ? <p className="text-danger">Attachment required.</p> : null} */}
           
               </div>
               
               <div className="col-md-6 col-12  mt-5">
              
                 <button id="btn-basic-info" type='submit' disabled={this.state.submitDisabled}>
                   
                 {this.state.loading ? <div style={{ color: 'lightgrey' }}>Wait...</div> :<span> NEXT &nbsp;<i className="fal fa fa-long-arrow-right"></i></span>}
                   
                  </button>
                  
               </div>
               
              </div>
            </div>


            
          </form>
         </div>
       </div>
     {/* </div> */}



       
 </section>

</div>
<Footer/>

</div>
        )
    }
}

export default index
