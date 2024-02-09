import React from 'react'

const Buttons = ({label,iconURL}) => {
  return (
    <div>
        <button className='flex items-center justify-center px-7 py-4 gap-2 font-montserrat text-lg leading-none bg-coral-red rounded-full text-white border-coral-red'>
            {label}
            <img src={iconURL} className='ml-2 w-5 h-5 rounded-full '/>
        </button>
    </div>
  )
}

export default Buttons