"use client";

import React, { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { AnimatedText } from "./animations/AnimatedText";

function Hero() {
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const videoRef = useRef(null);

  useEffect(() => {
    const video = videoRef.current;
    let isMounted = true;

    const tryPlay = async () => {
      if (video) {
        try {
          await video.play();
        } catch (err) {
          // Ignore harmless abort errors
          if (isMounted && err.name !== "AbortError") {
            console.warn("Video play failed:", err);
          }
        }
      }
    };

    tryPlay();

    return () => {
      isMounted = false;
    };
  }, []);

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !videoRef.current.muted;
      setIsMuted(videoRef.current.muted);
    }
  };

  return (
    <div className="relative h-[95vh] w-full overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0 z-0">
        <video
          ref={videoRef}
          className="object-cover w-full h-full"
          autoPlay
          loop
          muted={isMuted}
          playsInline
          onLoadedData={() => setIsVideoLoaded(true)}
          onError={() => setIsVideoLoaded(false)}
        >
          {/* You can replace these with your own video files */}
          <source
            // src="https://youtu.be/2Gg6Seob5Mg?list=PLGmxyVGSCDKvmLInHxJ9VdiwEb82Lxd2E"
            type="video/mp4"
          />
          <source
            // src="https://youtu.be/2Gg6Seob5Mg?list=PLGmxyVGSCDKvmLInHxJ9VdiwEb82Lxd2E"
            type="video/webm"
          />
          Your browser does not support the video tag.
        </video>

        {/* Video Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/70"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/30"></div>
      </div>

      {/* Video Controls */}
      <button
        onClick={toggleMute}
        className="absolute z-20 p-3 text-white transition-all duration-300 border rounded-full top-20 right-4 bg-black/30 backdrop-blur-sm hover:bg-black/50 border-white/20"
        aria-label={isMuted ? "Unmute video" : "Mute video"}
      >
        {isMuted ? (
          <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z"
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M17 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2"
            />
          </svg>
        ) : (
          <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z"
            />
          </svg>
        )}
      </button>

      {/* Hero Content */}
      <div className="relative z-10 flex items-center justify-center h-full">
        <div className="max-w-4xl px-4 mx-auto text-center sm:px-6 lg:px-7">
          {/* Main Heading */}
          <motion.h1
            className="text-2xl sm:text-6xl lg:text-[90px] font-bold text-white mb-6 font-ivy-presto leading-tight text-nowrap text-center place-self-center"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            Land the
            <motion.span
              className="text-[#FFDECE] text-nowrap"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.5, ease: "easeOut" }}
            >
              {" "}
              Global Remote Job
            </motion.span>
            <br />
            That Changes everything
          </motion.h1>

          {/* Scroll Indicator */}
          <motion.div
            className="absolute transform -translate-x-1/2 bottom-8 left-1/2"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1, ease: "easeOut" }}
          >
            <motion.div
              className="animate-bounce"
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.2 }}
            >
              <svg
                className="w-6 h-6 text-white/60"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 14l-7 7m0 0l-7-7m7 7V3"
                />
              </svg>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
