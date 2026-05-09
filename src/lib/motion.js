export const animations = {
  fadeUp: {
    initial: {
      opacity: 0,
      y: 30,
    },

    animate: {
      opacity: 1,
      y: 0,
    },

    exit: {
      opacity: 0,
      y: 30,
    },
  },

  fadeDown: {
    initial: {
      opacity: 0,
      y: -30,
    },

    animate: {
      opacity: 1,
      y: 0,
    },

    exit: {
      opacity: 0,
      y: -30,
    },
  },

  fade: {
    initial: {
      opacity: 0,
    },

    animate: {
      opacity: 1,
    },

    exit: {
      opacity: 0,
    },
  },

  scale: {
    initial: {
      opacity: 0,
      scale: 0.95,
    },

    animate: {
      opacity: 1,
      scale: 1,
    },

    exit: {
      opacity: 0,
      scale: 0.95,
    },
  },

  slideLeft: {
    initial: {
      opacity: 0,
      x: 40,
    },

    animate: {
      opacity: 1,
      x: 0,
    },

    exit: {
      opacity: 0,
      x: 40,
    },
  },

  slideRight: {
    initial: {
      opacity: 0,
      x: -40,
    },

    animate: {
      opacity: 1,
      x: 0,
    },

    exit: {
      opacity: 0,
      x: -40,
    },
  },
};

export const transitions = {
  smooth: {
    duration: 0.4,
    ease: "easeInOut",
  },

  slow: {
    duration: 0.7,
    ease: "easeInOut",
  },

  spring: {
    type: "spring",
    stiffness: 120,
    damping: 18,
  },
};