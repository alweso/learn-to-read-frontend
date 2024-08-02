import React from 'react'

interface CardProps {
  image: string
  word: string
  sound?: string
}

const Card: React.FC<CardProps> = ({ image, word, sound }) => {
  return (
    <div className="card w-[300px] bg-white rounded-md p-2 shadow-lg cursor-pointer border border-gray-300">
      <img
        src={image}
        alt={word}
        loading="lazy"
        className="w-full rounded-md"
      />
      <div>
        <h2 className="uppercase text-xl font-sans font-bold text-gray-800 flex justify-center py-2">
          {word}
        </h2>
      </div>
    </div>
  )
}

export default Card
