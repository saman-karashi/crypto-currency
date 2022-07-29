import { Search } from '../icons/icons'

const SearchBox = ({searchHandler}) => {

const submitHandler = (e)=>{
e.preventDefault()
}

  return (
    <div className='my-10'>
        <form onSubmit={submitHandler}> 
            <div className='relative max-w-[400px] mx-auto'>
                <input onChange={searchHandler} type='text' placeholder='Search currency...' className='pl-10 py-2 w-full rounded-full bg-slate-200/60 placeholder:text-slate-500 focus:outline-0' />
                    <button onClick={submitHandler} className='absolute top-[8px] left-[10px] cursor-pointer'>
                        <Search />
                    </button>
            </div>
        </form>
    </div>
  )
}

export default SearchBox