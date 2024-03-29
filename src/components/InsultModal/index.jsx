import React, { Fragment, useRef } from "react"
import { Dialog, Transition } from "@headlessui/react"
import Select from "components/Select"
import { useEffect, useState } from "react"
import { useRootContext, useInsultTypes } from "contexts/root-provider"
import { useQueryClient } from "react-query"
import useInsultForm from "./useForm"
import { hideInsultModal } from "utils/dispatch"
import { useInsultQuery } from "actions/insults"
import Loading from "components/Loading"
export default function Example() {
  let mainRef = useRef(null)
  const { state, dispatch } = useRootContext()
  const queryClient = useQueryClient()
  const categories = queryClient.getQueryData("categories")
  const insultsTypes = useInsultTypes()
  const [loading, setLoading] = useState(false)
  const { setFieldValue, values, handleSubmit, errors, setErrors, resetForm } =
    useInsultForm(state.insultModal.type, state.insultModal.insultId)
  const closeModal = () => {
    hideInsultModal(dispatch)
    // remove previous errors and values
    resetForm()
    setErrors({})
  }
  const { data, refetch } = useInsultQuery(state.insultModal.insultId)
  useEffect(() => {
    const fetchData = async () => {
      if (state.insultModal.type === insultsTypes.EDIT) {
        setLoading(true)
        await refetch()
        if (data) {
          setFieldValue("insult", data.insult.insult)
          setFieldValue("game", data.insult.game)
          setLoading(false)
        }
      }
    }
    fetchData()
  }, [state.insultModal.type, insultsTypes.EDIT, refetch, data, setFieldValue])
  return (
    <Transition.Root show={state.insultModal.show} as={Fragment}>
      <Dialog
        as='div'
        initialFocus={mainRef}
        static
        initial
        className='fixed z-10 inset-0 '
        open={state.insultModal.show}
        onClose={closeModal}>
        <div className='flex items-center justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0'>
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
            <div className=' w-96 inline-block align-bottom bg-white dark:bg-gray-800 rounded-lg px-5 pt-5 pb-4 text-left shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full sm:p-6'>
              <div class='flex justify-between'>
                <h1
                  ref={mainRef}
                  class='dark:text-gray-50 text-gray-800 font-semibold text  text-xl'>
                  {state.insultModal.type === insultsTypes.EDIT
                    ? "Edit Your Insult"
                    : "Create New Insult"}
                </h1>
                <span
                  onClick={closeModal}
                  class='rounded-full w-4 h-4 bg-red-500 cursor-pointer'></span>
              </div>
              <div class='mt-5 space-y-2'>
                {state.insultModal.type === insultsTypes.EDIT && loading ? (
                  <Loading />
                ) : (
                  <>
                    <textarea
                      value={values.insult}
                      onChange={(e) => {
                        setFieldValue("insult", e.target.value)
                      }}
                      class={`${
                        errors.insult && "border-2 border-red-500"
                      } dark:text-gray-300 text-gray-800 outline-none bg-gray-200 dark:bg-gray-900 text-sm w-full py-2 px-2 rounded-md placeholder-gray-700 placeholder-opacity-85`}
                      placeholder='Type something'
                    />
                    {errors.insult && (
                      <p class=' text-red-500'>{errors.insult}</p>
                    )}
                    <div class='grid flex items-end grid-cols-3 gap-4'>
                      <div class=' col-span-2 '>
                        <Select
                          onChange={(value) => setFieldValue("game", value)}
                          value={values.game}
                          data={categories?.games}
                          mainButtonClasses='dark:bg-gray-700 '
                        />
                      </div>
                      <button
                        onClick={handleSubmit}
                        type='button'
                        className='items-center border border-transparent py-3 rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none'>
                        {state.insultModal.type === insultsTypes.EDIT
                          ? "Edit"
                          : "Create"}
                      </button>
                    </div>
                  </>
                )}
              </div>
            </div>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition.Root>
  )
}
