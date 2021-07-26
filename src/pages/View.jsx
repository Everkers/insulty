import {
  ExternalLinkIcon,
  ArrowLeftIcon,
  AnnotationIcon,
  ArrowCircleUpIcon,
  ArrowCircleDownIcon,
  HeartIcon,
} from "@heroicons/react/outline"
import Ilustration1 from "assets/images/doodle-4.png"
import Ilustration2 from "assets/images/doodle-5.png"
import { Link } from "react-router-dom"
import { motion } from "framer-motion"
const View = () => {
  const animation = {
    hidden: { opacity: 0, y: 500 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        ease: [0.25, 1, 0.5, 1],
        duration: 0.7,
      },
    },
    exit: {
      transition: {
        ease: [0.25, 1, 0.5, 1],
        delay: 1,
      },
      opacity: 0,
      y: 500,
    },
  }
  const navbarItem = {
    back: {
      hidden: { opacity: 0, x: 150 },
      visible: {
        opacity: 1,
        x: 0,
        transition: {
          duration: 0.7,
          ease: [0.25, 1, 0.5, 1],
          delay: 0.3,
        },
      },
      exit: {
        opacity: 0,
        x: -150,
      },
    },
    comment: {
      hidden: { opacity: 0, x: -150 },
      visible: {
        opacity: 1,
        x: 0,
        transition: {
          duration: 0.7,
          ease: [0.25, 1, 0.5, 1],
          delay: 0.6,
        },
      },
      exit: {
        opacity: 0,
        x: 150,
      },
    },
  }
  const insultCard = {
    container: {
      hidden: { opacity: 0 },
      visible: {
        opacity: 1,
        transition: {
          when: "beforeChildren",
          staggerChildren: 0.3,
          ease: [0.25, 1, 0.5, 1],
          duration: 0.7,
          delay: 0.5,
        },
      },
      exit: {
        opacity: 0,
        transition: {
          when: "afterChildren",
          staggerDirection: -1,
          staggerChildren: 0.2,
          ease: [0.25, 1, 0.5, 1],
          duration: 0.7,
          delay: 0.5,
        },
      },
    },
    item: {
      hidden: { opacity: 0, y: 200 },
      visible: {
        opacity: 1,
        y: 0,
        transition: {
          ease: [0.25, 1, 0.5, 1],
          duration: 0.7,
        },
      },
      exit: {
        y: 200,
        opacity: 0,
        transition: {
          ease: [0.25, 1, 0.5, 1],
          duration: 0.4,
        },
      },
    },
  }
  const DoodleAniamtion = {
    one: {
      hidden: { opacity: 0, x: -150, y: 250, rotate: 260 },
      visible: {
        opacity: 1,
        y: "64%",
        x: "-40%",
        rotate: 0,
        transition: {
          ease: [0.25, 1, 0.5, 1],
          duration: 0.7,
          delay: 1.3,
        },
      },
      exit: {
        transition: {
          ease: [0.25, 1, 0.5, 1],
          delay: 0.4,
        },
        x: "-400",
        y: "500",
        rotate: -100,
        opacity: 0,
      },
    },
    two: {
      hidden: { opacity: 0, x: 150, y: 250, rotate: 260 },
      visible: {
        opacity: 1,
        y: "64%",
        x: "30%",
        rotate: 0,
        transition: {
          ease: [0.25, 1, 0.5, 1],
          duration: 0.7,
          delay: 1.3,
        },
      },
      exit: {
        transition: {
          ease: [0.25, 1, 0.5, 1],
          delay: 0.4,
        },
        x: "-400",
        y: "500",
        rotate: -100,
        opacity: 0,
      },
    },
  }
  return (
    <motion.div
      initial={"hidden"}
      animate={"visible"}
      exit={"exit"}
      variants={animation}
      style={{
        background: "linear-gradient(244.41deg, #4338CA 37.27%, #4F46E5 71.5%)",
      }}
      class='absolute top-0 h-screen w-full overflow-y-auto md:overflow-hidden'>
      <div className=' md:px-0 px-5 py-6 max-w-3xl  relative  mx-auto sm:px-6 lg:max-w-7xl lg:px-8 '>
        <motion.img
          initial={"hidden"}
          animate={"visible"}
          exit={"exit"}
          variants={DoodleAniamtion.one}
          style={{
            bottom: 0,
            left: "-14%",
            width: "1000px",
            transform: "translate(-40%, 64%)",
          }}
          class='absolute hidden md:block'
          src={Ilustration1}
          alt='ilustration-doodle'
        />
        {/* Header  */}
        <div class='flex text-white w-full'>
          <Link to={"/"}>
            <motion.div
              initial={"hidden"}
              animate={"visible"}
              exit={"exit"}
              variants={navbarItem.back}
              class='flex space-x-3 items-center cursor-pointer'>
              <ArrowLeftIcon width={"20px"} />
              <span class='whitespace-nowrap'>Go back</span>
            </motion.div>
          </Link>
          <motion.div
            initial={"hidden"}
            animate={"visible"}
            exit={"exit"}
            variants={navbarItem.comment}
            class='ml-auto cursor-pointer'>
            <AnnotationIcon width={"25px"} />
          </motion.div>
        </div>
        {/* Content */}
        <div class='w-full my-10 mt-20  h-5/6 flex items-center justify-center '>
          <motion.div
            initial={"hidden"}
            animate={"visible"}
            exit={"exit"}
            variants={insultCard.container}
            class='md:w-2/3 md:px-0 px-5 w-full justify-center '>
            {/* Head */}
            <motion.div
              key='header'
              variants={insultCard.item}
              class='flex w-full items-center overflow-hidden'>
              <div class='flex space-x-4'>
                <div class='px-5 py-2 pl-2 space-x-2 flex items-center rounded-md text-white bg-indigo-500'>
                  <img
                    className='inline-block h-8 w-8 rounded-md'
                    src='https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
                    alt=''
                  />
                  <h1 class='font-semibold text-sm'>
                    <span class='font-normal opacity-60'>By </span>
                    Everkers
                  </h1>
                </div>
                <div class='px-5 py-2 space-x-2 flex items-center rounded-md text-white bg-indigo-500'>
                  <h1 class='font-normal text-sm'>League of legends</h1>
                </div>
              </div>
              <div class='ml-auto cursor-pointer text-white'>
                <ExternalLinkIcon width={"30px"} />
              </div>
            </motion.div>
            {/* Insult */}
            <motion.div
              key='insult'
              variants={insultCard.item}
              class='py-6 overflow-hidden'>
              <p class='text-3xl leading-relaxed text-white font-bold'>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer
              </p>
            </motion.div>
            {/* Actions */}
            <motion.div
              key='actions'
              variants={insultCard.item}
              class='flex items-center overflow-hidden'>
              <div class='text-white flex space-x-2 items-center'>
                <ArrowCircleUpIcon width={"40px"} />
                <ArrowCircleDownIcon class='opacity-50' width={"40px"} />
              </div>
              <div class='ml-auto'>
                <button
                  type='button'
                  className='text-grey-600 inline-flex items-center px-3 py-2 border border-transparent shadow-sm text-sm leading-4 font-medium rounded-full bg-white hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'>
                  <HeartIcon
                    className='-ml-0.5 mr-2 h-4 w-4'
                    aria-hidden='true'
                  />
                  Add to favorites
                </button>
              </div>
            </motion.div>
          </motion.div>
        </div>
        <motion.img
          initial={"hidden"}
          animate={"visible"}
          exit={"exit"}
          variants={DoodleAniamtion.two}
          style={{
            bottom: 0,
            right: "-14%",
            width: "1000px",
            transform: "translate(30%, 64%)",
          }}
          class='absolute hidden md:block'
          src={Ilustration2}
          alt='ilustration-doodle2'
        />
      </div>
    </motion.div>
  )
}
export default View
