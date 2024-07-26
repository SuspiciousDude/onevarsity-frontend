import React from 'react'

const UserProfile = () => {
  return (
    <div className='bg-gray-100 w-fit p-4 rounded-lg' >
        <div>
            <div className=' flex justify-center' >
                <img src="src/assets/User.png" alt="" className='w-1/2' />
            </div>
            <div className=" flex flex-col items-center font-inter my-2 ">
                <p className='text-xl font-bold text-zinc-900'>Rushikesh Mane</p>
                <p className='text-gray-700 text-md ' >Professor</p>
                <p className='text-gray-700 text-sm' >25 mutual connections</p>
            </div>
        </div>
        <div className='flex justify-center font-bold text-white bg-sky-600 p-2 rounded-full mt-4' >
            <button>View Profile</button>
        </div>
    </div>
  )
}

export default UserProfile