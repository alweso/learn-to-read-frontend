import React, { useEffect } from 'react'
import './SingleCard.css'
import { useAppContext } from '../../contexts/AppContext'

interface SingleCardProps {
  item: any
  selectedCard?: any
}

const SingleCard: React.FC<SingleCardProps> = ({ item, selectedCard }) => {
  const { isSingleCardVisible, hideSingleCard } = useAppContext()

  const playSound = () => {
    const audio = new Audio(selectedCard.sound)
    audio.play()
  }

  useEffect(() => {
    if (isSingleCardVisible) {
      // Additional actions when SingleCard is visible
    }
  }, [isSingleCardVisible])

  return (
    <div
      onClick={hideSingleCard}
      className={`singleCard ${isSingleCardVisible && item === selectedCard ? 'block' : 'hidden'}`}
    >
      <div className="flex justify-center pt-20">
        <div className="card w-[600px] bg-white rounded-md p-2 shadow-lg cursor-pointer border border-gray-300">
          <img
            src={item.imageBig}
            alt={item.word}
            className="w-full rounded-md"
            onClick={() => {
              playSound()
            }}
          />
          <h1 className="uppercase text-6xl font-sans font-bold text-gray-800 flex justify-center py-2">
            {item.word}
          </h1>
        </div>
      </div>
    </div>
  )
}

export default SingleCard
