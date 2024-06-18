import React, { useRef } from "react";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

// Sample card images, replace with your actual images
import NeonCard from "/public/images/neon_card.png";
import ArgonCard from "/public/images/argon_card.png";
import AeroCard from "/public/images/aero_card.png";
import KryptonCard from "/public/images/krypton_card.png";
import { motion, useInView } from "framer-motion";
import { fadeInBottom, fadeInTop } from "@/utils/motion_animation_props";

const PromoCards = () => {
  const containerRef = useRef(null);
  const containerInView = useInView(containerRef, { amount: 0.5 });
  const cardData = [
    {
      image: NeonCard,
      title: "Neon",
      series: "Noble Series",
      description: "Enter the noble series with Spatial Neon.",
    },
    {
      image: ArgonCard,
      title: "Argon",
      series: "Noble Series",
      description: "Ascend to biometrics with Spatial Argon.",
    },
    {
      image: AeroCard,
      title: "Aero",
      series: "Noble Series Business",
      description:
        "The clearest, fastest and most secure card ever created. Move funds fast and lofty with Spatial Aero.",
    },
    {
      image: KryptonCard,
      title: "Krypton",
      series: "Noble Series Business",
      description:
        "The emerald green, 60% titanium business card and crypto wallet. Swipe heavier with Spatial Krypton.",
    },
  ];

  return (
    <motion.section
      ref={containerRef}
      {...fadeInTop}
      transition={{ ...fadeInTop.transition, delay: 0.5 }}
      className="mb-60 min-h-screen w-full py-20"
    >
      <div className="container mx-auto text-center">
        <h2 className="mb-20 text-4xl font-bold md:text-5xl">
          Join the Nobility
        </h2>
        <div className="flex flex-wrap justify-center space-x-6">
          {cardData.map((card, index) => (
            <motion.div
              whileHover={{
                scale: 1.05,
                transition: { duration: 0.1, delay: 0 },
              }}
              whileTap={{
                scale: 0.95,
                transition: { duration: 0.1, delay: 0 },
              }}
              animate={{...fadeInBottom.animate, transition: { duration: 0.75, delay: 0 }}}
              key={index}
              className="m-4 flex max-w-xs flex-col items-center rounded-lg p-4 transition-shadow hover:shadow-2xl hover:shadow-iris"
            >
              <Image src={card.image} alt={card.title} className="mb-4" />
              <div className="text-center">
                <h3 className="mb-2 text-xl font-bold">{card.title}</h3>
                <h4 className="text-alabaster/20 mb-2 text-xl font-light">
                  {card.series}
                </h4>
                <p className="text-alabaster/60 mb-4">{card.description}</p>
                <a
                  href="#"
                  className="inline-flex items-center text-blue-600 hover:text-blue-800"
                >
                  Learn More{" "}
                  <FontAwesomeIcon icon={faArrowRight} className="ml-2" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default PromoCards;
