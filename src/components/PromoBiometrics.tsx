import React, { useRef } from "react";
import Image from "next/image";
import glowingBiometrics from "/public/images/glowing_biometrics.png";
import { motion, useInView } from "framer-motion";
import { fadeInLeft, fadeInRight } from "@/utils/motion_animation_props";

const PromoBiometrics = () => {
  const textRef = useRef(null);
  const imageRef = useRef(null);
  const textInView = useInView(textRef, { amount: 1, once: false});
  const imageInView = useInView(imageRef, { amount: 1, once: false });

  return (
    <section className="container relative flex min-h-screen w-full flex-col items-center md:justify-between px-12 py-20 md:flex-row">
      <motion.div
        ref={textRef}
        {...fadeInLeft}
        transition={{ ...fadeInLeft.transition, delay: 1 }}
        className="relative z-10 md:mr-8 w-full max-w-lg"
      >
        <h2 className="mb-4 text-4xl font-bold text-center md:text-left">The Biometric Revolution</h2>
        <p className="text-lg text-alabaster/60">
          Experience the future of secure payment with our Spatial Biosonic
          &trade; technology. Pay beyond boundaries, whether locally or online.
          <br />
          <br />
          Available on select NOBLE and NOBLE Business cards.
        </p>
      </motion.div>
      <motion.div
        ref={imageRef}
        {...fadeInRight}
        transition={{ ...fadeInRight.transition, delay: 1 }}
        className="relative md:ml-8 w-full max-w-lg"
      >
        <Image
          src={glowingBiometrics}
          alt="Glowing Biometrics"
          className="object-cover"
          layout="responsive"
        />
      </motion.div>
    </section>
  );
};

export default PromoBiometrics;
