import React, { useState } from 'react';
import "./BlogCss/Blog.css";

function Carousel() {
  const [shortTitle] = useState({
    STitle1: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit quisquam, esse expedita nostrum aperiam dolore repellat necessitatibus dolor earum alias.",
    STitle2: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facilis doloribus natus dolor asperiores non est!",
    STitle3: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit quisquam, esse expedita nostrum aperiam dolore repellat necessitatibus dolor earum alias."
  });
  const [longTitle] = useState({
    LTitle1: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit quisquam, esse expedita nostrum aperiam dolore repellat necessitatibus dolor earum alias.",
    LTitle2: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facilis doloribus natus dolor asperiores non est!",
    LTitle3: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit quisquam, esse expedita nostrum aperiam dolore repellat necessitatibus dolor earum alias."
  });

  return (
    <div>
      <div id="carouselExampleFade" className="carousel slide carousel-fade container mt-5" data-bs-ride="carousel">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <div className='row'>
              <div className='col-md-6'>
                <img src="img/natural.jpg" className="d-block mh-100" style={{ width: "600px", height: "200px" }} alt="..." />
              </div>
              <div className='col-md-6'>
                <p className='ShortTitle'>{shortTitle.STitle1}</p>
                <h3 className='LongTitle'>{longTitle.LTitle1}</h3>
                <p className='ShortTitle'></p>
                <p className='ChannelName'>Sabbir sun Programmer</p>
                <p className='ShortTitle'>12 February 2024</p>
              </div>
            </div>
          </div>
          <div className="carousel-item">
            <div className='row'>
              <div className='col-md-6'>
                <img src="img/road.jpg" className="d-block mh-100" style={{ width: "600px", height: "200px" }} alt="..." />
              </div>
              <div className='col-md-6'>
                <p className='ShortTitle'>{shortTitle.STitle2}</p>
                <h3 className='LongTitle'>{longTitle.LTitle2}</h3>
                <p className='ShortTitle'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facilis doloribus natus dolor asperiores non est!</p>
                <p className='ChannelName'>JavaScript</p>
                <p className='ShortTitle'>12 February 2024</p>
              </div>
            </div>
          </div>
          <div className="carousel-item">
            <div className='row'>
              <div className='col-md-6'>
                <img src="img/tree.jpg" className="d-block mh-100" style={{ width: "600px", height: "200px" }} alt="..." />
              </div>
              <div className='col-md-6'>
                <p className='ShortTitle'>{shortTitle.STitle3}</p>
                <h3 className='LongTitle'>{longTitle.LTitle3}</h3>
                <p className='ShortTitle'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facilis doloribus natus dolor asperiores non est!</p>
                <p className='ChannelName'>Python</p>
                <p className='ShortTitle'>12 February 2024</p>
              </div>
            </div>
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
          <span className="carousel-control-prev-icon"></span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
          <span className="carousel-control-next-icon"></span>
        </button>
        <h2 className='mt-5'>Recent Post</h2>
      </div>

    </div>
  );
}

export default Carousel;
