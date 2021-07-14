import React, { Fragment } from "react"
import PropTypes from "prop-types"
import {
  DotsVerticalIcon,
  ArrowCircleUpIcon,
  ArrowCircleDownIcon,
  HeartIcon,
} from "@heroicons/react/outline"
import { useQueryClient } from "react-query"
import { useRootContext, useInsultTypes } from "contexts/root-provider"
import { Menu, Transition } from "@headlessui/react"
import { showInsultModal } from "utils/dispatch"
import useCurrentUser from "hooks/useCurrentUser"
const InsultCard = ({ data }) => {
  const currentUser = useCurrentUser()
  function classNames(...classes) {
    return classes.filter(Boolean).join(" ")
  }
  const queryClient = useQueryClient()
  const categories = queryClient.getQueryData("categories")
  const category = categories.games.find((game) => game._id === data.game)
  const { dispatch } = useRootContext()
  const insultTypes = useInsultTypes()
  const handleEdit = () => {
    showInsultModal(dispatch, insultTypes.EDIT, data._id)
  }
  const options = [
    { title: "Edit", private: true, fun: handleEdit },
    { title: "Delete", private: true, fun: () => {} },
    { title: "Add to favorite", private: false, fun: () => {} },
  ]
  return (
    <div class='bg-white border border-gray-800 dark:border-gray-900 dark:bg-gray-800 py-7 px-5 w-auto h-50 rounded-xl'>
      <div class='flex items-center justify-between'>
        <div class='flex items-center font-bold space-x-3'>
          <img
            className='inline-block h-8 w-8 rounded-full'
            src='https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
            alt=''
          />
          <span class='text-sm text-gray-800 dark:text-gray-50'>
            {data.owner ? data.owner.username : "Anonymous"}
          </span>
        </div>
        <span class='ml-auto'>
          <Menu as='div' className='relative inline-block text-left'>
            {({ open }) => (
              <>
                <div>
                  <Menu.Button className='focus:outline-none flex items-center text-gray-600'>
                    <span className='sr-only'>Open options</span>
                    <DotsVerticalIcon className='h-5 w-5' aria-hidden='true' />
                  </Menu.Button>
                </div>

                <Transition
                  show={open}
                  as={Fragment}
                  enter='transition ease-out duration-100'
                  enterFrom='transform opacity-0 scale-95'
                  enterTo='transform opacity-100 scale-100'
                  leave='transition ease-in duration-75'
                  leaveFrom='transform opacity-100 scale-100'
                  leaveTo='transform opacity-0 scale-95'>
                  <Menu.Items
                    static
                    className='origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none'>
                    <div className='py-1'>
                      {options.map((option, index) => {
                        if (
                          option.private &&
                          currentUser._id !== data.owner?._id
                        ) {
                          return false
                        } else {
                          return (
                            <Menu.Item
                              onClick={option.fun}
                              key={`${option.title}-${index} `}>
                              {({ active }) => (
                                <span
                                  className={classNames(
                                    active
                                      ? "bg-gray-100 text-gray-900"
                                      : "text-gray-700",
                                    "block px-4 py-2 text-sm"
                                  )}>
                                  {option.title}
                                </span>
                              )}
                            </Menu.Item>
                          )
                        }
                      })}
                    </div>
                  </Menu.Items>
                </Transition>
              </>
            )}
          </Menu>{" "}
        </span>
      </div>
      <div class='my-3.5'>
        <span class='uppercase text-xs font-semibold text-gray-600'>
          {category ? category.name : "N/A"}
        </span>
        <p class='text-xl font-bold dark:text-gray-50 text-gray-800'>
          {data.insult}
        </p>
      </div>
      <div class='flex justify-between'>
        <div class='flex space-x-2'>
          <ArrowCircleUpIcon class='h-6 cursor-pointer w-6 text-indigo-600' />
          <ArrowCircleDownIcon class='h-6  cursor-pointer w-6 text-gray-600' />
        </div>
        <HeartIcon class='h-6 w-6 cursor-pointer  text-gray-600 mr-2' />
      </div>
    </div>
  )
}
export default InsultCard
InsultCard.prototype = {
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
}
