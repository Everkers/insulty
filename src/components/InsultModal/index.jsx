import { Fragment } from "react"
import { Dialog, Transition } from "@headlessui/react"
import Select from "components/Select"
import { useRootContext } from "contexts/root-provider"
export default function Example() {
  const { state, dispatch } = useRootContext()
  const closeModal = () => {
    dispatch({
      type: "set_insult_modal",
      payload: false,
    })
  }
  const onSubmit = () => {
    dispatch({
      type: "set_notification",
      payload: { message: "Insult have been created", show: true },
    })
    dispatch({
      type: "set_insult_modal",
      payload: false,
    })
  }
  return (
    <Transition.Root show={state.insultModalShow} as={Fragment}>
      <Dialog
        as='div'
        static
        className='fixed z-10 inset-0 '
        open={state.insultModalShow}
        onClose={closeModal}>
        <div className='flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0'>
          <Transition.Child
            as={Fragment}
            enter='ease-out duration-300'
            enterFrom='opacity-0'
            enterTo='opacity-100'
            leave='ease-in duration-200'
            leaveFrom='opacity-100'
            leaveTo='opacity-0'>
            <Dialog.Overlay className='fixed inset-0 bg-gray-500 bg-opacity-75 dark:bg-gray-900 dark:bg-opacity-90 transition-opacity' />
          </Transition.Child>

          {/* This element is to trick the browser into centering the modal contents. */}
          <span
            className='hidden sm:inline-block sm:align-middle sm:h-screen'
            aria-hidden='true'>
            &#8203;
          </span>
          <Transition.Child
            as={Fragment}
            enter='ease-out duration-300'
            enterFrom='opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95'
            enterTo='opacity-100 translate-y-0 sm:scale-100'
            leave='ease-in duration-200'
            leaveFrom='opacity-100 translate-y-0 sm:scale-100'
            leaveTo='opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95'>
            <div className='inline-block align-bottom bg-white dark:bg-gray-800 rounded-lg px-4 pt-5 pb-4 text-left shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full sm:p-6'>
              <div class='flex justify-between'>
                <h1 class='dark:text-gray-50 text-gray-800 font-semibold text  text-xl'>
                  Create Insult
                </h1>
                <span
                  onClick={closeModal}
                  class='rounded-full w-4 h-4 bg-red-500 cursor-pointer'></span>
              </div>

              <div class='mt-5 space-y-4'>
                <textarea
                  class='dark:text-gray-300 text-gray-800 outline-none bg-gray-200 dark:bg-gray-900 text-sm w-full py-2 px-2 rounded-md placeholder-gray-700 placeholder-opacity-85'
                  placeholder='Type something'
                />
                <div class='grid flex items-end grid-cols-3 gap-4'>
                  <div class=' col-span-2 '>
                    <Select mainButtonClasses='dark:bg-gray-700 ' />
                  </div>
                  <button
                    onClick={onSubmit}
                    type='button'
                    className='items-center border border-transparent py-3 rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none'>
                    create
                  </button>
                </div>
              </div>
            </div>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition.Root>
  )
}
