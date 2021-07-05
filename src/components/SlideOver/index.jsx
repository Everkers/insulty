import React, { Fragment } from "react"
import PropTypes from "prop-types"
import { Dialog, Transition } from "@headlessui/react"
import { XIcon } from "@heroicons/react/outline"
const SlideOver = ({ open, onClose, title = "Panel Title", children ,resetForm }) => {
  return (
    <Transition.Root show={open} as={Fragment}>
      <Dialog
        as='div'
        static
        className='fixed inset-0 overflow-hidden'
        open={open}
        onClose={onClose}>
        <div className='absolute inset-0 overflow-hidden'>
          <Dialog.Overlay className='absolute inset-0' />
          <div className='fixed inset-y-0 right-0 pl-10 max-w-full flex'>
            <Transition.Child
              as={Fragment}
              enter='transform transition ease-in-out duration-500 sm:duration-700'
              enterFrom='translate-x-full'
              enterTo='translate-x-0'
              leave='transform transition ease-in-out duration-500 sm:duration-700'
              leaveFrom='translate-x-0'
              leaveTo='translate-x-full'>
              <div className='w-screen max-w-md'>
                <div className='h-full  flex flex-col bg-white  dark:bg-gray-900 shadow-xl'>
                  <div className='min-h-0 flex-1 flex flex-col py-6 overflow-y-scroll'>
                    <div className='px-4 sm:px-6'>
                      <div className='flex items-start justify-between'>
                        <Dialog.Title className='text-lg font-medium text-gray-800 dark:text-gray-50'>
                          {title}
                        </Dialog.Title>
                        <div className='ml-3 h-7 flex items-center'>
                          <button
                            className=' text-gray-400 hover:text-gray-500 focus:outline-none '
                            onClick={onClose}>
                            <span className='sr-only'>Close panel</span>
                            <XIcon className='h-6 w-6' aria-hidden='true' />
                          </button>
                        </div>
                      </div>
                    </div>
                    <div className='mt-6 relative flex-1 px-4 sm:px-6'>
                      {children}
                    </div>
                  </div>
                  <div className='flex-shrink-0 px-4 py-4 flex justify-end'>
                    <button
                      type='button'
                      onClick={onClose}
                      className='border-gray-300 border dark:border-gray-800 dark:bg-gray-700 py-2 px-4 rounded-md shadow-sm text-sm font-medium text-gray-800 dark:text-gray-50 hover:bg-gray-100 dark:hover:bg-gray-800 focus:outline-none  '>
                      Close
                    </button>

                    <button
                    onClick={resetForm}
                      type='submit'
                      className='ml-3 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none '>
                      Reset
                    </button>
                  </div>
                </div>
              </div>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  )
}
export default SlideOver
SlideOver.prototype = {
  open: PropTypes.bool,
  onClose: PropTypes.func,
  title: PropTypes.string,
  children: PropTypes.node.isRequired,
}
