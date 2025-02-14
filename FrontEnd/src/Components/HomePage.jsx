import React from 'react';
import Slider from "react-slick";
import Header from './Header.jsx';
import BestDeal from './Home/BestDeal.jsx';
import Collection from './Home/Collection.jsx';
import TrendingWeek from './Home/TrendingWeek.jsx';
import Video from './Home/Video.jsx';
import Recommended from './Home/Recommended.jsx';
import Footer from './Footer.jsx';
import TrandingProducts from './Home/TrandingProducts.jsx';
import banner1 from '../assets/banner_1.png';
import banner2 from '../assets/banner_2.png';
import banner3 from '../assets/banner_3.jpg';
import smallBanner1 from '../assets/small_banner_1.png';
import smallBanner2 from '../assets/small_banner_2.png';
import smallBanner3 from '../assets/small_banner_3.png';
import smallBanner4 from '../assets/small_banner_4.png';
import smallBanner5 from '../assets/small_banner_5.png';
import smallBanner6 from '../assets/small_banner_6.png';
import smallBanner7 from '../assets/small_banner_7.png';



function HomePage(props) {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };

  const bannerImages = [banner1, banner2, banner3];
const smallBannerImages1 = [smallBanner1, smallBanner2];
const smallBannerImages2 = [smallBanner3, smallBanner4, smallBanner5];
const smallBannerImages3 = [smallBanner6, smallBanner7];


  return (
    <>
      <Header />
      <div className="container flex flex-col lg:flex-row bg-slate-100 w-full">
      <div className="slider-container w-full lg:w-9/12 p-5">
      <Slider {...settings}>
  {bannerImages.map((image, index) => (
    <div key={index} className="relative w-full">
      <img src={image} alt="banner" className="w-full h-[50vw] sm:h-[40vw] lg:h-[39vw] object-cover rounded-lg" />
      <div className="absolute top-0 left-0 w-full h-full flex flex-col justify-center p-6 sm:inline sm:pt-[10vw] bg-black/30">
        <h3 className="text-white text-1xl sm:text-5xl font-semibold tracking-widest w-80">Elevate Your Style</h3>
        <p className="text-slate-100 text-xs sm:text-lg mt-2 sm:mt-5 w-60 sm:w-96">
          Discover the trends in men's fashion, from casual to formal wear.
        </p>
        <button className="p-1 sm:p-3 bg-green-600 mt-3 sm:mt-5 px-2 sm:px-10 rounded-lg text-white w-40 sm:w-80">
          Shop Now <i className="fas fa-arrow-right ml-2"></i>
        </button>
      </div>
    </div>
  ))}
</Slider>

</div>

        <div className="flex flex-col gap-5 p-5 w-full lg:w-auto  ">
          {smallBannerImages1.map((image, index) => (
            <div key={index} className="relative w-full lg:w-[22vw] h-[40vw] sm:h-[30vw] lg:h-[19vw]">
              <img src={image} alt="banner" className="w-full h-full rounded-2xl absolute z-0" />
              <div className="p-5 z-1 relative text-white">
                <span className="font-semibold tracking-wider">Discover Fashion Producsts<br />Up To 15% Off</span><br />
                <button className="mt-2 underline ">Shop Now</button>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 p-5 text-slate-900">
        {smallBannerImages2.map((image, index) => (
          <div key={index} className=" relative w-full h-[50vw] sm:h-[30vw] lg:h-[19vw]">
            <img src={image} alt="banner" className="w-full h-full rounded-2xl absolute z-0" />
            <div className="p-5 z-1 relative text-slate-900">
              <span className="font-semibold tracking-wider">Discover Fashion Producsts <br />Up To 15% Off</span><br />
              <button className="mt-2 underline">Shop Now</button>
            </div>
          </div>
        ))}
      </div>
      <TrandingProducts products={props.products} />
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 p-5">
        {smallBannerImages3.map((image, index) => (
          <div key={index} className="relative w-full h-[50vw] sm:h-[30vw] lg:h-60">
            <img src={image} alt="banner" className="w-full h-full rounded-2xl absolute z-0" />
            <div className="p-5 z-1 relative mt-10 sm:mt-16 text-white">
              <span className="font-semibold tracking-wider">Discover Fashion Producsts <br />Up To 15% Off</span><br />
              <button className="mt-2 underline">Shop Now</button>
            </div>
          </div>
        ))}
      </div>
      <BestDeal products={props.products} />
      <Collection />
      <TrendingWeek products={props.products} />
      <Recommended products={props.products} />
      <Video />
      <Footer />
    </>
  );
}

export default HomePage;
