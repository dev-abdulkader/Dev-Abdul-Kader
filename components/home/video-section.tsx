"use client";

import { ReactLenis } from "lenis/react";
import { useScroll, useTransform, motion, useInView, useAnimation } from "framer-motion";
import { useEffect, useRef } from "react";

const videoData = [
    { src: "https://www.youtube.com/embed/cNWzmlCz6Dk" },
    { src: "https://www.youtube.com/embed/gwVcyRa5iSc" },
    { src: "https://www.youtube.com/embed/iMEmW4ts9mY" },
];

export default function VideoSection() {
    return (
        <div className="min-h-screen relative ">
            <ReactLenis root>
                <main className="relative">



                    {/* Video Cards */}
                    <section className="w-full relative z-20 ">
                        {videoData.map((video, i) => (
                            <VideoCard key={i} video={video} />
                        ))}

                    </section>
                </main>
            </ReactLenis>
        </div>
    );
}

// ================= Background Animation =================
// ================= Background Animation triggered by "MY VIDEOS" =================
// ================= Background Animation triggered by "MY VIDEOS" =================







// ================= Video Card =================
interface VideoCardProps {
    video: { src: string };
}

const VideoCard: React.FC<VideoCardProps> = ({ video }) => {
    const container = useRef(null);
    const { scrollYProgress } = useScroll({
        target: container,
        offset: ["start end", "end start"],
    });

    const translateY = useTransform(scrollYProgress, [0, 1], [50, 0]);

    return (
        <div
            ref={container}
            className="md:h-screen bg-red-100 flex justify-center items-center sticky top-0"
        >
            <motion.div
                style={{ backgroundColor: "#000", y: translateY }}
                className="flex flex-col items-center justify-center w-[90vw] md:h-[500px] md:w-[70%] rounded-xl p-6 shadow-xl"
            >
                <div className="w-full h-full flex justify-center items-center">
                    <iframe
                        width="100%"
                        height="100%"
                        src={video.src}
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        className="rounded-lg"
                    ></iframe>
                </div>
            </motion.div>
        </div>
    );
};
