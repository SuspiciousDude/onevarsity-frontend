import React from 'react'
import UniversityBanner from './UniversityBanner'
import UserBanner from './UserBanner'

const Suggestions = () => {
  return (
    <div className='flex flex-col gap-4 mx-6 w-96 font-inter' >
        <div className="flex flex-col shadow-gray-500/50 shadow-sm rounded-md bg-white ">
            <div className="p-4">
                <span className='text-2xl font-semibold' >Pages you may like</span>
            </div>
            <div>
                <UniversityBanner />
                <UniversityBanner />
                <UniversityBanner />
                <UniversityBanner />
                <UniversityBanner />
            </div>
                
        </div>
        <div className="flex flex-col shadow-gray-500/50 shadow-sm rounded-md bg-white ">
            <div className="p-4">
                <span className='text-2xl font-semibold' >Pages you may like</span>
            </div>
            <div>
                <UserBanner />
                <UserBanner />
                <UserBanner />
                <UserBanner />
                <UserBanner />
            </div>
        </div>
    </div>
  )
}

export default Suggestions