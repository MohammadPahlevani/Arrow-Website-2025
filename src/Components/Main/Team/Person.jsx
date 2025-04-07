import React from 'react'

export default function Person({name, id, src}) {
  return (
    <div className='flex flex-col items-center gap-5 border-b border-pink pb-4'>
        <div className='w-full relative group'>
            <img className='rounded-t-lg w-full h-70 object-cover' src={src} alt="team" />
            <div className='opacity-0 rounded-t-lg group-hover:opacity-100 transition-all duration-400 delay-100 bg-pink/80 absolute top-0 bottom-0 left-0 right-0'>
                <div className='flex items-center h-full justify-center gap-2'>
                    <div className='text-white'>
                        <a href="#">
                            <svg className='size-5'>
                                <use xlinkHref='#search'></use>
                            </svg>
                        </a>
                    </div>
                    <div className='text-white'>
                        <a href="#">
                            <svg className='size-5'>
                                <use xlinkHref='#search'></use>
                            </svg>
                        </a>
                    </div>
                    <div className='text-white'>
                        <a href="#">
                            <svg className='size-5'>
                                <use xlinkHref='#search'></use>
                            </svg>
                        </a>
                    </div>
                </div>
            </div>
        </div>
        <div>
            <h5 className='font-Vazir-Bold tracking-tight pb-2'>{name}</h5>
            <p className='font-Vazir-Light text-sm tracking-tight leading-8 text-tgray' >{id}</p>
        </div>
        
    </div>
  )
}
