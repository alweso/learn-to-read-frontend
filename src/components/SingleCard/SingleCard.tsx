import { useState } from 'react'
import './SingleCard.css'

const SingleCard = ({
  word,
  imageBig,
  sound,
  visible,
}: {
  word: string
  imageBig: string
  sound: string
  visible: boolean
}) => {
  const playSound = () => {
    const audio = new Audio(sound)
    audio.play()
  }

  const [cardVisible, setCardVisible] = useState(false)

  return (
    <div className={`singleCard ${visible ? 'block' : 'hidden'} `}>
      <div className="flex justify-center pt-20">
        <div className="card w-[600px] bg-white rounded-md p-2 shadow-lg cursor-pointer border border-gray-300">
          <img
            src={imageBig}
            alt={word}
            className="w-full rounded-md"
            onClick={playSound}
          />
          <h1 className="uppercase text-6xl font-sans font-bold text-gray-800 flex justify-center py-2">
            {word}
          </h1>
        </div>
      </div>
    </div>
  )
}

export default SingleCard
