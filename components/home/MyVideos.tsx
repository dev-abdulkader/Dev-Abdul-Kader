import React from "react";
import AnimatedWord from "../motion/AnimatedWord";

const MyVideos = () => {
  return (
    <div className="py-10 bg-slate-800">
      <AnimatedWord
        text="Check My Videos"
        className="text-center text-slate-500 text-7xl py-5 sm:text-[4rem] md:text-[6rem] lg:text-[8rem] xl:text-[10rem] font-bonny-regular"
      />
      <div className="flex justify-center py-5 gap-5 flex-col md:flex-row flex-wrap">
        <iframe
          className="rounded-2xl w-full sm:w-[560px] h-auto aspect-video"
          src="https://www.youtube.com/embed/cNWzmlCz6Dk"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
        <iframe
          className="rounded-2xl w-full sm:w-[560px] h-auto aspect-video"
          src="https://www.youtube.com/embed/gwVcyRa5iSc"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
        <iframe
          className="rounded-2xl w-full sm:w-[560px] h-auto aspect-video"
          src="https://www.youtube.com/embed/iMEmW4ts9mY"
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
