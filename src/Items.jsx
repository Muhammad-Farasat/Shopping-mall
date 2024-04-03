import React from 'react'
import Data from './data.json';

function Items(){
    return(
        <div className='flex flex-wrap m-4 mx-72 gap-x-4 gap-y-6'>
            {
                Data.projects.map(data => {
                    return(
                        <div className='box w-80 h-[28rem] bg-[#676767] text-white shadow-sm shadow-[#fff]'>
                                <img src={data.imageSrc} className='w-full' />
                                <div className='flex items-center space-x-4 pt-8 pl-2 pb-2'>
                                    <h3 className='text-lg font-semibold'>{data.name}</h3>
                                    <p>Rs.{data.price}</p>
                                </div>
                                <div className='inline-block pl-2'>
                                <p className='border rounded-md text-sm w-auto px-2 py-1'>{data.categories}</p>
                                </div>
                        </div>
                    )
                })
            }   
        </div>
    );
}

export default Items;