'use client';

import { useState } from 'react';

const videoLinks = [
    {
        url: "https://www.youtube.com/watch?v=iMEmW4ts9mY",
        title: "Internalization in Next.js",
    },
    {
        url: "https://www.youtube.com/watch?v=cNWzmlCz6Dk",
        title: "Filter Method in JavaScript",
    },
    {
        url: "https://www.youtube.com/watch?v=gwVcyRa5iSc",
        title: "let vs const in JavaScript",
    },

];

// Helper function to extract video ID from YouTube URL
const getVideoId = (url: string) => {
    return url.split("v=")[1]?.split("&")[0];
};

export function VideoSection() {
    const videos = videoLinks.map((video) => {
        const id = getVideoId(video.url);
        return {
            id,
            title: video.title,
            embedUrl: `https://www.youtube.com/embed/${id}`,
            thumbnail: `https://img.youtube.com/vi/${id}/hqdefault.jpg`,
        };
    });

    const [selectedVideo, setSelectedVideo] = useState(videos[0]);

    return (
        <section className="w-full bg-background py-16 px-4">
            <div className="max-w-6xl mx-auto">
                {/* Header */}
                <div className="mb-12 md:mb-16 flex flex-col items-center justify-center text-center">
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-balance mb-4">
                        My YouTube Videos
                    </h2>
                    <p className="text-lg text-muted-foreground max-w-2xl">
                        Explore my collection of in-depth tutorials, guides, and technical content covering modern web development and advanced programming techniques.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

                    {/* Video Player */}
                    <div className="lg:col-span-2">
                        <iframe
                            src={selectedVideo.embedUrl}
                            className="w-full aspect-video rounded-lg border"
                            allowFullScreen
                        />
                    </div>

                    {/* Playlist */}
                    <div className="space-y-3">
                        {videos.map(video => (
                            <button
                                key={video.id}
                                onClick={() => setSelectedVideo(video)}
                                className={`flex gap-3 p-2 border rounded-lg w-full text-left transition-all ${selectedVideo.id === video.id
                                    ? "border-accent bg-accent/10"
                                    : "border-gray-300"
                                    }`}
                            >
                                <img
                                    src={video.thumbnail}
                                    alt={video.title}
                                    className="w-24 rounded"
                                />
                                <span className="font-medium">{video.title}</span>
                            </button>
                        ))}
                    </div>

                </div>
            </div>
        </section>
    );
}