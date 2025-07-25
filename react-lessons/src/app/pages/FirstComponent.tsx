"use client"

import React, { useState } from 'react'
import SecondComponent from './SecondComponent'

interface FirstComponentProps {
    userName: string,
}

const FirstComponent: React.FC<FirstComponentProps> = ({ userName }) => {

    const [description, setDescription] = useState('')

    const handleOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setDescription(event.target.value)
    }

    return (
        <div>
            <h2>{`Hi... ${userName}`}</h2>
            Your description : <input className='border-4 border-white pl-3' type='text' onChange={(event) => handleOnChange(event)} value={description} placeholder='Enter your description' />
            <SecondComponent desc={description} />
        </div>
    )
}

export default FirstComponent
