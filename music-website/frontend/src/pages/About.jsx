import React, { useRef } from "react"; // useState in {}
import videoSrc from "../pictures/AboutVid.mp4";
import abPic1 from "../pictures/AboutPic1.jpg";
import abPic2 from "../pictures/AboutPic2.jpg";
import abPic3 from "../pictures/AboutPic3.jpg";
import abPic4 from "../pictures/AboutPic4.jpg";
import abPic5 from "../pictures/AboutPic5.jpg";
// import abPic6 from "../pictures/AboutPic6.jpg";
import abPic7 from "../pictures/AboutPic7.jpg";
import abPic10 from "../pictures/AboutPic10.jpg";
import AboutVid2 from "../pictures/AboutVid2.mp4";
import AboutVid3 from "../pictures/AboutVid3.mp4";
import PageContainer from "../components/PageContainer.component";
import ScrollToTopButton from "../components/ScrollToTopButton";

import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const FadeInSection = ({ children }) => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

  React.useEffect(() => {
    if (inView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [controls, inView]);

  const variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={variants}>
      {children}
    </motion.div>
  );
};

const About = () => {
  const videoRef1 = useRef(null);
  const videoRef2 = useRef(null);

  const handleVideoClick = (e) => {
    const videoElement = e.target;

    if (videoElement.paused) {
      videoElement.play();
    } else {
      videoElement.pause();
    }
  };

  const handleVideoHover = () => {
    videoRef1.current.controls = true; // Show controls on hover
  };

  const handleVideoLeave = () => {
    videoRef1.current.controls = false; // Hide controls on mouse leave
  };

  return (
    <PageContainer>
      {/* Video Section */}
      <FadeInSection>
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
              <span className="text-white">Welcome</span>{" "}
              <span className="text-black">To</span>{" "}
              <span className="text-slate-500"> BobTheDreiz's</span>{" "}
              <span className="text-black">World</span>
            </h1>
          </div>
        </div>
      </FadeInSection>

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
      <FadeInSection>
        {" "}
        <div className="grid grid-cols-1 sm:grid-cols-2 w-full h-screen">
          <div className="bg-black flex items-center justify-center p- sm:p-8 md:p-16 lg:p-24">
            <div className="bg-gray-400 rounded-lg flex items-center justify-center w-full h-full">
              <FadeInSection>
                <p className="text-sm mx-12 my-0 sm:text-base md:text-lg lg:text-base">
                  BobTheDreiz is a Hanoian producer/rapper whose music is a
                  mixture of EDM and Rap. Being exposed to EDM at a very young
                  age, BobTheDreiz grew up listening to various European DJs
                  around 2010s, and particularly fell in love with Don Diablo
                  and Skrillex's tracks. His first EDM track - 2bitTr@p - which
                  is a mixture of Trap and Dubstep, was released toward the end
                  of 2020, and at the same time, he was introduced to Rap by one
                  of his close friend and also an extremly talented rapper -
                  COIN. Since then, he simulaneously released a couple more EDM
                  tracks and learned to make rap beats.
                  <br></br>
                  <br></br>
                  BobTheDreiz's music journey experienced a turning point at the
                  beginning of 2022 as he released his first rap song with COIN,
                  and started to dive deeper into the Rap game. Been living in
                  the US for a couple years, BobTheDreiz's rap materials are
                  heavily inspired by American modern rappers, and his
                  productions are mainly unique combinations of Rap and
                  EDM-influenced beats. His music journey so far has taken him
                  to experience various genre such as Trap, UK Drill,
                  HipHop/Rap, Dance/Electronic, Dubstep, Reggae, Drum & Bass,
                  RnB, etc.
                </p>
              </FadeInSection>
            </div>
          </div>
          <FadeInSection>
            <div className="relative h-full">
              <img
                src={abPic1}
                alt=""
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>
          </FadeInSection>
        </div>
      </FadeInSection>

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

      <FadeInSection>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 w-full h-auto md:h-screen bg-black px-4 sm:px-8 md:px-12 py-8">
          {/* First Image */}
          <div className="relative mx-4 sm:mx-8 md:mx-4 my-8">
            <img src={abPic4} alt="" className="w-full h-full object-cover rounded-lg" />
          </div>

          {/* Second Image with Textbox */}
          <div className="relative flex items-center justify-center mx-4 sm:mx-8 md:mx-4 my-8">
            <img
              src={abPic5}
              alt="Description 2"
              className="w-full h-full object-cover rounded-lg"
            />
            <div className="absolute text-sm top-4 sm:top-10 left-1/2 transform -translate-x-1/2 w-3/4 h-1/4 p-2 bg-white opacity-80 border border-gray-300 rounded-md flex items-center justify-center">
              <p>
                Piano has always been an inevitable part of BobTheDreiz's music
                journey. After learning it for 5 years, BobTheDreiz continued to
                apply his piano skills and knowledge into his productions,
                typically in "Trùm Trường Mẫu Giáo" and "Và Thế Giới Đã Mất Đi
                Một Người Cô Đơn (Cover)".
              </p>
            </div>
          </div>

          {/* Third Image */}
          <div className="relative mx-4 sm:mx-8 md:mx-4 my-8">
            <img src={abPic7} alt="" className="w-full h-full object-cover rounded-lg" />
          </div>
        </div>
      </FadeInSection>

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
      <FadeInSection>
        <div className="relative w-full h-screen flex items-center justify-center">
          <div
            className="absolute top-0 left-0 w-full h-full bg-cover opacity-80"
            style={{ backgroundImage: `url(${abPic2})` }}></div>
          <div className="relative z-10 w-4/5 sm:w-3/4 md:w-2/3 lg:w-1/2 xl:w-4/5 h-[85%] sm:h-2/3 lg:h-3/4">
            <img src={abPic3} alt="" className="w-full h-full object-cover rounded-lg" />
          </div>
        </div>
      </FadeInSection>

      <div className="bg-white w-full my-7"></div>
      <div className="overflow-hidden bg-black h-10 flex items-center justify-center">
        <div
          className="flex text-white text-xl sm:text-2xl md:text-3xl lg:text-4xl whitespace-nowrap"
          style={{
            animation: "marqueeLeft 5s linear infinite",
            animationDirection: "normal",
          }}>
          S T U D I O - C O O K U P
        </div>
      </div>
      <div className="bg-white w-full my-7"></div>

      <FadeInSection>
        <div className="relative w-full h-screen flex items-center justify-center overflow-hidden">
          <div
            className="absolute top-0 left-0 w-full h-full bg-cover bg-center opacity-100"
            style={{ backgroundImage: `url(${abPic10})` }}></div>

          <div className="absolute bg-slate-300 opacity-50 w-[90%] h-1/2 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></div>

          <div className="grid grid-cols-2 gap-4 w-full h-full px-4 py-8">
            <div className="relative flex justify-center items-center mx-4 sm:mx-8 md:mx-4 my-8">
              <div className="relative max-w-[60%] w-full">
                {" "}
                <video
                  ref={videoRef1}
                  src={AboutVid2}
                  className="w-full h-auto object-cover"
                  controls
                  onClick={handleVideoClick}
                  onMouseMove={handleVideoHover}
                  onMouseLeave={handleVideoLeave}></video>
                <div className="absolute top-0 left-0 right-0 bg-black text-white text-xl opacity-95 flex items-center justify-center h-[8%]">
                  Có Ai Thương Em Như Anh (Cover)
                </div>
              </div>
            </div>

            <div className="relative flex justify-center items-center mx-4 sm:mx-8 md:mx-4 my-8">
              <div className="relative max-w-[60%] w-full">
                {" "}
                <video
                  ref={videoRef2}
                  src={AboutVid3}
                  className="w-full h-auto object-cover"
                  controls
                  onClick={handleVideoClick}
                  onMouseMove={handleVideoHover}
                  onMouseLeave={handleVideoLeave}></video>
                <div className="absolute top-0 left-0 right-0 bg-black text-white text-2xl opacity-95 flex items-center justify-center h-[8%]">
                  पवित्र
                </div>
              </div>
            </div>
          </div>
        </div>
      </FadeInSection>

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
      <ScrollToTopButton />
    </PageContainer>
  );
};

export default About;
