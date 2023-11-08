import React, { useRef } from "react"; // useState in {}
import PageContainer from "../components/PageContainer.component";

// import PianoPic1 from "../pictures/PianoPic1.jpg";
import PianoPic2 from "../pictures/PianoPic2.jpg";
import PianoPic3 from "../pictures/PianoPic3.jpg";
// import PianoPic4 from "../pictures/PianoPic4.jpg";
import PianoPic5 from "../pictures/PianoPic5.jpg";
import PianoPic6 from "../pictures/PianoPic6.jpg";
import PianoPic7 from "../pictures/PianoPic7.jpg";
// import PianoPic8 from "../pictures/PianoPic8.jpg";
import PianoPic9 from "../pictures/PianoPic9.jpg";
import PianoPic10 from "../pictures/PianoPic10.jpg";

import PianoVid1 from "../pictures/PianoVid1.mp4";
import PianoVid2 from "../components/PianoVid2";
import PianoVid3 from "../components/PianoVid3";
import PianoVid4 from "../components/PianoVid4";
import PianoVid5 from "../components/PianoVid5";
import PianoVid6 from "../components/PianoVid6";
import PianoVid7 from "../components/PianoVid7";
import PianoVid8 from "../pictures/PianoVid8.mp4";
import PianoVid9 from "../pictures/PianoVid9.mp4";
import PianoVid10 from "../pictures/PianoVid10.mp4";

import ScrollToTopButton from "../components/ScrollToTopButton";
import DropDown from "../components/DropDown";

const Piano = () => {
  const videoRef = useRef(null);
  //   const [isPlaying, setIsPlaying] = useState(false);
  const videoRef1 = useRef(null);
  const videoRef2 = useRef(null);

  const handleVideoClick = (e) => {
    // We'll check if the user clicked on the video itself and not on the controls
    if (e.target === videoRef.current) {
      if (videoRef.current.paused) {
        videoRef.current.play();
      } else {
        videoRef.current.pause();
      }
    }
  };

  const handleVideoHover = () => {
    videoRef.current.controls = true; // Show controls on hover
  };

  const handleVideoLeave = () => {
    videoRef.current.controls = false; // Hide controls on mouse leave
  };

  return (
    <PageContainer>
      <div className="relative w-full h-screen">
        <div
          className="absolute top-0 left-0 w-full h-full bg-cover opacity-70"
          style={{ backgroundImage: `url(${PianoPic5})` }}></div>

        <div className="absolute inset-0 grid grid-cols-4 grid-rows-3 gap-8 m-24">
          <div className="col-start-1 col-span-2 row-start-1 row-span-2 bg-black bg-opacity-70 flex justify-center">
            <div className="mt-16">
              <DropDown />
            </div>
          </div>

          <div
            className="col-start-3 col-span-2 row-start-1 row-span-2 bg-cover bg-center"
            style={{ backgroundImage: `url(${PianoPic7})` }}></div>

          <div className="col-start-1 col-span-4 row-start-3 row-span-1 bg-black bg-opacity-70 flex items-center justify-center">
            <div className="bg-white p-4 m-4 rounded">
              <div className="text-black text-xl text-center">
                Some Text Here Some Text Here Some Text Here Some Text Here Some
                Text Here Some Text Here Some Text Here Some Text Here Some Text
                Here Some Text Here Some Text Here Some Text Here
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white w-full my-7"></div>
      <div
        className="overflow-hidden bg-black h-10 flex items-center justify-center"
        id="duet">
        <div
          className="flex text-white text-xl sm:text-2xl md:text-3xl lg:text-4xl whitespace-nowrap"
          style={{
            animation: "marqueeLeft 5s linear infinite",
            animationDirection: "normal",
          }}>
          D U E T
        </div>
      </div>
      <div className="bg-white w-full my-7"></div>

      <div className="relative w-full h-screen flex items-center justify-center">
        <div
          className="absolute blur-sm top-0 left-0 w-full h-full bg-cover opacity-100"
          style={{ backgroundImage: `url(${PianoPic2})` }}></div>
        <div className="relative z-10 w-2/5 h-[87%] mb-24 mt-12">
          <video
            ref={videoRef}
            src={PianoVid1}
            className="w-full h-full object-cover"
            controls
            onClick={handleVideoClick}
            onMouseMove={handleVideoHover}
            onMouseLeave={handleVideoLeave}></video>
          <div className="bg-black text-white text-2xl text-center h-11">
            Libertango - A. Piazzolla
          </div>
        </div>
      </div>

      <div className="bg-white w-full my-7"></div>
      <div
        className="overflow-hidden bg-black h-10 flex items-center justify-center"
        id="accompanying">
        <div
          className="flex text-white text-xl sm:text-2xl md:text-3xl lg:text-4xl whitespace-nowrap"
          style={{
            animation: "marqueeLeft 5s linear infinite",
            animationDirection: "normal",
          }}>
          A C C O M P A N Y I N G
        </div>
      </div>
      <div className="bg-white w-full my-7"></div>

      <div
        className="relative h-screen w-screen"
        style={{ background: `url(${PianoPic3}) no-repeat center/cover` }}>
        <div
          className="absolute inset-0"
          style={{ backgroundColor: "rgba(255, 255, 255, 0.25)" }}></div>

        <div className="absolute inset-0 grid grid-cols-3 grid-rows-3 gap-6 px-36 py-16">
          <div className="relative col-start-1 col-end-3 row-start-1 row-end-3 bg-red-300 w-full h-full">
            <PianoVid4 className="absolute inset-0 w-full h-full object-cover" />
          </div>

          <div className="relative col-start-1 col-end-2 row-start-3 row-end-4 bg-blue-300 w-full h-full">
            <PianoVid3 className="absolute inset-0 w-full h-full object-cover" />
          </div>

          <div className="relative col-start-2 col-end-3 row-start-3 row-end-4 bg-yellow-300 w-full h-full">
            <PianoVid2 className="absolute inset-0 w-full h-full object-cover" />
          </div>

          <div className="relative col-start-3 col-end-4 row-start-1 row-end-2 bg-green-300 w-full h-full">
            <PianoVid5 className="absolute inset-0 w-full h-full object-cover" />
          </div>

          <div className="relative col-start-3 col-end-4 row-start-2 row-end-3 bg-purple-300 w-full h-full">
            <PianoVid6 className="absolute inset-0 w-full h-full object-cover" />
          </div>

          <div className="relative col-start-3 col-end-4 row-start-3 row-end-4 bg-pink-300 w-full h-full">
            <PianoVid7 className="absolute inset-0 w-full h-full object-cover" />
          </div>
        </div>
      </div>

      <div className="bg-white w-full my-7"></div>
      <div
        className="overflow-hidden bg-black h-10 flex items-center justify-center"
        id="covers">
        <div
          className="flex text-white text-xl sm:text-2xl md:text-3xl lg:text-4xl whitespace-nowrap"
          style={{
            animation: "marqueeLeft 5s linear infinite",
            animationDirection: "normal",
          }}>
          C O V E R S
        </div>
      </div>
      <div className="bg-white w-full my-7"></div>

      <div className="relative w-full h-screen flex items-center justify-center">
        <div
          className="absolute top-0 left-0 w-full h-full bg-cover opacity-80"
          style={{ backgroundImage: `url(${PianoPic6})` }}></div>

        <div className="grid grid-cols-3 grid-rows-3 gap-4 w-full h-auto md:h-screen bg-black px-4 py-8">
          {/* First Video */}
          <div className="col-start-1 col-span-1 row-start-1 row-span-3 relative flex items-center justify-center mx-4 sm:mx-8 md:mx-4 my-8">
            <video
              ref={videoRef1}
              src={PianoVid10}
              className="w-full h-full object-cover"
              controls
              onClick={handleVideoClick}
              onMouseMove={handleVideoHover}
              onMouseLeave={handleVideoLeave}></video>
          </div>

          {/* Text for 2 with right margin */}
          <div className="col-start-2 col-span-1 row-start-1 row-span-1 bg-white text-black text-2xl opacity-95 flex items-center justify-center mt-12 h-1/4 w-[85%]">
            I'm not the only one - Sam Smith
          </div>

          {/* Second Video */}
          <div className="col-start-3 col-span-1 row-start-1 row-span-3 relative flex items-center justify-center mx-4 sm:mx-8 md:mx-4 my-8">
            <video
              ref={videoRef2}
              src={PianoVid9}
              className="w-full h-full object-cover"
              controls
              poster={PianoPic10}
              onClick={handleVideoClick}
              onMouseMove={handleVideoHover}
              onMouseLeave={handleVideoLeave}></video>
          </div>

          {/* Text for 8 with left margin */}
          <div className="col-start-2 col-span-1 row-start-3 row-span-1 bg-white text-black text-2xl opacity-95 flex items-center justify-center ml-20 mb-12 h-1/4 w-[85%]">
            All I ask - Adele
          </div>
        </div>
      </div>

      <div className="bg-white w-full my-7"></div>
      <div
        className="overflow-hidden bg-black h-10 flex items-center justify-center"
        id="mashup">
        <div
          className="flex text-white text-xl sm:text-2xl md:text-3xl lg:text-4xl whitespace-nowrap"
          style={{
            animation: "marqueeLeft 5s linear infinite",
            animationDirection: "normal",
          }}>
          M A S H U P
        </div>
      </div>
      <div className="bg-white w-full my-7"></div>

      <div className="relative w-full h-screen flex items-center justify-center">
        <div
          className="absolute top-0 left-0 w-full h-full bg-cover opacity-80"
          style={{ backgroundImage: `url(${PianoPic9})` }}></div>
        <div className="relative z-10 w-[27%] h-[83%] mb-36 mt-24">
          <video
            ref={videoRef}
            src={PianoVid8}
            className="w-full h-full object-cover"
            controls
            onClick={handleVideoClick}
            onMouseMove={handleVideoHover}
            onMouseLeave={handleVideoLeave}></video>
          <div className="bg-black text-white text-2xl text-center h-17">
            Fur Elise (Beethoven) x Waltz in A minor, B. 150, Op. Posth.(Chopin)
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

export default Piano;
