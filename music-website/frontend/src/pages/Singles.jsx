import React from "react";

import PageContainer from "../components/PageContainer.component";
import SinglePic1 from "../pictures/SinglePic1.jpg";
import SinglePic2 from "../pictures/SinglePic2.jpg";
import SinglePic3 from "../pictures/SInglePic3.jpg";
import SinglePic4 from "../pictures/SinglePic4.jpg";
import SinglePic5 from "../pictures/SinglePic5.jpg";
import SinglePic6 from "../pictures/SinglePic6.jpg";
import SinglePic7 from "../pictures/SinglePic7.jpg";
import SinglePic8 from "../pictures/SinglePic8.JPG";
import SinglePic9 from "../pictures/SinglePic9.jpg";
import SinglePic10 from "../pictures/SinglePic10.jpg";
import SinglePic11 from "../pictures/SinglePic11.jpg";
import SinglePic12 from "../pictures/SinglePic12.jpg";
import SinglePic13 from "../pictures/SinglePic13.jpg";
import SinglePic14 from "../pictures/SinglePic14.jpg";
import SinglePic15 from "../pictures/SinglePic15.jpg";
import SinglePic16 from "../pictures/SinglePic16.JPG";
import SinglePic17 from "../pictures/SinglePic17.jpg";
// import SinglePic18 from "../pictures/SinglePic18.jpg";
// import SinglePic19 from "../pictures/SinglePic19.jpg";
import SinglePic20 from "../pictures/SinglePic20.jpg";
// import SinglePic21 from "../pictures/SinglePic21.jpg";
import SinglePic22 from "../pictures/SinglePic22.jpg";
import SinglePic23 from "../pictures/SinglePic23.jpg";
import SinglePic24 from "../pictures/SinglePic24.jpg";
import SinglePic25 from "../pictures/SinglePic25.jpg";

import SingleVid from "../pictures/SingleVid.mp4";
import SingleVid2 from "../pictures/SingleVid2.mp4";
import SingleVid3 from "../pictures/SingleVid3.mp4";
import SingleVid4 from "../pictures/SingleVid4.mp4";
import SingleVid5 from "../pictures/SingleVid5.mp4";
import SingleVid6 from "../pictures/SingleVid6.mp4";
import SingleVid7 from "../pictures/SingleVid7.mp4";
import SingleVid8 from "../pictures/SingleVid8.mp4";
import SingleVid9 from "../pictures/SingleVid9.mp4";
import SingleVid10 from "../pictures/SingleVid10.mp4";
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

const Singles = () => {
  const images = [
    {
      src: SinglePic24,
      link: "https://open.spotify.com/track/1TUQtnEMMSUh62S6QZTQvU?si=f7c55695d9ed46e5",
      text: "Back To The Crip",
    },
    {
      src: SinglePic3,
      link: "https://open.spotify.com/track/45fD35I4BujyP4EdQObBCn?si=d703c789423247bb",
      text: "Mikachu",
    },
    {
      src: SinglePic5,
      link: "https://open.spotify.com/track/6ZCCuDpXN3xx2wx3Px3Cks?si=59e51b4f2b7149d3",
      text: "Day One",
    },
    {
      src: SinglePic7,
      link: "https://open.spotify.com/track/2oMnCF1XOg3aBPfQhM1bZu?si=323210bc20fe4ecc",
      text: "#Long",
    },
    {
      src: SinglePic6,
      link: "https://open.spotify.com/track/67CXrN340IdAWJHKFZxj3J?si=4017da933512412b",
      text: "Trùm Trường Mẫu Giáo",
    },
    {
      src: SinglePic4,
      link: "https://open.spotify.com/track/6GXYgsMD2lXv0VV6pvQprt?si=667dbf698344485c",
      text: "WIC",
    },
    {
      src: SinglePic8,
      link: "https://open.spotify.com/track/4bIECWtN2Gf2lx6ArffGLk?si=cd033894a2074620",
      text: "Tập Rap",
    },
  ];

  const newImages = [
    {
      src: SinglePic9,
      link: "https://open.spotify.com/track/60XlcKj8UuAhL1nWWIOvmy?si=6893906b9d754147",
      text: "Walk On The Street (Remix)",
    },
    {
      src: SinglePic10,
      link: "https://open.spotify.com/track/2bgsDGUSEeXb7fNfX73UCP?si=77ff081031c34e07",
      text: "WAP (Remix)",
    },
    {
      src: SinglePic23,
      link: "https://open.spotify.com/track/5jB0yIDJzwFmYXAPctSR6z?si=aba15fdd8b28469c",
      text: "Và Thế Giới Đã Mất Đi Một Người Cô Đơn (Cover)",
    },
  ];

  const edmImages = [
    {
      src: SinglePic25,
      link: "https://open.spotify.com/track/2t0aRV0V3ExSy8t5rsSvGt?si=d0be1158448a46c4",
      text: "पवित्र",
    },
    {
      src: SinglePic13,
      link: "https://open.spotify.com/track/6ZCCuDpXN3xx2wx3Px3Cks?si=59e51b4f2b7149d3",
      text: "Dump_chill",
    },
    {
      src: SinglePic17,
      link: "https://open.spotify.com/track/6GXYgsMD2lXv0VV6pvQprt?si=667dbf698344485c",
      text: "2bitTrap",
    },
    {
      src: SinglePic16,
      link: "https://open.spotify.com/track/4bIECWtN2Gf2lx6ArffGLk?si=cd033894a2074620",
      text: "Vamos de Viaje",
    },
    {
      src: SinglePic15,
      link: "https://open.spotify.com/track/67CXrN340IdAWJHKFZxj3J?si=4017da933512412b",
      text: "Seven Nation Army (Cover)",
    },
    {
      src: SinglePic12,
      link: "https://open.spotify.com/track/45fD35I4BujyP4EdQObBCn?si=d703c789423247bb",
      text: "Beatbox track no.2",
    },
    {
      src: SinglePic14,
      link: "https://open.spotify.com/track/2oMnCF1XOg3aBPfQhM1bZu?si=323210bc20fe4ecc",
      text: "Beatbox track no.1",
    },
  ];

  return (
    <PageContainer>
      <FadeInSection>
        <div
          className="bg-cover bg-center min-h-screen flex items-center justify-center"
          style={{
            backgroundImage: `url(${SinglePic2})`,
            opacity: 1.0,
          }}>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 w-full h-auto md:h-screen px-4 sm:px-8 md:px-12 py-8">
            <div className="flex items-center justify-center mx-4 sm:mx-8 md:mx-4 my-8">
              <div className="relative bg-pink-600 opacity-50 h-3/4 w-full"></div>
            </div>

            <div className="relative flex items-center justify-center mx-4 sm:mx-8 md:mx-4 my-8">
              <video
                src={SingleVid}
                type="video/mp4"
                autoPlay
                loop
                muted
                className="w-full h-full object-cover"
              />
            </div>

            <div className="flex items-center justify-center mx-4 sm:mx-8 md:mx-4 my-8">
              <div className="relative bg-pink-600 opacity-50 h-3/4 w-full"></div>
            </div>
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
          R A P
        </div>
      </div>
      <div className="bg-white w-full my-7"></div>

      <FadeInSection>
        <div className="relative min-h-screen flex flex-col items-center justify-center">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: `url(${SinglePic1})`,
              opacity: 0.7,
            }}></div>

          {/* First row */}
          <div className="flex justify-center w-[65%] z-10 mb-12">
            {images.slice(0, 3).map((image, index) => (
              <a
                href={image.link}
                target="_blank"
                rel="noopener noreferrer"
                key={index}
                className="w-full max-w-[calc(33.333%-8px)] mx-4 relative before:content-[''] before:block before:pb-[100%]">
                <img
                  src={image.src}
                  alt={`grid-img-${index}`}
                  className="absolute inset-0 object-cover w-full h-full transition-transform transform hover:-translate-x-1 hover:-translate-y-1 cursor-pointer"
                />
                <div className="absolute bottom-0 left-0 w-full bg-black bg-opacity-100 text-center py-2">
                  <p className="text-white text-xl">{image.text}</p>
                </div>
              </a>
            ))}
          </div>

          {/* Second row */}
          <div className="flex justify-center w-[65%] z-10">
            {images.slice(3).map((image, index) => (
              <a
                href={image.link}
                target="_blank"
                rel="noopener noreferrer"
                key={index + 3}
                className="w-full max-w-[calc(25%-6px)] mx-2 relative before:content-[''] before:block before:pb-[100%]">
                <img
                  src={image.src}
                  alt={`grid-img-${index + 3}`}
                  className="absolute inset-0 object-cover w-full h-full transition-transform transform hover:-translate-x-1 hover:-translate-y-1 cursor-pointer"
                />
                <div className="absolute bottom-0 left-0 w-full bg-black bg-opacity-100 text-center py-2">
                  <p className="text-white text-xl">{image.text}</p>
                </div>
              </a>
            ))}
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
          R E M I X E S
        </div>
      </div>
      <div className="bg-white w-full my-7"></div>

      <FadeInSection>
        <div className="relative min-h-screen flex items-center justify-center">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: `url(${SinglePic11})`,
              opacity: 0.8,
            }}></div>

          <div className="grid grid-cols-2 grid-rows-3 gap-6 w-[90%] h-[80vh] z-10 relative">
            {newImages.map((image, index) => (
              <React.Fragment key={index}>
                {/* Image container, slightly increased size */}
                <FadeInSection>
                  <div
                    className={`col-start-1 row-start-${
                      index + 1
                    } flex items-center justify-center relative group`}>
                    <img
                      src={image.src}
                      alt={`grid-img-${index}`}
                      className="object-cover transform transition-transform hover:-translate-y-2 hover:-translate-x-2 hover:scale-105"
                      // Increase the size a bit by reducing the division factor
                      style={{
                        height: "calc((70vh - 8px * 2) / 3 + 10px)",
                        width: "calc((70vh - 8px * 2) / 3 + 10px)",
                      }}
                    />

                    {/* Text container with increased width */}
                    <a
                      href={image.link}
                      target="_blank"
                      rel="noopener noreferrer">
                      <div
                        className={`absolute top-0 left-0 w-full h-full bg-black bg-opacity-60 opacity-0 transition-opacity group-hover:opacity-100 flex items-center justify-center`}>
                        <p
                          className="text-white text-xl text-center py-2"
                          style={{
                            paddingLeft: "10px",
                            paddingRight: "10px",
                          }}>
                          {image.text}
                        </p>
                      </div>
                    </a>
                  </div>
                </FadeInSection>
              </React.Fragment>
            ))}
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
          E D M
        </div>
      </div>
      <div className="bg-white w-full my-7"></div>

      <FadeInSection>
        <div className="relative min-h-screen flex flex-col items-center justify-center">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: `url(${SinglePic20})`, // Use your specific background image
              opacity: 0.75,
            }}></div>

          {/* First row with 4 pictures */}
          <div className="flex justify-center w-[65%] z-10 mb-12">
            {edmImages.slice(0, 4).map((image, index) => (
              <a
                href={image.link}
                target="_blank"
                rel="noopener noreferrer"
                key={index}
                className="w-full max-w-[calc(25% - 12px)] mx-3 relative before:content-[''] before:block before:pb-[100%]">
                <img
                  src={image.src}
                  alt={`edm-img-${index}`}
                  className="absolute inset-0 object-cover w-full h-full transition-transform transform hover:-translate-x-1 hover:-translate-y-1 cursor-pointer"
                />
                <div className="absolute bottom-0 left-0 w-full bg-black bg-opacity-100 text-center py-2">
                  <p className="text-white text-xl">{image.text}</p>
                </div>
              </a>
            ))}
          </div>

          {/* Second row with 3 pictures */}
          <div className="flex justify-center w-[65%] z-10">
            {edmImages.slice(4, 7).map((image, index) => (
              <a
                href={image.link}
                target="_blank"
                rel="noopener noreferrer"
                key={index + 4} // Ensure unique key by offsetting index
                className="w-full max-w-[calc(33.333% - 16px)] mx-4 relative before:content-[''] before:block before:pb-[100%]">
                <img
                  src={image.src}
                  alt={`edm-img-${index + 4}`}
                  className="absolute inset-0 object-cover w-full h-full transition-transform transform hover:-translate-x-1 hover:-translate-y-1 cursor-pointer"
                />
                <div className="absolute bottom-0 left-0 w-full bg-black bg-opacity-100 text-center py-2">
                  <p className="text-white text-xl">{image.text}</p>
                </div>
              </a>
            ))}
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
          B E A T S
        </div>
      </div>
      <div className="bg-white w-full my-7"></div>

      <FadeInSection>
        <div className="relative min-h-screen flex items-center justify-center">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: `url(${SinglePic22})`,
              opacity: 0.7,
            }}></div>

          <div
            className="grid grid-cols-6 grid-rows-3 gap-8 relative z-10"
            style={{ width: "95vw", height: "85vh" }}>
            {/* Cell 1 & 7: Video 1 */}
            <div className="col-start-1 row-start-1 row-span-2 col-span-1 mt-24">
              <video
                className="w-full h-4/5 object-cover rounded-lg"
                loop
                controls
                onClick={(event) => {
                  if (event.target.paused) {
                    event.target.play();
                  } else {
                    event.target.pause();
                  }
                }}>
                <source src={SingleVid10} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
              <div className="bg-black text-white text-center">Trap#3</div>
            </div>

            {/* Cell 2 & 8: Video 2 */}
            <div className="col-start-2 row-start-1 row-span-2 col-span-1 mb-24">
              <video
                className="w-full h-4/5 object-cover rounded-lg"
                loop
                controls
                onClick={(event) => {
                  if (event.target.paused) {
                    event.target.play();
                  } else {
                    event.target.pause();
                  }
                }}>
                <source src={SingleVid2} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
              <div className="bg-black text-white text-center">Club Banger</div>
            </div>

            {/* Cell 9 & 15: Video 3 */}
            <div className="col-start-3 row-start-2 row-span-2 col-span-1 mb-12 mt-12">
              <video
                className="w-full h-4/5 object-cover rounded-lg"
                loop
                controls
                onClick={(event) => {
                  if (event.target.paused) {
                    event.target.play();
                  } else {
                    event.target.pause();
                  }
                }}>
                <source src={SingleVid4} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
              <div className="bg-black text-white text-center">Drill</div>
            </div>

            {/* Cell 10 & 16: Video 4 */}
            <div className="col-start-4 row-start-2 row-span-2 col-span-1 mb-12 mt-12">
              <video
                className="w-full h-4/5 object-cover rounded-lg"
                loop
                controls
                onClick={(event) => {
                  if (event.target.paused) {
                    event.target.play();
                  } else {
                    event.target.pause();
                  }
                }}>
                <source src={SingleVid7} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
              <div className="bg-black text-white text-center">WAP Remix</div>
            </div>

            {/* Cell 5 & 11: Video 5 */}
            <div className="col-start-5 row-start-1 row-span-2 col-span-1 mb-24">
              <video
                className="w-full h-4/5 object-cover rounded-lg"
                loop
                controls
                onClick={(event) => {
                  if (event.target.paused) {
                    event.target.play();
                  } else {
                    event.target.pause();
                  }
                }}>
                <source src={SingleVid9} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
              <div className="bg-black text-white text-center">
                Classical Dance Trap beat
              </div>
            </div>

            {/* Cell 6 & 12: Video 6 */}
            <div className="col-start-6 row-start-1 row-span-2 col-span-1 mt-24">
              <video
                className="w-full h-4/5 object-cover rounded-lg"
                loop
                controls
                onClick={(event) => {
                  if (event.target.paused) {
                    event.target.play();
                  } else {
                    event.target.pause();
                  }
                }}>
                <source src={SingleVid3} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
              <div className="bg-black text-white text-center">Club Beat</div>
            </div>

            {/* Cell 13 & 14: Video 7 */}
            <div className="col-start-1 row-start-3 col-span-2 mr-8 ml-8">
              <video
                className="w-full h-full object-cover rounded-lg"
                loop
                controls
                onClick={(event) => {
                  if (event.target.paused) {
                    event.target.play();
                  } else {
                    event.target.pause();
                  }
                }}>
                <source src={SingleVid5} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
              <div className="bg-black text-white text-center">Trap</div>
            </div>

            {/* Cell 3 & 4: Video 8 */}
            <div className="col-start-3 row-start-1 col-span-2 mr-8 ml-8">
              <video
                className="w-full h-full object-cover rounded-lg"
                loop
                controls
                onClick={(event) => {
                  if (event.target.paused) {
                    event.target.play();
                  } else {
                    event.target.pause();
                  }
                }}>
                <source src={SingleVid6} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
              <div className="bg-black text-white text-center">
                Beatbox Drill Beat
              </div>
            </div>

            {/* Cell 17 & 18: Video 9 */}
            <div className="col-start-5 row-start-3 col-span-2 mr-8 ml-8">
              <video
                className="w-full h-full object-cover rounded-lg"
                loop
                controls
                onClick={(event) => {
                  if (event.target.paused) {
                    event.target.play();
                  } else {
                    event.target.pause();
                  }
                }}>
                <source src={SingleVid8} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
              <div className="bg-black text-white text-center">Trap #2</div>
            </div>
          </div>
        </div>
      </FadeInSection>

      <style>
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

      <div
        style={{
          zIndex: 9999,
          position: "fixed",
          right: "20px",
          bottom: "20px",
        }}>
        <ScrollToTopButton />
      </div>
    </PageContainer>
  );
};
export default Singles;
