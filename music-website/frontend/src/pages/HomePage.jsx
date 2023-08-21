import React from "react";
import bg from "../pictures/HomePageBg2.jpg";
import bg2 from "../pictures/HomePage2Bg2.jpg";
import HomePageVid from "../components/HomePageVid";
import HomePageVid2 from "../components/HomePageVid2";
import HomePageVid3 from "../components/HomePageVid3";
import PageContainer from "../components/PageContainer.component";

const HomePage = () => {
  return (
    <PageContainer>
      <div
        className="bg-cover bg-center min-h-screen flex items-center justify-center"
        style={{
          backgroundImage: `url(${bg})`,
          opacity: 1.0,
          marginBottom: 50
        }}
      >
        <HomePageVid />
      </div>
      <div className="text-center text-3xl w-full">Demos</div>
      <div
        className="bg-cover bg-center min-h-screen flex flex-col items-center justify-center p-8"
        style={{
          backgroundImage: `url(${bg2})`,
          opacity: 1.0,
          marginTop: 50,
        }}
      >
      
        <div className="flex space-x-4 w-[120%]">
          <HomePageVid2 />
          <HomePageVid3 />
        </div>
      </div>
    </PageContainer>
  );
};

export default HomePage;
