import React, { Component } from 'react'
import './index.css'
import Header from '../../Component/Header'
import Footer from '../../Component/Footer'

import img_bg_4 from '../../images/img_bg_4.jpg';
import building_1 from '../../images/building-1.jpg';
import building_4 from '../../images/building-4.jpg';

export default class index extends Component {
    render() {
        return (
            <div className='body'>







<aside id="colorlib-hero">

<div class="flexslider">
<ul class="slides">
<li class="how-it-work-top-li li" style={{backgroundImage: 'url('+img_bg_4+')'}}>
<Header />

<div class="overlay"></div>
<div class="container-fluid">
<div class="row" style={{textAlign: 'center', display: 'block'}}>
<div class="col-md-8 col-sm-12 col-md-offset-2 slider-text">
<div class="slider-text-inner text-center">
<h1 class="how-it-work-top-h1">HOW IT WORK</h1>
<h2 class="how-it-work-top-h2">Providing all Kinds of Construction Services</h2>
<button class="btn-how-it-work-started">GET STARTED</button>
</div>
</div>
</div>
<div>
	
</div>
</div>
</li>

</ul>
</div>
</aside>
<div id="colorlib-intro1">
<div class="container">
<div class="row">
<div class="col-md-12 tabulation animate-box">
<ul class="nav nav-tabs ">
	<li class="how-it-work-li"></li>
<li class="border-how-it-work how-it-work-li active"><a data-toggle="tab" href="#plan" class="how-it-work-li-a">If You'r Customer</a></li>
<li class="how-it-work-li"><a data-toggle="tab" href="#modeling" class="how-it-work-li-a"> If You'r Service Provider</a></li>
</ul>
<div class="tab-content">
<div id="plan" class="tab-pane fade in active">
<div class="row">
<div class="col-md-6">
<div class="services-how-it-work"  style={{backgroundImage: 'url('+building_1+')'}}></div>
</div>
<div class="col-md-6">
<div class="services-how-it-work">
<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore, labore porro iste libero. Ad, placeat, doloremque. Voluptate rem molestias ad, vero delectus necessitatibus, cumque voluptatibus dignissimos reiciendis officiis ab tenetur.</p>

</div>
</div>
</div>
</div>


<div id="modeling" class="tab-pane fade">
<div class="row">
<div class="col-md-6">
<div class="services-how-it-work"style={{backgroundImage: 'url('+building_4+')'}}></div>
</div>
<div class="col-md-6">
<div class="services-how-it-work">
<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Porro tenetur accusamus sit, autem officia quae, ex fugiat voluptatibus aliquam reiciendis saepe recusandae ipsum reprehenderit placeat. Quos quod enim, officiis vero.</p>

</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
<div id="colorlib-services-how-it-work">
<div class="container">
<div class="row">
<div class="col-md-4 text-center animate-box">
<div class="services-how-it-work">
<span class="icon">
<i class="flaticon-engineer icon-how-it-work"></i>
</span>
<div class="desc-how-it-work">
<h3 class="how-it-work-h3">General Constructing</h3>
<p class="how-it-work-p">Separated they live in Bookmarksgrove right at the coast of the Semantics</p>
</div>
</div>
</div>
<div class="col-md-4 text-center animate-box">
<div class="services-how-it-work">
<span class="icon">
<i class="flaticon-engineering icon-how-it-work"></i>
</span>
<div class="desc-how-it-work">
<h3 class="how-it-work-h3">General Constructing</h3>
<p class="how-it-work-p">Separated they live in Bookmarksgrove right at the coast of the Semantics</p>
</div>
</div>
</div>
<div class="col-md-4 text-center animate-box">
<div class="services-how-it-work">
<span class="icon">
<i class="flaticon-skyline icon-how-it-work"></i>
</span>
<div class="desc-how-it-work">
<h3 class="how-it-work-h3">General Constructing</h3>
<p class="how-it-work-p">Separated they live in Bookmarksgrove right at the coast of the Semantics</p>
</div>
</div>
</div>
<div class="col-md-4 text-center animate-box">
<div class="services-how-it-work ">
<span class="icon">
<i class="flaticon-crane icon-how-it-work"></i>
</span>
<div class="desc-how-it-work">
<h3 class="how-it-work-h3">General Constructing</h3>
<p class="how-it-work-p">Separated they live in Bookmarksgrove right at the coast of the Semantics</p>
</div>
</div>
</div>
<div class="col-md-4 text-center animate-box">
<div class="services-how-it-work">
<span class="icon">
<i class="flaticon-sketch icon-how-it-work"></i>
</span>
<div class="desc-how-it-work">
<h3 class="how-it-work-h3">General Constructing</h3>
<p class="how-it-work-p">Separated they live in Bookmarksgrove right at the coast of the Semantics</p>
</div>
</div>
</div>
<div class="col-md-4 text-center animate-box">
<div class="services-how-it-work">
<span class="icon">
<i class="flaticon-conveyor icon-how-it-work"></i>
</span>
<div class="desc-how-it-work">
<h3 class="how-it-work-h3">General Constructing</h3>
<p class="how-it-work-p">Separated they live in Bookmarksgrove right at the coast of the Semantics</p>
</div>
</div>
</div>
</div>
</div>
</div>
<Footer/>
            </div>
        )
    }
}
