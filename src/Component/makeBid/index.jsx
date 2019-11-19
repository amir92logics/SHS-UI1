import React, { Component } from 'react'
import $ from 'jquery';
import './index.css';
export default class index extends Component {

  constructor(props) {
    super(props)
    this.state={
    bidPrice: '',
    paymentTerms: '',
    comments: '',
    startDate: '',
    endDate: '',
    isChecked1: true,
    isChecked2: false,
    checkboxData: '',
    day: '',
    month: '',
    year: '',
    bidPriceLabel: '',
    paymentTermsLabel: '',
    commentsLabel: '',
    startDateLabel: '',
    endDateLabel: '',
    dayLabel: '',
    monthLabel: '',
    yearLabel: ''
    }
    this.bidPrice= this.bidPrice.bind(this);
    this.paymentTerms= this.paymentTerms.bind(this);
    this.comments= this.comments.bind(this);
    this.handleChecked1= this.handleChecked1.bind(this);
    this.handleChecked2= this.handleChecked2.bind(this);
    this.day= this.day.bind(this);
    this.month= this.month.bind(this);
    this.year= this.year.bind(this);
    this.makebid= this.makebid.bind(this);
  }
 
bidPrice=(e)=>{
  this.setState({
    bidPrice: e.target.value
  })
}

paymentTerms=(e)=>{
  this.setState({
    paymentTerms: e.target.value
  })
}
comments=(e)=>{
  this.setState({
    coments: e.target.value
  })
}
startDate=(e)=>{
  this.setState({
    startDate: e.target.value
  })
}
endDate=(e)=>{
  this.setState({
    endDate: e.target.value
  })
}
handleChecked1 (e) {
  this.setState({
    isChecked1: true,
    isChecked2: false,
    checkboxData: e.target.value,
  });
// console.log.(this.state.checkboxData)
}
handleChecked2 (e) {
  this.setState({
    isChecked1: false,
    isChecked2: true,
    checkboxData: e.target.value,
  });
// console.log(this.state.checkboxData)
}
day (e) {
  this.setState({
    day: e.target.value,
  });

}
month (e) {
  this.setState({
    month: e.target.value,
  });

}
year (e) {
  this.setState({
    year: e.target.value,
  });

}
makebid = (e) => {
  
  const {bidPrice, paymentTerms, comments, startDate, endDate, day, month, year} = this.state;
  e.preventDefault();
  this.setState({
    loading:true,
    submitDisabled:true
  })
  // const =this.state.{Fname,Lname,email,password, confirmPassword}
  if(bidPrice === '' || paymentTerms === '' || comments === '' || startDate === '' || endDate === '' || day === '' || month === '' || year === '') 
  {  
  if (bidPrice==="") {
    // $(this.refs['fname']).focus();
    this.setState({
      bidPriceLabel:!this.state.bidPriceLabel,
      loading:false,
      submitDisabled:false
    })
}
if (paymentTerms==="") {
  // $(this.refs['lname']).focus();

  this.setState({
    paymentTermsLabel:!this.state.paymentTermsLabel,
    loading:false,
    submitDisabled:false
  })
}
if (comments==="") {
// $(this.refs['email']).focus();

this.setState({
  commentsLabel:!this.state.commentsLabel,
  loading:false,
  submitDisabled:false
})
}
if (startDate==="") {
// $(this.refs['phone']).focus();

this.setState({
  startDateLabel:!this.state.startDateLabel,
  loading:false,
  submitDisabled:false
})
}
if (endDate==="") {
// $(this.refs['username']).focus();

this.setState({
  endDateLabel:!this.state.endDateLabel,
  loading:false,
  submitDisabled:false
})
}
if (day==="") {
// $(this.refs['password']).focus();

this.setState({
  dayLabel:!this.state.dayLabel,
  loading:false,
  submitDisabled:false
})
}
if (month==="") {
// $(this.refs['confirmpassword']).focus();

this.setState({
  monthLabel:!this.state.monthLabel,
  loading:false,
  submitDisabled:false
})
}
if (year==="") {
// $(this.refs['id']).focus();

this.setState({
  yearLabel:!this.state.yearLabel,
  loading:false,
  submitDisabled:false
})
}
  }
else{
console.log('data submitted')
}

}

    render() {
      // $(document).ready(function(){
    
      //   $(".col-md-6 input").val("");
        
      //   $(".input-effect-bidding input").focusout(function(){
      //     if($(this).val() != ""){
      //       $(this).addClass("has-content");
      //     }else{
      //       $(this).removeClass("has-content");
      //     }
      //   })
      // });
        return (
            <div>
                 <section >

          
        
    
     
<div className="col-md-12 pb-5 d-flex justify-content-center">

    <div className="col-md-8 mt-5  d-flex justify-content-center main-bid-form" >
     <form onSubmit={this.makebid}>

      <div className="col-md-12">
        <div className="row">
          <div className="col-md-6">
            {/* <div className="col-md-12 input-effect-bidding mt-5">
            <label className="label" >First Name</label>
            <input className="effect-16-bidding bidding" type="text" placeholder=""/>
            <span className="focus-border-bidding"></span>
          </div> */}
          <div className="col-md-12 input-effect-bidding mt-5">
            <label className="label" >BID PRICE</label>
            <input className="effect-16-bidding bidding" autoFocus={true} type="text" placeholder="" onChange={this.bidPrice} value={this.state.bidPrice}/>
            {this.state.bidPriceLabel?<label className="text-danger">First name required.</label>:null}
           
            {/* <span className="focus-border-bidding"></span> */}
          </div>
          <div className="col-md-12 input-effect-bidding mt-5 pt-0 pl-3">
            <h4 className="h4">Payment Terms</h4>
            
          </div>
          <div className="col-md-12 input-effect-bidding mt-5 row">
            <div className="col-md-6"><input type="radio" value='add term' onChange={ this.handleChecked1 } checked={this.state.isChecked1} />ADD TERM</div>
            <div className="col-md-6"><input type="radio" value='percentage' onChange={ this.handleChecked2} checked={this.state.isChecked2}/>PERCENTAGE</div>
            
            </div>
          <div className="col-md-12 input-effect-bidding mt-4 ">
            
            <textarea name="" id="" cols="40" rows="5" onChange={this.paymentTerms} value={this.state.paymentTerms}></textarea>
            {this.state.paymentTermsLabel?<label className="text-danger">First name required.</label>:null}            
            {/* <span className="focus-border-bidding"></span> */}
            </div>
          </div>
          <div className="col-md-6">
            <div className="col-md-12 input-effect-bidding mt-5 pt-4 pl-2">
            <h4 className="h4">Validity Days</h4>
            
          </div>
          <div className="col-md-12 row">
          <div className="col-md-6 input-effect-bidding mt-5 ">
            <label className="label" >START DATE</label>
            <input className="effect-16-bidding bidding" ref="startDate"  type="date" onChange={this.startDate} value={this.state.startdate}/>
             {this.state.startDateLabel?<label className="text-danger">First name required.</label>:null}
            {/* <span className="focus-border-bidding"></span> */}
            </div>
            <div className="col-md-6 input-effect-bidding mt-5">
            <label className="label" >END DATE</label>
           <input className="effect-16-bidding" ref="endDate" type="date"  onChange={this.endDate} value={this.state.enddate}/>
           {this.state.endDateLabel?<label className="text-danger">First name required.</label>:null}
            {/* <span className="focus-border-bidding"></span> */}
          </div>
          <div className="col-md-12 input-effect-bidding mt-5  pl-3">
            <h4 className="h4">Completion Time</h4>
            
          </div>
          <div className="col-md-12 input-effect-bidding row">
           <div className="col-md-4 input-effect-bidding mt-4 ">
            <label className="label" >DAY</label>
            <input className="effect-16-bidding bidding" type="text" onChange={this.day} value={this.state.day}/>
            {this.state.dayLabel?<label className="text-danger">First name required.</label>:null}
            {/* <span className="focus-border-bidding"></span> */}
            </div>
            <div className="col-md-4 input-effect-bidding mt-4 ">
            <label className="label" >MONTH</label>
            <input className="effect-16-bidding" type="text" onChange={this.month} value={this.state.month}/>
            {this.state.monthLabel?<label className="text-danger">First name required.</label>:null}
            {/* <span className="focus-border-bidding"></span> */}
            </div>
            <div className="col-md-4 input-effect-bidding mt-4 ">
            <label className="label" >YEAR</label>
            <input className="effect-16-bidding bidding" type="text" onChange={this.year} value={this.state.year}/>
            {this.state.yearLabel?<label className="text-danger">First name required.</label>:null}
            {/* <span className="focus-border-bidding"></span> */}
            </div>
            
            </div>
          </div>

          </div>
          <div className="col-md-12 input-effect-bidding mt-4 pl-3">
            <h4 className=" pb-4 pl-3">Comments</h4>
            <textarea  name="" id="textarea" onChange={this.comments} value={this.state.comments}></textarea>
            <span className="focus-border-bidding"></span>
            </div>
        </div>
      </div>


       
      
       
      
      
       <div class="col-md-12 col-12 mb-5">
          <div class=" row d-flex justify-content-center">
          <div class="col-md-6 col-6 mt-5 attach">
            <button className='button' type='submit' >Place Bid</button>
          </div>
     
         </div>
       </div>

       
     </form>
    </div>
  </div>
{/* </div> */}



  
</section>

                
            </div>
        )
    }
}
