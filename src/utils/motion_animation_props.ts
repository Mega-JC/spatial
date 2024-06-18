export const fadeInTop = {
  initial: { y: 20, opacity: 0 },
  animate: { y: 0, opacity: 1 },
  transition: { ease: "easeInOut", duration: 0.75 },
};

export const fadeInBottom = {
  initial: { y: -20, opacity: 0 },
  animate: { y: 0, opacity: 1 },
  transition: { ease: "easeInOut", duration: 0.75 },
};

export const fadeInLeft = {
  initial: { x: "-20%", opacity: 0 },
  animate: { x: 0, opacity: 1 },
  transition: { ease: "easeInOut", duration: 0.75 },
};

export const fadeInRight = {
  initial: { x: -20, opacity: 0 },
  animate: { x: 0, opacity: 1 },
  transition: { ease: "easeInOut", duration: 0.75 },
};

export const fadeIn = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  transition: { ease: "easeInOut", duration: 0.75 },
};

export const fadeOut = {
  initial: { opacity: 1 },
  animate: { opacity: 0 },
  transition: { ease: "easeInOut", duration: 0.75 },
};
