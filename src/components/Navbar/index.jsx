import React, { Fragment } from "react"
import { Disclosure, Menu, Transition } from "@headlessui/react"
import { MenuIcon, XIcon } from "@heroicons/react/outline"
import { useRootContext, useInsultTypes } from "contexts/root-provider"
import { PlusIcon } from "@heroicons/react/solid"
import { useAuthContext } from "contexts/Authentication"
import DarkThemeButton from "./darkThemeButton"
import { showInsultModal } from "utils/dispatch"
const Navbar = () => {
  const { logout } = useAuthContext()
  const { dispatch } = useRootContext()
  const user = {
    name: "Tom Cook",
    email: "tom@example.com",
    imageUrl:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
  }
  const userNavigation = [
    { name: "Your Profile", onClick: () => {}, href: "#" },
    {
      name: "Sign out",
      onClick: () => {
        logout()
      },
      href: "#",
    },
  ]
  function classNames(...classes) {
    return classes.filter(Boolean).join(" ")
  }
  const insultTypes = useInsultTypes()
  return (
    <Disclosure
      as='nav'
      className='bg-white shadow dark:shadow-none dark:bg-gray-800'>
      {({ open }) => (
        <>
          <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
            <div className='flex justify-between h-16'>
              <div className='flex'>
                <div className='-ml-2 mr-2 flex items-center md:hidden'>
                  {/* Mobile menu button */}
                  <Disclosure.Button className='inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-800 hover:bg-gray-100 dark:hover:text-white dark:hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white'>
                    <span className='sr-only'>Open main menu</span>
                    {open ? (
                      <XIcon className='block h-6 w-6' aria-hidden='true' />
                    ) : (
                      <MenuIcon className='block h-6 w-6' aria-hidden='true' />
                    )}
                  </Disclosure.Button>
                </div>
                <div className='flex-shrink-0 flex items-center'>
                  <p class='text-3xl hidden lg:block text-gray-800  dark:text-gray-50 font-bold'>
                    Insulty
                  </p>
                  <img
                    className='block lg:hidden h-8'
                    src='https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg'
                    alt='Workflow'
                  />
                </div>
              </div>
              <div className='flex items-center'>
                <div className='flex-shrink-0'>
                  <button
                    onClick={() => {
                      showInsultModal(dispatch, insultTypes.ADD)
                    }}
                    type='button'
                    className='relative inline-flex items-center px-4 py-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-500 hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-indigo-500'>
                    <PlusIcon
                      className='-ml-1 mr-2 h-5 w-5'
                      aria-hidden='true'
                    />
                    <span>New Insult</span>
                  </button>
                </div>
                <DarkThemeButton />
                <div className='hidden md:ml-4 md:flex-shrink-0 md:flex md:items-center'>
                  {/* Profile dropdown */}
                  <Menu as='div' className='ml-3 relative'>
                    {({ open }) => (
                      <>
                        <div>
                          <Menu.Button className='bg-gray-800 flex text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white'>
                            <span className='sr-only'>Open user menu</span>
                            <img
                              className='h-8 w-8 rounded-full'
                              src={user.imageUrl}
                              alt=''
                            />
                          </Menu.Button>
                        </div>
                        <Transition
                          show={open}
                          as={Fragment}
                          enter='transition ease-out duration-200'
                          enterFrom='transform opacity-0 scale-95'
                          enterTo='transform opacity-100 scale-100'
                          leave='transition ease-in duration-75'
                          leaveFrom='transform opacity-100 scale-100'
                          leaveTo='transform opacity-0 scale-95'>
                          <Menu.Items
                            static
                            className='origin-top-right absolute z-10 right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none'>
                            {userNavigation.map((item) => (
                              <Menu.Item key={item.name}>
                                {({ active }) => (
                                  <a
                                    href={item.href}
                                    onClick={item.onClick}
                                    className={classNames(
                                      active ? "bg-gray-100" : "",
                                      "block px-4 py-2 text-sm text-gray-700"
                                    )}>
                                    {item.name}
                                  </a>
                                )}
                              </Menu.Item>
                            ))}
                          </Menu.Items>
                        </Transition>
                      </>
                    )}
                  </Menu>
                </div>
              </div>
            </div>
          </div>

          <Disclosure.Panel className='md:hidden'>
            <div className='pt-4 pb-3 border-t border-gray-200 dark:border-gray-700'>
              <div className='flex items-center px-5 sm:px-6'>
                <div className='flex-shrink-0'>
                  <img
                    className='h-10 w-10 rounded-full'
                    src={user.imageUrl}
                    alt=''
                  />
                </div>
                <div className='ml-3'>
                  <div className='text-base font-medium text-gray-800 dark:text-white'>
                    {user.name}
                  </div>
                  <div className='text-sm font-medium text-gray-400'>
                    {user.email}
                  </div>
                </div>
              </div>
              <div className='mt-3 px-2 space-y-1 sm:px-3'>
                {userNavigation.map((item) => (
                  <span
                    key={item.name}
                    onClick={item.onClick}
                    className='block px-3 cursor-pointer py-2 rounded-md text-base font-medium text-gray-400 hover:text-gray-800 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-700'>
                    {item.name}
                  </span>
                ))}
              </div>
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  )
}
export default Navbar
