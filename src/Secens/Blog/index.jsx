import React, { Component } from 'react'
import './index.css'
import Header from '../../Component/Header'
import Footer from '../../Component/Footer'

import Cover_3 from '../../images/cover_img_3.jpg';
import blog_1 from '../../images/blog-1.jpg';
import blog_2 from '../../images/blog-2.jpg';
import blog_3 from '../../images/blog-3.jpg';
import blog_4 from '../../images/blog-4.jpg';
import blog_5 from '../../images/blog-5.jpg';
import blog_6 from '../../images/blog-6.jpg';


export default class index extends Component {
    render() {
        return (
            <div>
                

<aside id="colorlib-hero">
<div class="flexslider">
<ul class="slides">
<li class="slides-li" style={{backgroundImage: 'url('+Cover_3+')'}}>
    <Header/>
<div class="overlay"></div>
<div class="container-fluid">
<div class="row">
<div class="col-md-12 col-12 col-sm-12 slider-text">
<div class="slider-text-inner text-center">
<h1 class="h1-blog-top">Blog</h1>
<h2 class="h2-blog-top"><a href="" class="h1-blog-top-a">Home</a> - Blog</h2>
</div>
</div>
</div>
</div>
</li>
</ul>
</div>
</aside>
<div id="colorlib-blog">
<div class="container">
<div class="row">
<div class="col-md-6">
<article class="animate-box article">
<a href="#" class="blog-img text-center" style={{backgroundImage: 'url('+blog_1+')'}}>
<span class="icon"><i class="icon-search2 blog-icon-article"></i></span>
</a>
<div class="entry">
<h2 class="blogbox-h2">
	<a href="#" class="blogbox-h2-a">Construction was awarded with “The Best Construction Company” prize</a></h2>
<p class="meta-2">
	<span class="iconx-span"><i class="icon-calendar2 iconx"></i> March 1, 2017</span>
	<span class="iconx-span"><i class="icon-user iconx"></i> Admin</span> 
	<span class="iconx-span"><i class="icon-dropbox iconx"></i> Articles</span>
</p>
<p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.</p>
</div>
</article>

</div>
<div class="col-md-6">
<article class="animate-box article">
<a href="#" class="blog-img text-center" style={{backgroundImage: 'url('+blog_1+')'}}>
<span class="icon"><i class="icon-search2 blog-icon-article"></i></span>
</a>
<div class="entry">
<h2 class="blogbox-h2">
	<a href="#" class="blogbox-h2-a">Construction was awarded with “The Best Construction Company” prize</a></h2>
<p class="meta-2">
	<span class="iconx-span"><i class="icon-calendar2 iconx"></i> March 1, 2017</span>
	<span class="iconx-span"><i class="icon-user iconx"></i> Admin</span> 
	<span class="iconx-span"><i class="icon-dropbox iconx"></i> Articles</span>
</p>
<p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.</p>
</div>
</article>

</div>
</div>
</div>
</div>
<Footer/>
            </div>
        )
    }
}
