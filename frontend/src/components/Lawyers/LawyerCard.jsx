/* eslint-disable react/prop-types */
import React from 'react'

const LawyerCard = ({lawyer}) => {
    const {name, photo} = lawyer
    return (
        <div className='p-3 lg:p-5 '>
            <div>
                <img src={photo}
                    className='w-40 h-40 rounded-[12px] border border-solid border-[#000] mb-5 cursor-pointer'
                    alt=""/>
            </div>
            <h2 className="text-[18px] leading-[30px] lg:text-[15px] lg:leading-9 text-headingColor font-[700] mt-3 lg:mt-5">
                {name}</h2>
        </div>
    )
}

export default LawyerCard
