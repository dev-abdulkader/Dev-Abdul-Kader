"use client"
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/scrollbar';
import { Scrollbar, Autoplay } from 'swiper/modules';

const videoData = [
  {
    src: 'https://www.youtube.com/embed/cNWzmlCz6Dk',
    title: 'YouTube video player 1',
  },
  {
    src: 'https://www.youtube.com/embed/gwVcyRa5iSc',
    title: 'YouTube video player 2',
  },
  {
    src: 'https://www.youtube.com/embed/iMEmW4ts9mY',
    title: 'YouTube video player 3',
  },
];

export default function MyVideos() {
  return (
    <section className="py-20 bg-slate-900 px-4 md:px-12">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-4xl md:text-7xl font-bold text-white mb-16">
          Check My Videos
        </h2>

        <Swiper
          scrollbar={{ hide: true }}
          autoplay={{
            delay: 2000, // 2 seconds
            disableOnInteraction: false, // Continue autoplay after user interaction
          }}
          modules={[Scrollbar, Autoplay]}
          className="mySwiper"
        >
          {videoData.map((video, index) => (
            <SwiperSlide key={index}>
              <div className="rounded-2xl  shadow-xl border overflow-hidden border-slate-700 bg-slate-800 md:col-span-2 h-[90vh]">
                <iframe
                  className="w-full h-full object-cover rounded-xl"
                  src={video.src}
                  title={video.title}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}