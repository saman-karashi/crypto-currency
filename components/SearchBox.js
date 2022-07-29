import { Search } from '../icons/icons'

const SearchBox = ({searchHandler}) => {
  return (
    <div className='my-10'>
            <div className='relative max-w-[400px] mx-auto'>
                <input onChange={searchHandler} type='text' placeholder='Search currency...' className='pl-10 py-2 w-full rounded-full bg-slate-200/60 placeholder:text-slate-500 dark:bg-white dark:text-black focus:outline-0' />
                    <button className='absolute top-[8px] left-[10px] cursor-pointer'>
                        <Search />
                    </button>
            </div>
    </div>
  )
}

export default SearchBox