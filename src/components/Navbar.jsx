import React from 'react'
import { Link } from 'react-router-dom'
import { Search }  from './Search'

export const Navbar = ({ darkTheme, setDarkTheme}) => {
  return (
    //feel the power of tailwind in the long classname in place of long css classes and numerous css files
    <div className='p-5 pb-0 flex flex-wrap sm:justify-between justify-center items-center border-b dark:border-gray-700 border-gray-200'>
      <div className="flex justify-between items-center space-x-5 w-screen ">
        <Link to='/'>
        <p className="text-2xl bg-blue-500 font-bold text-white py-1 px-2 rounded dark:bg-gray-50 dark:text-gray-900">
          Guugle 🔎
        </p>
        </Link>
        {/**Theme swap/flip buttons, hence need to pass the theme state, & set theme state variables as props to the Navbar */}
        <button type="button" onClick={() => setDarkTheme(!darkTheme)} className="text-xl dark:bg-gray-50 dark:text-gray-900 bg-white border rounded-full px-2 py-1 hover:shadow-lg">{darkTheme ? '💡 Light' : '🌙 Dark'}</button>
      </div>
      <Search />
    </div>
  )
}

//export default Navbar
