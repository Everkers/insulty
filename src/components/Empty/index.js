import Ilustration from "assets/images/Saly-17.png"
import { showInsultModal } from "utils/dispatch"
import { useRootContext, useInsultTypes } from "contexts/root-provider"
import { useFilterContext } from "contexts/FilterCategories"
const Empty = () => {
  const insultTypes = useInsultTypes()
  const { dispatch } = useRootContext()
  const { state: filters } = useFilterContext()
  return (
    <div class='flex items-center w-full  flex-col'>
      <img class='w-72' src={Ilustration} alt='ilustration-empty' />
      <div class='-mt-11 text-center  space-y-2 my-5 dark:text-gray-200'>
        <h1 class='text-4xl '>Whops :(</h1>
        <p class='text-gray-600 dark:text-gray-500 '>
          It seems like there are no insults in here <br /> be the first to add
          insults to this category and gain a special badge :)
        </p>
      </div>
      <button
        onClick={() => {
          showInsultModal(dispatch, insultTypes.ADD, null, filters.game)
        }}
        className='ml-3 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none '>
        Create Insult
      </button>
    </div>
  )
}
export default Empty
