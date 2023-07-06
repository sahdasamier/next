import React from 'react'
import {contactMeText } from '../date/date'
import Link from "next/link";


const contactMe =() => {
  return (
    <div className='flex flex-col w-11/12 content-center m-auto mt-20'>
    <h2 className='text-5xl font-10 mb-4'>Contact me </h2>
    <div className='flex flex-row flex-wrap gap-10 mt-6'>
    <h3 className='text-2xl font-bold mb-4'> {contactMeText.title}</h3>
    <p> {contactMeText.body}</p>
    <p> {contactMeText.body1}</p>
    <h3><Link  href={"Sahdasamier013@gmail.com"} className='px-2 py-1 text-xl text-purple min-w-100 hover:bg-purple-light hover:text-purple  tracking-wide sm:bg-none	'>sahdasamier013@gmail.com</Link>
    </h3>
    <p className='text-2xl font-bold mb-4'> {contactMeText.body3}</p>

    

    </div>
</div>
  )
}

export default contactMe
