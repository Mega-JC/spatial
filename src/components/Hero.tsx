"use client";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { motion } from "framer-motion";

import { fadeInRight, fadeInTop } from "@/utils/motion_animation_props";
import Link from "next/link";

// The aspect ratio of 1920x1024 is :
export default function Hero() {
  return (
    <section className="container relative flex min-h-screen w-full flex-col items-center justify-center md:aspect-[15/8]">
      <motion.video
        {...fadeInTop}
        transition={{ ...fadeInTop.transition, delay: 0.5 }}
        className="absolute h-full object-cover"
        muted
        loop
        autoPlay
        playsInline
      >
        <source
          src="/videos/spatial_aero_hero_media_1080x1024_10s.mp4"
          type="video/mp4"
        />
        Your browser does not support the video tag.
      </motion.video>
      <div className="bg-gradient-radial to-dark-purple absolute h-full w-full from-transparent object-cover md:to-60% to-75%"></div>
      <div className="absolute top-0 flex h-full w-full flex-col items-center justify-start">
        <motion.div
          className="mb-48 mt-24 text-center"
          {...fadeInTop}
          transition={{ ...fadeInTop.transition, delay: 1 }}
        >
          <div className="text-lg md:text-2xl">Introducing</div>
          <div className="text-[3em] font-medium md:text-[4em]">
            SPATIAL AERO.
          </div>
        </motion.div>
        <motion.div
          {...fadeInTop}
          transition={{ ...fadeInTop.transition, delay: 2 }}
          className="mb-8 text-center text-sm md:text-lg"
        >
          The clearest, fastest and most secure card ever created.
          <br />
          Tinted to your preferences.
        </motion.div>
        <motion.div
          {...fadeInRight}
          initial={{ x: "-100%", opacity: fadeInRight.initial.opacity }}
          className="bg-alabaster hover:border-alabaster hover:text-alabaster w-32 border-2 border-night p-2 font-bold text-night transition-colors hover:bg-night active:bg-gray-500"
          transition={{ ...fadeInRight.transition, duration: 1, delay: 2.5 }}
        >
          <Link href="#">
            Learn More{" "}
            <FontAwesomeIcon
              className="relative left-0.5 top-0.5"
              icon={faArrowRight}
            />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
