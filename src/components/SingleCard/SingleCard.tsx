import React, { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import wordsList from '../../constants/wordlist'
import { useLoading } from '../../hooks/useLoading'
import Loader from '../Loader/Loader'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faVolumeUp, faClose } from '@fortawesome/free-solid-svg-icons'

const SingleCard = () => {
  const { card, letter } = useParams() // Extract both card and letter parameters
  const navigate = useNavigate() // Hook for navigation
  const [cardData, setCardData] = useState<{
    letter: string
    word: string
    sound: string
    image: string
    imageBig: string
  } | null>(null)

  const { loading, checkAllImagesLoaded } = useLoading(true)

  const playSound = () => {
    if (cardData?.sound) {
      const audio = new Audio(cardData.sound)
      audio.play()
    }
  }

  useEffect(() => {
    if (card) {
      console.log('we have a card')
      const selectedCard = wordsList.find((c) => c.word === card)
      // console.log(selectedCard)
      setCardData(selectedCard as {
        letter: string
        word: string
        sound: string
        image: string
        imageBig: string
      })
     
      checkAllImagesLoaded([selectedCard?.imageBig || ''])
    }
  }, [card, checkAllImagesLoaded])
  const handleClose = () => {
    if (cardData) {
      navigate(`/cards/${cardData.letter}`) // Navigate back to the CardList route with the letter
    } 
  }

  if (loading || !cardData) {
    return <Loader />
  }

  return (
    <div className="flex justify-center pt-20">
      <div className="card w-[600px] relative bg-white rounded-md p-2 shadow-lg cursor-pointer border border-gray-300">
        <div className="absolute right-5 top-5">
          <FontAwesomeIcon icon={faClose} size="2x" onClick={handleClose} />
        </div>
        <img
          src={cardData.imageBig}
          alt={cardData.word}
          className="w-full rounded-md"
        />
        <div className="relative flex items-center py-2">
          <h1 className="uppercase text-6xl font-sans font-bold text-gray-800 flex-1 text-center">
            {cardData.word}
          </h1>
          <div className="absolute right-5">
            <FontAwesomeIcon icon={faVolumeUp} size="2x" onClick={playSound} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default SingleCard
