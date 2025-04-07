import React from 'react'

export default function Point({description, src, name, id}) {
  return (
    <div className='flex flex-col gap-12 px-5'>
        <div className='relative shadow-xl px-8 py-15'>
            <p className='font-Vazir-Light tracking-tight leading-8 text-tgray line-clamp-3'>{description}</p>
            <svg className='absolute -bottom-6 bg-gray-50 p-3 rounded-full right-7 text-pink size-12'>
                <use xlinkHref='#tablet'></use>
            </svg>
        </div>
        <div className='flex items-center gap-5'>
            <div className='size-15'>
                <img className='rounded-full size-15 object-cover' src={src} alt="image" />
            </div>
            <div>
                <p className='font-Vazir-Medium text-sm tracking-tight leading-8 text-tgray'>{id}</p>
                <h5 className='font-Vazir-Bold tracking-tight mb-2'>{name}</h5>
            </div>
        </div>
    </div>
  )
}
