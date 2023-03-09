import React from 'react'

function ButtonArea() {
  return (
    <div className='md:text-center pb-20 pt-10'>
        <button type="button" style={{fontSize:"2rem"}} className="font-mono h-24 w-80 text-white bg-purple-600 to-blue-600 hover:bg-gradient-to-bl duration-500 focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 hover:text-gray-900 focus:text-gray-900 hover:bg-gray-100 focus:bg-gray-200 focus:outline-none focus:shadow-outline">Start Code</button>
        <button type="button" style={{fontSize:"2rem"}} className="font-mono h-24 w-80 text-white bg-purple-600 hover:bg-gradient-to-l focus:ring-4 duration-500 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 hover:text-gray-900 focus:text-gray-900 hover:bg-gray-100 focus:bg-gray-200 focus:outline-none focus:shadow-outline">Join Code</button>
        {/* <button class="text-4xl w-80 h-24 px-4 py-2 mt-2 text-sm font-semibold text-white bg-purple-600 transition duration-500 ease-in-out transform bg-transparent rounded-lg dark:text-gray-300 md:mt-0 md:ml-4 hover:text-gray-900 focus:text-gray-900 hover:bg-gray-100 focus:bg-gray-200 focus:outline-none focus:shadow-outline">
          Start Code
        </button>
        <button class="text-4xl h-24 w-80 px-4 py-2 mt-2 text-sm font-semibold text-white bg-purple-600 transition duration-500 ease-in-out transform bg-transparent rounded-lg dark:text-gray-300 md:mt-0 md:ml-4 hover:text-gray-900 focus:text-gray-900 hover:bg-gray-100 focus:bg-gray-200 focus:outline-none focus:shadow-outline">
          Join Code
        </button> */}
    </div>
  )
}

export default ButtonArea