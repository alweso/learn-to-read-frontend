import * as React from 'react'

interface CardProps {
  image: string
  word: string
  sound?: string
}

const Card = ({ image, word, sound }: CardProps) => {
  return (
    <div className="w-[200px] h-[200px]">
      <img src={image} alt={word} className="w-full" />
      <h1>{word}</h1>
    </div>
  )
}

export default Card
