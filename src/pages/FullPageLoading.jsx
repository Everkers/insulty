import Ilustration from "assets/images/Saly-20.png"
import { motion } from "framer-motion"
const FullPageLoading = () => {
  const variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { duration: 0.3 },
    },
    exit: {
      opacity: 0,
    },
  }
  return (
    <motion.div
      variants={variants}
      initial='hidden'
      exit='exit'
      animate={"visible"}>
      <div className='w-full absolute top-0 left-0 flex justify-center items-center bg-white dark:bg-gray-900 h-screen'>
        <img
          class='h-60 animate-pulse'
          src={Ilustration}
          alt='ilustration-loading'
        />
      </div>
    </motion.div>
  )
}
export default FullPageLoading
