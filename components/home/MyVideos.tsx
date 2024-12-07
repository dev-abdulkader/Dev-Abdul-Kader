import React from "react";
import AnimatedWord from "../motion/AnimatedWord";

const MyVideos = () => {
  return (
    <div className="py-10 bg-slate-800">
      <AnimatedWord
        text="Check My Videos"
        className="text-center text-slate-500 text-7xl py-5 sm:text-[4rem] md:text-[6rem] lg:text-[8rem] xl:text-[10rem] font-bonny-regular"
      />
      <div className="flex justify-center py-5">
        <iframe
          className="rounded-2xl"
          width="560"
          height="315"
          src="https://www.youtube.com/embed/cNWzmlCz6Dk"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
};

export default MyVideos;
