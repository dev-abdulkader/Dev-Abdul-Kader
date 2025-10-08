"use client";

import { ReactLenis } from "lenis/react";
import { useScroll, useTransform, motion, useInView, useAnimation } from "framer-motion";
import { useEffect, useRef } from "react";

const videoData = [
    { src: "https://www.youtube.com/embed/cNWzmlCz6Dk" },
    { src: "https://www.youtube.com/embed/gwVcyRa5iSc" },
    { src: "https://www.youtube.com/embed/iMEmW4ts9mY" },
];

export default function VideoSection(): JSX.Element {
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
const BackgroundAnimation: React.FC = () => {
    const sectionRef = useRef(null);
    const inView = useInView(sectionRef, { amount: 0.5, once: true }); // trigger only once
    const controls = useAnimation();

    useEffect(() => {
        if (inView) {
            controls.start({ height: "100%" }); // grow when in view
        }
    }, [inView, controls]);

    return (
        <>
            {/* Observed text section */}
            <div ref={sectionRef} className="absolute top-0 left-0 w-full h-screen" />

            {/* Animated background */}
            <motion.div
                className="absolute top-0 left-0 w-full bg-slate-900 z-0"
                initial={{ height: 0 }}
                animate={controls}
                transition={{ duration: 1.5, ease: "easeInOut" }}
            />
        </>
    );
};






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
            className="h-screen flex justify-center items-center sticky top-0"
        >
            <motion.div
                style={{ backgroundColor: "#000", y: translateY }}
                className="flex flex-col items-center justify-center h-[500px] w-[70%] rounded-xl p-6 shadow-xl"
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
