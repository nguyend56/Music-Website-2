import React from "react";
import videoSrc from "../pictures/AboutVid2.mp4";
import abPic1 from "../pictures/AboutPic1.jpg";
import abPic2 from "../pictures/AboutPic2.jpg";
import abPic3 from "../pictures/AboutPic3.jpg";
import abPic4 from "../pictures/AboutPic4.jpg";
import abPic5 from "../pictures/AboutPic5.jpg";
// import abPic6 from "../pictures/AboutPic6.jpg";
import abPic7 from "../pictures/AboutPic7.jpg";
import aboutGif from "../pictures/AboutGif.mp4";
import abPic8 from "../pictures/AboutPic8.jpg";
import abPic9 from "../pictures/AboutPic9.jpg";
import PageContainer from "../components/PageContainer.component";
import ScrollToTopButton from "../components/ScrollToTopButton";

const About = () => {
  return (
    <PageContainer>
      {/* Video Section */}
      <div className="bg-black relative overflow-hidden">
        <video
          src={videoSrc}
          type="video/mp4"
          autoPlay
          loop
          muted
          className="w-full h-full object-cover"
        />

        {/* Marquee Effect 1 */}
        <div className="absolute inset-x-0 top-1/2 transform -translate-y-1/2 z-20 overflow-hidden bg-white bg-opacity-40">
          <h1
            style={{
              animation: `marquee 4s linear infinite`,
              whiteSpace: "nowrap",
            }}
            className="text-red inline-block text-xs sm:text-sm md:text-lg lg:text-xl xl:text-6xl p-2 md:p-4 rounded">
            Welcome
          </h1>
        </div>

        <div className="absolute inset-x-0 top-1/2 transform -translate-y-1/2 z-20 overflow-hidden bg-white bg-opacity-40">
          <h1
            style={{
              animation: `marquee 4s linear infinite`,
              whiteSpace: "nowrap",
            }}
            className="text-red inline-block text-xs sm:text-sm md:text-lg lg:text-xl xl:text-6xl p-2 md:p-4 rounded">
            Welcome Welcome Welcome
          </h1>
        </div>
      </div>

      <div className="bg-white w-full my-7"></div>
      <div className="overflow-hidden bg-black h-10 flex items-center justify-center">
        <div
          className="flex text-white text-xl sm:text-2xl md:text-3xl lg:text-4xl whitespace-nowrap"
          style={{
            animation: "marqueeLeft 5s linear infinite",
            animationDirection: "normal",
          }}>
          I N T R O D U C T I O N
        </div>
      </div>
      <div className="bg-white w-full my-7"></div>

      {/* Grid Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 w-full h-screen">
        <div className="bg-black flex items-center justify-center p- sm:p-8 md:p-16 lg:p-24">
          <div className="bg-gray-400 flex items-center justify-center w-full h-full">
            <p className="text-sm sm:text-base md:text-lg lg:text-xl">
              Your text here
            </p>
          </div>
        </div>
        <div className="relative h-full">
          <img
            src={abPic1}
            alt=""
            className="absolute inset-0 w-full h-full object-cover"
          />
        </div>
      </div>

      <div className="bg-white w-full my-7"></div>
      <div className="overflow-hidden bg-black h-10 flex items-center justify-center">
        <div
          className="flex text-white text-xl sm:text-2xl md:text-3xl lg:text-4xl whitespace-nowrap"
          style={{
            animation: "marqueeLeft 5s linear infinite",
            animationDirection: "normal",
          }}>
          I N S T R U M E N T S
        </div>
      </div>
      <div className="bg-white w-full my-7"></div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 w-full h-auto md:h-screen bg-black px-4 sm:px-8 md:px-12 py-8">
        {/* First Image */}
        <div className="relative mx-4 sm:mx-8 md:mx-4 my-8">
          <img src={abPic4} alt="" className="w-full h-full object-cover" />
        </div>

        {/* Second Image with Textbox */}
        <div className="relative flex items-center justify-center mx-4 sm:mx-8 md:mx-4 my-8">
          <img
            src={abPic5}
            alt="Description 2"
            className="w-full h-full object-cover"
          />
          <div className="absolute top-4 sm:top-10 left-1/2 transform -translate-x-1/2 w-3/4 h-1/4 p-2 bg-white opacity-80 border border-gray-300 rounded-md flex items-center justify-center">
            <p>Some random text here. Change it as needed.</p>
          </div>
        </div>

        {/* Third Image */}
        <div className="relative mx-4 sm:mx-8 md:mx-4 my-8">
          <img src={abPic7} alt="" className="w-full h-full object-cover" />
        </div>
      </div>

      <div className="bg-white w-full my-7"></div>
      <div className="overflow-hidden bg-black h-10 flex items-center justify-center">
        <div
          className="flex text-white text-xl sm:text-2xl md:text-3xl lg:text-4xl whitespace-nowrap"
          style={{
            animation: "marqueeLeft 5s linear infinite",
            animationDirection: "normal",
          }}>
          H A N O I
        </div>
      </div>
      <div className="bg-white w-full my-7"></div>

      {/* Image Section */}
      <div className="relative w-full h-screen flex items-center justify-center">
        <div
          className="absolute top-0 left-0 w-full h-full bg-cover opacity-80"
          style={{ backgroundImage: `url(${abPic2})` }}></div>
        <div className="relative z-10 w-4/5 sm:w-3/4 md:w-2/3 lg:w-1/2 xl:w-4/5 h-[85%] sm:h-2/3 lg:h-3/4">
          <img src={abPic3} alt="" className="w-full h-full object-cover" />
        </div>
      </div>

      <div className="bg-white w-full my-7"></div>
      <div className="overflow-hidden bg-black h-10 flex items-center justify-center">
        <div
          className="flex text-white text-xl sm:text-2xl md:text-3xl lg:text-4xl whitespace-nowrap"
          style={{
            animation: "marqueeLeft 5s linear infinite",
            animationDirection: "normal",
          }}>
          A D V E N T U R E S
        </div>
      </div>
      <div className="bg-white w-full my-7"></div>

      <div className="bg-black relative overflow-hidden">
        <video
          src={aboutGif}
          type="video/mp4"
          autoPlay
          loop
          muted
          className="w-full h-full object-cover"
        />

        <div className="absolute top-0 left-0 w-full h-full grid grid-cols-3 grid-rows-2">
          <div className="relative flex items-center justify-center">
            <div className="absolute left-0 bg-gray-400 bg-opacity-80 w-[100%] h-3/4 p-8 flex items-center justify-center">
              Your Text 1
            </div>
          </div>

          <div className="relative flex items-center justify-center col-start-3 row-start-1">
            <div className="absolute right-0 bg-gray-400 w-[75%] h-3/4 p-8 flex items-center justify-center">
              <img
                src={abPic8}
                alt=""
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>
          </div>

          <div className="relative flex items-center justify-center col-start-1 row-start-2">
            <div className="absolute left-0 bg-gray-400 w-[75%] h-3/4 p-8 flex items-center justify-center">
              <img
                src={abPic9}
                alt=""
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>
          </div>

          <div className="relative flex items-center justify-center col-start-3 row-start-2 ">
            <div className="absolute right-0 bg-gray-400 bg-opacity-80 w-[100%] h-3/4 p-8 flex items-center justify-center">
              Your Text 2
            </div>
          </div>
        </div>
      </div>

      {/* Marquee CSS */}
      <style jsx>
        {`
          @keyframes marquee {
            0% {
              transform: translateX(-100%));
            }
            100% {
              transform: translateX(calc(100% + 1rem));
            }
          }
        `}
        {`
          @keyframes marqueeLeft {
            0% {
              transform: translateX(100%);
            }
            100% {
              transform: translateX(-100%);
            }
          }
        `}
      </style>
      <ScrollToTopButton/>
    </PageContainer>
  );
};

export default About;
