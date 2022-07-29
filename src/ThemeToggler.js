import {useState,useEffect} from 'react';
import { Moon,Sun } from '../icons/icons';
import { useTheme } from 'next-themes';

const ThemeToggler = () => {
const {theme,setTheme} = useTheme()
const [isMounted,setIsMounted] = useState(false)

useEffect(()=> setIsMounted(true),[])
if(!isMounted) return;

  return (
    <div className='text-right mr-5'>
        <button 
        className='ring-2 p-2 rounded-lg mt-10 ring-black dark:ring-white'
    onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
    >
        {
            theme === 'light' ? (
            <Moon />
            ) : (
            <Sun />
            )
        }
    </button>
    </div>
  )
}

export default ThemeToggler