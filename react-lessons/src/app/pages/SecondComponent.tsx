import React from 'react'

interface SecondComponentProps {
    desc:string
}

const SecondComponent:React.FC<SecondComponentProps> = ({desc}) => {
  return (
    <h1>{desc}</h1>
  )
}

export default SecondComponent