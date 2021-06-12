/* This example requires Tailwind CSS v2.0+ */
import { Fragment, useState } from "react"
import { Listbox, Transition } from "@headlessui/react"
import { CheckIcon, SelectorIcon } from "@heroicons/react/solid"
import PropTypes from "prop-types"
const people = [
  { id: 1, name: "League of legends" },
  { id: 2, name: "OverWatch" },
  { id: 3, name: "Dota 2" },
  { id: 4, name: "Fortnite" },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(" ")
}

const Select = ({
  onChange = () => {},
  label,
  mainButtonClasses = "dark:bg-gray-800",
}) => {
  const [selected, setSelected] = useState(people[0])

  return (
    <Listbox
      value={selected}
      onChange={(val) => {
        onChange(val)
        setSelected(val)
      }}>
      {({ open }) => (
        <>
          <Listbox.Label className='block mb-3 text-sm font-medium text-gray-800 dark:text-gray-50'>
            {label}
          </Listbox.Label>
          <div className='mt-1 relative'>
            <Listbox.Button
              className={`dark:border-gray-900 ${mainButtonClasses} bg-white  border border-gray-300 shadow-sm  dark:shadow-none  relative w-full rounded-md pl-3 pr-10 py-3 text-left cursor-default focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm`}>
              <span className='block text-gray-800 dark:text-gray-50 truncate'>
                {selected.name}
              </span>
              <span className='absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none'>
                <SelectorIcon
                  className='h-5 w-5 text-gray-400'
                  aria-hidden='true'
                />
              </span>
            </Listbox.Button>

            <Transition
              show={open}
              as={Fragment}
              leave='transition ease-in duration-100'
              leaveFrom='opacity-100'
              leaveTo='opacity-0'>
              <Listbox.Options
                static
                className='absolute z-20 mt-1 w-full bg-white border dark:border-gray-900 border-gray-300 dark:border-none shadow-sm dark:shadow-none dark:border-0 dark:bg-gray-800 shadow-lg max-h-60 rounded-md py-1 text-base ring-1 ring-black ring-opacity-5 overflow-auto focus:outline-none sm:text-sm'>
                {people.map((person) => (
                  <Listbox.Option
                    key={person.id}
                    className={({ active }) =>
                      classNames(
                        active
                          ? "text-white bg-indigo-600"
                          : "dark:text-gray-50 text-gray-800",
                        "cursor-default select-none relative py-2 pl-3 pr-9"
                      )
                    }
                    value={person}>
                    {({ selected, active }) => (
                      <>
                        <span
                          className={classNames(
                            selected ? "font-semibold" : "font-normal",
                            "block truncate"
                          )}>
                          {person.name}
                        </span>

                        {selected ? (
                          <span
                            className={classNames(
                              active ? "text-white" : "text-indigo-600",
                              "absolute inset-y-0 right-0 flex items-center pr-4"
                            )}>
                            <CheckIcon className='h-5 w-5' aria-hidden='true' />
                          </span>
                        ) : null}
                      </>
                    )}
                  </Listbox.Option>
                ))}
              </Listbox.Options>
            </Transition>
          </div>
        </>
      )}
    </Listbox>
  )
}
export default Select
Select.prototype = {
  onChange: PropTypes.func,
  label: PropTypes.string,
  mainButtonClasses: PropTypes.string,
}
