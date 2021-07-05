import React from "react"
import Select from "components/Select"
import InsultCard from "components/InsultCard"
import SlideOver from "components/SlideOver"
import { ViewGridIcon } from "@heroicons/react/solid"
import {useFilterContext} from 'contexts/FilterCategories'
import { ViewGridIcon as ViewGridIconOutline } from "@heroicons/react/outline"
import { useCategoriesQuery } from "actions/categories"
import { useInsultsQuery } from "actions/insults"
import Loading from "components/Loading"
const Home = () => {
  // filter
  const {state , dispatch}= useFilterContext()
  const onChange = (value) => {
    dispatch({
      type: "set_category",
      payload: value,
    })
  }
  const resetForm = ()=>{
    dispatch({
      type: "set_category",
      payload: undefined,
    })
  }
  // classes are set to small screens only
  const gridModes = [
    { title: "ONE", class: "sm:grid-cols-1" },
    { title: "TWO", class: "sm:grid-cols-2" },
  ]
  const [gridMode, setGridMode] = React.useState(gridModes[1])
  const [slideOpen, setSlideOpen] = React.useState(false)
  const toggleGrid = () => {
    if (gridMode.title === "ONE") setGridMode(gridModes[1])
    else setGridMode(gridModes[0])
  }
  const {data:categories} = useCategoriesQuery()
  const {status, data:insults} = useInsultsQuery(state)
    return (
      <div className='py-6'>
        <SlideOver
        resetForm={resetForm}
          title={"Filter"}
          open={slideOpen}
          onClose={() => setSlideOpen(false)}>
          <div className='sticky top-6 space-y-4'>
            <div class='mb-7'>
              <p className='mt-1 text-sm text-gray-500'>
                This information will be displayed publicly so be careful what you
                share.
              </p>
            </div>
            <div>
              <Select value={state.game} data={categories?.games} label={"Categories"} onChange={onChange} />
            </div>
          </div>
        </SlideOver>
        <div className='max-w-3xl  mx-auto sm:px-6 lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-12 lg:gap-8'>
          <main className='px-10 md:px-0  md:col-span-8  xl:col-span-8'>
            <div className='pb-2 flex justify-between items-end mb-5 border-b border-gray-300 dark:border-gray-800'>
              <div class='flex items-end  w-full justify-between'>
                <div>
                  <h3 className='text-xl  leading-6 font-medium text-gray-900 dark:text-gray-50'>
                    Insults
                  </h3>
                  <p className='mt-2  max-w-4xl text-sm text-gray-500'>
                    You will find all the insults created by people listed bellow.
                  </p>
                </div>
                <div class='flex items-center space-x-5 '>
                  <div
                    onClick={toggleGrid}
                    class='sm:block hidden h-7 w-7 dark:text-gray-600 cursor-pointer text-gray-700 '>
                    {gridMode.title === "TWO" ? (
                      <ViewGridIcon />
                    ) : (
                      <ViewGridIconOutline />
                    )}
                  </div>
                  <button
                    type='button'
                    onClick={() => setSlideOpen(true)}
                    className='lg:hidden inline-flex   items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none'>
                    Filter
                  </button>
                </div>
              </div>
            </div>
            <ul className={`grid grid-cols-1 gap-6 ${gridMode.class}`}>
              {status === 'loading' || status ==='idle' ? 
              <Loading/>  :    insults.Insult.map((item) => {
                return (
                  <li key={item._id} className='col-span-1'>
                    <InsultCard data={item} />
                  </li>
                )
              })
            }
          
            </ul>
          </main>
          <aside className='lg:block hidden  xl:pt-10 md:p-0 px-5  md:col-span-4'>
            <div className='sticky top-6 space-y-4'>
              <div class='mb-7'>
                <h3 className='text-lg leading-6 font-medium text-gray-800 dark:text-gray-50'>
                  Filter
                </h3>
                <p className='mt-1 text-sm text-gray-500'>
                  This information will be displayed publicly so be careful what
                  you share.
                </p>
              </div>
              <div>
              <Select value={state.game} data={categories?.games} label={"Categories"} onChange={onChange} />
              </div>
              <div className='flex justify-end'>
                <button
                  onClick={resetForm}
                  type='submit'
                  className='ml-3 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none '>
                  Reset
                </button>
              </div>
            </div>
          </aside>
        </div>
      </div>
    )
  
}
export default Home
