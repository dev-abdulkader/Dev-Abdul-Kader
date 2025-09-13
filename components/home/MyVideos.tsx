import React from "react";

const MyVideos = () => {
  return (
    <section className="py-20 bg-slate-900 px-4 md:px-12">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-4xl md:text-7xl font-bold text-white mb-16">
          Check My Videos
        </h2>

        <div className="grid gap-12 grid-cols-1 md:grid-cols-2">
          <div className="rounded-2xl overflow-hidden shadow-xl border border-slate-700 bg-slate-800">
            <iframe
              className="w-full aspect-video"
              src="https://www.youtube.com/embed/cNWzmlCz6Dk"
              title="YouTube video player 1"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
          <div className="rounded-2xl overflow-hidden shadow-xl border border-slate-700 bg-slate-800">
            <iframe
              className="w-full aspect-video"
              src="https://www.youtube.com/embed/gwVcyRa5iSc"
              title="YouTube video player 2"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
          <div className="rounded-2xl overflow-hidden shadow-xl border border-slate-700 bg-slate-800 md:col-span-2">
            <iframe
              className="w-full aspect-video"
              src="https://www.youtube.com/embed/iMEmW4ts9mY"
              title="YouTube video player 3"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MyVideos;
