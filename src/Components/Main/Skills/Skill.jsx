import React from 'react'

export default function Skill({title, description, src}) {
  return (
    <div className='flex flex-col gap-5 items-center text-center rounded-lg px-5 py-13 bg-white'>
        <img src={src} alt="image" className='size-15 rounded-full object-cover'/>
        <h5 className='font-Vazir-Bold tracking-tight text-lg'>{title}</h5>
        <p className='font-Vazir-Light text-sm tracking-tight leading-6 line-clamp-2 text-tgray'>{description}</p>
    </div>
  )
}
