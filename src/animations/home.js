const homeAnimations = {
  title: {
    hidden: { opacity: 0, y: 50 },
    enter: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  },
  description: {
    sentence: {
      hidden: { opacity: 0 },
      visible: {
        opacity: 1,
        transition: { delay: 0.2, staggerChildren: 0.03 },
      },
    },
    letter: {
      hidden: { opacity: 0, y: 50 },
      visible: { opacity: 1, y: 0 },
    },
  },
  insults: {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
    },
  },
}
export default homeAnimations
