import React from "react"
import Select from "components/Select"
import InsultCard from "components/InsultCard"
import SlideOver from "components/SlideOver"
const Home = () => {
  const onChange = (val) => {
    console.log(val)
  }
  const [slideOpen, setSlideOpen] = React.useState(false)
  return (
    <div className='py-6'>
      <SlideOver
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
            <Select label={"Categories"} onChange={onChange} />
          </div>
        </div>
      </SlideOver>
      <div className='max-w-3xl  mx-auto sm:px-6 lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-12 lg:gap-8'>
        <main className='px-10 md:px-0  md:col-span-8  xl:col-span-8'>
          <div className='pb-2 flex justify-between items-end mb-5 border-b border-gray-800'>
            <div class='flex lg:block items-center  w-full justify-between'>
              <h3 className='text-xl  leading-6 font-medium text-gray-50'>
                Insults
              </h3>
              <p className='mt-2 hidden lg:block max-w-4xl text-sm text-gray-500'>
                You will find all the insults created by people listed bellow.
              </p>
              <button
                type='button'
                onClick={() => setSlideOpen(true)}
                className='lg:hidden inline-flex   items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none'>
                Filter
              </button>
            </div>
          </div>

          <ul className='grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3'>
            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((item) => {
              return (
                <li key={item} className='col-span-1'>
                  <InsultCard />
                </li>
              )
            })}
          </ul>
        </main>
        <aside className='lg:block hidden  xl:pt-10 md:p-0 px-5  md:col-span-4'>
          <div className='sticky top-6 space-y-4'>
            <div class='mb-7'>
              <h3 className='text-lg leading-6 font-medium text-gray-50'>
                Filter
              </h3>
              <p className='mt-1 text-sm text-gray-500'>
                This information will be displayed publicly so be careful what
                you share.
              </p>
            </div>
            <div>
              <Select label={"Categories"} onChange={onChange} />
            </div>
            <div className='flex justify-end'>
              <button
                type='button'
                className='bg-gray-700 py-2 px-4 rounded-md shadow-sm text-sm font-medium text-gray-50 hover:bg-gray-800 focus:outline-none  '>
                Clear
              </button>
              <button
                type='submit'
                className='ml-3 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none '>
                Save
              </button>
            </div>
          </div>
        </aside>
      </div>
    </div>
  )
}
export default Home
