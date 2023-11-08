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

import SingleVid from "../pictures/SingleVid.mp4";
import SingleVid2 from "../pictures/SingleVid2.mp4";
import SingleVid3 from "../pictures/SingleVid3.mp4";
import SingleVid4 from "../pictures/SingleVid4.mp4";
import SingleVid5 from "../pictures/SingleVid5.mp4";
import SingleVid6 from "../pictures/SingleVid6.mp4";
import SingleVid7 from "../pictures/SingleVid7.mp4";
import SingleVid8 from "../pictures/SingleVid8.mp4";
import ScrollToTopButton from "../components/ScrollToTopButton";

const Singles = () => {
  const images = [
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
  ];

  const edmImages = [
    {
      src: SinglePic17,
      link: "https://open.spotify.com/track/6GXYgsMD2lXv0VV6pvQprt?si=667dbf698344485c",
      text: "2bitTrap",
    },
    {
      src: SinglePic13,
      link: "https://open.spotify.com/track/6ZCCuDpXN3xx2wx3Px3Cks?si=59e51b4f2b7149d3",
      text: "Dump_chill",
    },
    {
      src: SinglePic14,
      link: "https://open.spotify.com/track/2oMnCF1XOg3aBPfQhM1bZu?si=323210bc20fe4ecc",
      text: "Random beatbox sounds",
    },
    {
      src: SinglePic15,
      link: "https://open.spotify.com/track/67CXrN340IdAWJHKFZxj3J?si=4017da933512412b",
      text: "Seven Nation Army (Cover)",
    },
    {
      src: SinglePic16,
      link: "https://open.spotify.com/track/4bIECWtN2Gf2lx6ArffGLk?si=cd033894a2074620",
      text: "Vamos de Viaje",
    },
    {
      src: SinglePic12,
      link: "https://open.spotify.com/track/45fD35I4BujyP4EdQObBCn?si=d703c789423247bb",
      text: "Sleeping and coughing beatbox track",
    },
  ];

  // const videoSources = [SingleVid, SingleVid2, SingleVid3, SingleVid4, SingleVid5, SingleVid6, SingleVid7, SingleVid8];

  // const [playing, setPlaying] = useState([false, false, false]);
  // const videoRefs = [useRef(null), useRef(null), useRef(null)];

  // const toggleVideo = (index) => {
  //   const video = videoRefs[index].current;
  //   const playingCopy = [...playing];

  //   if (video.paused) {
  //     video.play();
  //     playingCopy[index] = true;
  //   } else {
  //     video.pause();
  //     playingCopy[index] = false;
  //   }

  //   setPlaying(playingCopy);
  // };

  // const videoRef = useRef(null);
  // //   const [isPlaying, setIsPlaying] = useState(false);
  // const videoRef1 = useRef(null);
  // const videoRef2 = useRef(null);

  // const handleVideoClick = (e) => {
  //   // We'll check if the user clicked on the video itself and not on the controls
  //   if (e.target === videoRef.current) {
  //     if (videoRef.current.paused) {
  //       videoRef.current.play();
  //     } else {
  //       videoRef.current.pause();
  //     }
  //   }
  // };

  // const handleVideoHover = () => {
  //   videoRef.current.controls = true; // Show controls on hover
  // };

  // const handleVideoLeave = () => {
  //   videoRef.current.controls = false; // Hide controls on mouse leave
  // };

  return (
    <PageContainer>
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

      <div className="relative min-h-screen flex items-center justify-center">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url(${SinglePic1})`,
            opacity: 0.7,
          }}></div>

        <div
          className="grid grid-cols-3 gap-12 w-[65%] h-[65%] z-10 relative"
          // The z-10 ensures the images appear above the background.
        >
          {images.map((image, index) => (
            <a
              href={image.link}
              target="_blank"
              rel="noopener noreferrer"
              key={index}
              className="relative before:content-[''] before:block before:pb-[100%]">
              <img
                src={image.src}
                alt={`grid-img-${index}`}
                className="absolute inset-0 object-cover w-full h-full transition-transform transform hover:-translate-x-1 hover:-translate-y-1 cursor-pointer"
              />
              <div className="absolute bottom-0 left-0 w-full bg-black bg-opacity-100 text-center py-2">
                <p className="text-white text-xl">{image.text}</p>{" "}
              </div>
            </a>
          ))}
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
          R E M I X E S
        </div>
      </div>
      <div className="bg-white w-full my-7"></div>

      <div className="relative min-h-screen flex items-center justify-center">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url(${SinglePic11})`,
            opacity: 0.8,
          }}></div>

        <div className="grid grid-cols-2 gap-48 w-3/5 h-3/5 z-10 relative">
          {newImages.map((image, index) => (
            <a
              href={image.link}
              target="_blank"
              rel="noopener noreferrer"
              key={index}
              className="relative before:content-[''] before:block before:pb-[100%]">
              <img
                src={image.src}
                alt={`grid-img-${index}`}
                className="absolute inset-0 object-cover w-full h-full transition-transform transform hover:-translate-x-1 hover:-translate-y-1 cursor-pointer"
              />
              <div className="absolute bottom-0 left-0 w-full bg-black bg-opacity-100 text-center py-2">
                <p className="text-white text-xl">{image.text}</p>{" "}
              </div>
            </a>
          ))}
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
          E D M
        </div>
      </div>
      <div className="bg-white w-full my-7"></div>

      <div className="relative min-h-screen flex items-center justify-center">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url(${SinglePic20})`,
            opacity: 0.75,
          }}></div>

        <div
          className="grid grid-cols-3 gap-16 w-[65%] h-[65%] z-10 relative"
          // The z-10 ensures the images appear above the background.
        >
          {edmImages.map((image, index) => (
            <a
              href={image.link}
              target="_blank"
              rel="noopener noreferrer"
              key={index}
              className="relative before:content-[''] before:block before:pb-[100%]">
              <img
                src={image.src}
                alt={`grid-img-${index}`}
                className="absolute inset-0 object-cover w-full h-full transition-transform transform hover:-translate-x-1 hover:-translate-y-1 cursor-pointer"
              />
              <div className="absolute bottom-0 left-0 w-full bg-black bg-opacity-100 text-center py-2">
                <p className="text-white text-xl">{image.text}</p>{" "}
              </div>
            </a>
          ))}
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
          B E A T S
        </div>
      </div>
      <div className="bg-white w-full my-7"></div>

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
              className="w-full h-full object-cover"
              loop
              controls
              onClick={(event) => {
                if (event.target.paused) {
                  event.target.play();
                } else {
                  event.target.pause();
                }
              }}>
              <source src={SingleVid} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>

          {/* Cell 2 & 8: Video 2 */}
          <div className="col-start-2 row-start-1 row-span-2 col-span-1 mb-24">
            <video
              className="w-full h-full object-cover"
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
          </div>

          {/* Cell 9 & 15: Video 3 */}
          <div className="col-start-3 row-start-2 row-span-2 col-span-1 mb-12 mt-12">
            <video
              className="w-full h-full object-cover"
              loop
              controls
              onClick={(event) => {
                if (event.target.paused) {
                  event.target.play();
                } else {
                  event.target.pause();
                }
              }}>
              <source src={SingleVid} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>

          {/* Cell 10 & 16: Video 4 */}
          <div className="col-start-4 row-start-2 row-span-2 col-span-1 mb-12 mt-12">
            <video
              className="w-full h-full object-cover"
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
          </div>

          {/* Cell 5 & 11: Video 5 */}
          <div className="col-start-5 row-start-1 row-span-2 col-span-1 mb-24">
            <video
              className="w-full h-full object-cover"
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
          </div>

          {/* Cell 6 & 12: Video 6 */}
          <div className="col-start-6 row-start-1 row-span-2 col-span-1 mt-24">
            <video
              className="w-full h-full object-cover"
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
          </div>

          {/* Cell 13 & 14: Video 7 */}
          <div className="col-start-1 row-start-3 col-span-2 mr-8 ml-8">
            <video
              className="w-full h-full object-cover"
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
          </div>

          {/* Cell 3 & 4: Video 8 */}
          <div className="col-start-3 row-start-1 col-span-2 mr-8 ml-8">
            <video
              className="w-full h-full object-cover"
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
          </div>

          {/* Cell 17 & 18: Video 9 */}
          <div className="col-start-5 row-start-3 col-span-2 mr-8 ml-8">
            <video
              className="w-full h-full object-cover"
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
          </div>
        </div>
      </div>

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
      <ScrollToTopButton />
    </PageContainer>
  );
};
export default Singles;
