import React from 'react'
const Header = () => {
  return (
    <>
    
     <section id="hero" style={{height:"35rem"}}>
    <div id="heroCarousel" class="carousel slide carousel-fade" data-ride="carousel">

      <div class="carousel-inner" role="listbox">

        
        <div class="carousel-item active" style={{backgroundImage:"url(/assets/img/slide/slide-1.jpg)"} }>
        <div class="logo_section" style={{marginTop:"2rem",textAlign:"center"}}>
            <div class="container">
               <div class="row">
                  <div class="col-sm-12">
                     <div class="logo"><a ><img src="/assets/img/logo_copy.png"/></a></div>
                  </div>
               </div>
            </div>
         </div>
          <div class="carousel-container">
         
            <div class="carousel-content animate__animated animate__fadeInUp">
              <h2 style={{textAlign:"center"}}>Get Start <br/>Your favriot shoping</h2>
              {/* <p>Ut velit est quam dolor ad a aliquid qui aliquid. Sequi ea ut et est quaerat sequi nihil ut aliquam. Occaecati alias dolorem mollitia ut. Similique ea voluptatem. Esse doloremque accusamus repellendus deleniti vel. Minus et tempore modi architecto.</p>
              <div class="text-center"><a href="" class="btn-get-started">Read More</a></div> */}
            </div>
          </div>
        </div>

       
        <div class="carousel-item" style={{backgroundImage:"url(/assets/img/slide/slide-2.jpg)"}}>
        <div class="logo_section" style={{marginTop:"2rem",textAlign:"center"}}>
            <div class="container">
               <div class="row">
                  <div class="col-sm-12">
                     <div class="logo"><a ><img src="/assets/img/logo_copy.png"/></a></div>
                  </div>
               </div>
            </div>
         </div>
          <div class="carousel-container">
            <div class="carousel-content animate__animated animate__fadeInUp">
            <h2 style={{textAlign:"center"}}>Get Start <br/>Your favriot shoping</h2>
              {/* <p>Ut velit est quam dolor ad a aliquid qui aliquid. Sequi ea ut et est quaerat sequi nihil ut aliquam. Occaecati alias dolorem mollitia ut. Similique ea voluptatem. Esse doloremque accusamus repellendus deleniti vel. Minus et tempore modi architecto.</p>
              <div class="text-center"><a href="" class="btn-get-started">Read More</a></div> */}
            </div>
          </div>
        </div>

        
        <div class="carousel-item" style={{backgroundImage: "url(/assets/img/slide/slide-1.jpg)"}}>
        <div class="logo_section" style={{marginTop:"2rem",textAlign:"center"}}>
            <div class="container">
               <div class="row">
                  <div class="col-sm-12">
                     <div class="logo"><a ><img src="/assets/img/logo_copy.png"/></a></div>
                  </div>
               </div>
            </div>
         </div>
          <div class="carousel-container">
            <div class="carousel-content animate__animated animate__fadeInUp">
            <h2 style={{textAlign:"center"}}>Get Start <br/>Your favriot shoping</h2>
              {/* <p>Ut velit est quam dolor ad a aliquid qui aliquid. Sequi ea ut et est quaerat sequi nihil ut aliquam. Occaecati alias dolorem mollitia ut. Similique ea voluptatem. Esse doloremque accusamus repellendus deleniti vel. Minus et tempore modi architecto.</p>
              <div class="text-center"><a href="" class="btn-get-started">Read More</a></div> */}
            </div>
          </div>
        </div>

      </div>

      <a class="carousel-control-prev" href="#heroCarousel" role="button" data-slide="prev">
        <span class="carousel-control-prev-icon icofont-simple-left" aria-hidden="true"></span>
        <span class="sr-only">Previous</span>
      </a>

      <a class="carousel-control-next" href="#heroCarousel" role="button" data-slide="next">
        <span class="carousel-control-next-icon icofont-simple-right" aria-hidden="true"></span>
        <span class="sr-only">Next</span>
      </a>

      <ol class="carousel-indicators" id="hero-carousel-indicators"></ol>

    </div>
  </section>
    </>
  )
}

export default Header
