import React from "react";
import AnimatedWord from "../motion/AnimatedWord";

const MyVideos = () => {
  return (
    <div className="py-10 bg-slate-800">
      <h2 className="text-3xl text-white  md:text-7xl mb-10  text-center">
        Check My Videos
      </h2>
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
