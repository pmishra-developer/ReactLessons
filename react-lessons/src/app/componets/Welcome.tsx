"use client"
import React, { useEffect, useState } from 'react'

type WelcomeProps = {
    text: string;
  };

const Welcome = ({text}: WelcomeProps) => {

    const[Name,setName] =  useState<string>("");

    const handleChange = (e:React.ChangeEvent<HTMLInputElement>) => {
            setName( e.target.value);
            console.log(text + Name + `${Name} joooo `)
    }
    
    useEffect(( )=> {
        console.log(text + Name + `${text}` )
    }, [Name])


  return (
      <div>
            <div className='text-3xl font-bold underline mb-4'>Welcome</div>
            <label className='text-xl font-bold'>
                FULL NAME
            </label>
            <input className='w-[200] px-3 m-2' type={"text"} placeholder={"enter full name" } value={Name} onChange={handleChange}/>
      </div>
   
  )
}

export default Welcome