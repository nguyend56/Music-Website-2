import React from "react";
import bg from "../pictures/HomePageBg2.jpg";
import bg2 from "../pictures/HomePage2Bg2.jpg";
import bg3 from "../pictures/HomePage3Bg.jpg";
import bg4 from "../pictures/HomePage4Bg.jpg";
import HomePageVid from "../components/HomePageVid";
import HomePageVid2 from "../components/HomePageVid2";
import HomePageVid3 from "../components/HomePageVid3";
import PageContainer from "../components/PageContainer.component";
import ScrollToTopButton from "../components/ScrollToTopButton";
import IconEmail from "../components/IconEmail";

const HomePage = () => {
  const handleLinkClick = (link) => {
    window.location.href = link;
  };

  return (
    <PageContainer>
      <div
        className="bg-cover bg-center min-h-screen flex items-center justify-center"
        style={{
          backgroundImage: `url(${bg})`,
          opacity: 1.0,
        }}>
        <HomePageVid />
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

      <div className="bg-white w-full my-7"></div>
      <div className="overflow-hidden bg-black h-10 flex items-center justify-center">
        <div
          className="flex text-white text-xl sm:text-2xl md:text-3xl lg:text-4xl whitespace-nowrap"
          style={{
            animation: "marqueeLeft 5s linear infinite",
            animationDirection: "normal",
          }}>
          P L A T F O R M S
        </div>
      </div>
      <div className="bg-white w-full my-7"></div>

      <div
        className="bg-cover bg-center min-h-screen flex flex-col items-center justify-center p-8"
        style={{
          backgroundImage: `url(${bg3})`,
          opacity: 1.0,
        }}>
        <div className="flex flex-col space-y-4 w-full text-2xl items-center opacity-90">
          <div
            className="bg-white text-black p-4 rounded-lg flex items-center cursor-pointer hover:bg-gray-400"
            onClick={() =>
              handleLinkClick(
                "https://open.spotify.com/artist/3z8Q8sUNWlsyMKkdTIjxLS"
              )
            }>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="64"
              height="64"
              fill="green"
              className="bi bi-spotify"
              viewBox="0 0 16 16"
              style={{ width: "64px", height: "64px", marginRight: 10 }}>
              <path d="M8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0zm3.669 11.538a.498.498 0 0 1-.686.165c-1.879-1.147-4.243-1.407-7.028-.77a.499.499 0 0 1-.222-.973c3.048-.696 5.662-.397 7.77.892a.5.5 0 0 1 .166.686zm.979-2.178a.624.624 0 0 1-.858.205c-2.15-1.321-5.428-1.704-7.972-.932a.625.625 0 0 1-.362-1.194c2.905-.881 6.517-.454 8.986 1.063a.624.624 0 0 1 .206.858zm.084-2.268C10.154 5.56 5.9 5.419 3.438 6.166a.748.748 0 1 1-.434-1.432c2.825-.857 7.523-.692 10.492 1.07a.747.747 0 1 1-.764 1.288z" />
            </svg>
            <div>Spotify</div>
          </div>

          <div
            className="bg-white text-black p-4 rounded-lg flex items-center cursor-pointer hover:bg-gray-400"
            onClick={() =>
              handleLinkClick(
                "https://music.apple.com/us/artist/bobthecoin/1657968088"
              )
            }>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="64"
              height="64"
              className="bi bi-apple"
              viewBox="0 0 16 16"
              style={{
                width: "64px",
                height: "64px",
                fill: "black",
                marginRight: 10,
              }}>
              <path d="M11.182.008C11.148-.03 9.923.023 8.857 1.18c-1.066 1.156-.902 2.482-.878 2.516.024.034 1.52.087 2.475-1.258.955-1.345.762-2.391.728-2.43Zm3.314 11.733c-.048-.096-2.325-1.234-2.113-3.422.212-2.189 1.675-2.789 1.698-2.854.023-.065-.597-.79-1.254-1.157a3.692 3.692 0 0 0-1.563-.434c-.108-.003-.483-.095-1.254.116-.508.139-1.653.589-1.968.607-.316.018-1.256-.522-2.267-.665-.647-.125-1.333.131-1.824.328-.49.196-1.422.754-2.074 2.237-.652 1.482-.311 3.83-.067 4.56.244.729.625 1.924 1.273 2.796.576.984 1.34 1.667 1.659 1.899.319.232 1.219.386 1.843.067.502-.308 1.408-.485 1.766-.472.357.013 1.061.154 1.782.539.571.197 1.111.115 1.652-.105.541-.221 1.324-1.059 2.238-2.758.347-.79.505-1.217.473-1.282Z" />
            </svg>
            <div>Apple Music</div>
          </div>

          <div
            className="bg-white text-black p-4 rounded-lg flex items-center cursor-pointer hover:bg-gray-400"
            onClick={() =>
              handleLinkClick("https://www.youtube.com/@bobthecoin6728")
            }>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="64"
              height="64"
              className="bi bi-youtube"
              viewBox="0 0 16 16"
              style={{
                width: "64px",
                height: "64px",
                fill: "red",
                marginRight: 10,
              }}>
              <path d="M8.051 1.999h.089c.822.003 4.987.033 6.11.335a2.01 2.01 0 0 1 1.415 1.42c.101.38.172.883.22 1.402l.01.104.022.26.008.104c.065.914.073 1.77.074 1.957v.075c-.001.194-.01 1.108-.082 2.06l-.008.105-.009.104c-.05.572-.124 1.14-.235 1.558a2.007 2.007 0 0 1-1.415 1.42c-1.16.312-5.569.334-6.18.335h-.142c-.309 0-1.587-.006-2.927-.052l-.17-.006-.087-.004-.171-.007-.171-.007c-1.11-.049-2.167-.128-2.654-.26a2.007 2.007 0 0 1-1.415-1.419c-.111-.417-.185-.986-.235-1.558L.09 9.82l-.008-.104A31.4 31.4 0 0 1 0 7.68v-.123c.002-.215.01-.958.064-1.778l.007-.103.003-.052.008-.104.022-.26.01-.104c.048-.519.119-1.023.22-1.402a2.007 2.007 0 0 1 1.415-1.42c.487-.13 1.544-.21 2.654-.26l.17-.007.172-.006.086-.003.171-.007A99.788 99.788 0 0 1 7.858 2h.193zM6.4 5.209v4.818l4.157-2.408L6.4 5.209z" />
            </svg>
            <div>YouTube</div>
          </div>

          <div
            className="bg-white text-black p-4 rounded-lg flex items-center cursor-pointer hover:bg-gray-400"
            onClick={() =>
              handleLinkClick("https://soundcloud.com/vi-t-d-ng-nguy-n-102030")
            }>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="64"
              height="64"
              className="bi bi-soundwave"
              viewBox="0 0 16 16"
              style={{
                width: "64px",
                height: "64px",
                fill: "orangered",
                marginRight: 10,
              }}>
              <path
                fillRule="evenodd"
                d="M8.5 2a.5.5 0 0 1 .5.5v11a.5.5 0 0 1-1 0v-11a.5.5 0 0 1 .5-.5zm-2 2a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zm4 0a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zm-6 1.5A.5.5 0 0 1 5 6v4a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm8 0a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm-10 1A.5.5 0 0 1 3 7v2a.5.5 0 0 1-1 0V7a.5.5 0 0 1 .5-.5zm12 0a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0V7a.5.5 0 0 1 .5-.5z"
              />
            </svg>
            <div>SoundCloud</div>
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
          D E M O S
        </div>
      </div>
      <div className="bg-white w-full my-7"></div>

      <div
        className="bg-cover bg-center min-h-screen flex flex-col items-center justify-center p-8"
        style={{
          backgroundImage: `url(${bg2})`,
          opacity: 1.0,
        }}>
        <div className="flex md:space-x-24 space-x-0 md:w-[120%] w-full flex-col md:flex-row">
          <HomePageVid2 className="mb-4 md:mb-0" />
          <HomePageVid3 />
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
          C O N T A C T S
        </div>
      </div>
      <div className="bg-white w-full my-7"></div>

      <div
        className="bg-cover bg-center min-h-screen flex items-center justify-center relative"
        style={{
          backgroundImage: `url(${bg4})`,
          opacity: 1.0,
        }}>
        <div className="absolute w-[65%] h-[65%] bg-opacity-[45%] bg-slate-950"></div>
        <div
          className="absolute w-[50%] h-[45%] bg-opacity-[55%] bg-black"
          style={{
            opacity: 1,
          }}>
          <div className="grid grid-cols-2 grid-rows-2 h-full w-full gap-8 p-8">
            <div className="bg-white opacity-80 p-2 sm:p-3 md:p-4 lg:p-5 flex items-center justify-center">
              <div
                className="bg-white text-black p-2 sm:p-2 md:p-3 lg:p-3 rounded-lg flex items-center cursor-pointer transform hover:scale-110 transition duration-100"
                onClick={() =>
                  handleLinkClick(
                    "https://www.facebook.com/profile.php?id=100008400515541&mibextid=LQQJ4d"
                  )
                }>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="blue"
                  className="bi bi-facebook w-12 h-12 sm:w-12 sm:h-12 md:w-16 md:h-16 lg:w-18 lg:h-18 xl:w-20 xl:h-20"
                  viewBox="0 0 16 16">
                  <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z" />
                </svg>
              </div>
            </div>

            <div className="bg-white opacity-80 p-2 sm:p-3 md:p-4 lg:p-5 flex items-center justify-center">
              <div
                className="bg-white text-black p-2 sm:p-2 md:p-3 lg:p-3 rounded-lg flex items-center cursor-pointer transform hover:scale-110 transition duration-100"
                onClick={() =>
                  handleLinkClick(
                    "https://www.instagram.com/ocd.vietdung_dd/?hl=en"
                  )
                }>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="darkmagenta"
                  className="bi bi-instagram w-12 h-12 sm:w-12 sm:h-12 md:w-16 md:h-16 lg:w-18 lg:h-18 xl:w-20 xl:h-20"
                  viewBox="0 0 16 16">
                  <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z" />
                </svg>
              </div>
            </div>

            <div className="bg-white opacity-80 p-4 ">
              <IconEmail/>
            </div>

            <div className="bg-white opacity-80 p-4 flex flex-col items-center justify-center">
              <a
                href="tel:+15189861012"
                className="cursor-pointer transform hover:scale-110 transition duration-100 p-2 rounded-full flex items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className=" w-12 h-12 sm:w-8 sm:h-8 md:w-12 md:h-12 lg:w-16 lg:h-16 text-current cursor-pointer"
                  viewBox="0 0 16 16">
                  <path
                    fillRule="evenodd"
                    d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z"
                  />
                </svg>
              </a>
              <p className="mt-2 text-xs sm:text-sm md:text-base lg:text-lg xl:text-lg text-center">
                +1 (518) 986-1012
              </p>
            </div>
          </div>
        </div>
      </div>
      <ScrollToTopButton />
    </PageContainer>
  );
};

export default HomePage;
