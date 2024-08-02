import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import wordsList from '../../constants/wordlist'
import { useLoading } from '../../hooks/useLoading'
import Loader from '../Loader/Loader'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faVolumeUp, faClose } from '@fortawesome/free-solid-svg-icons';

const SingleCard = () => {
  const params = useParams()
  const [cardData, setCardData] = useState<{
    letter: string
    word: string
    sound: string
    image: string
    imageBig: string
  } | null>(null)

  const { loading, setLoading, checkAllImagesLoaded } = useLoading(true)

  const playSound = () => {
    const audio = new Audio(cardData?.sound)
    audio.play()
  }

  useEffect(() => {
    const selectedCard = wordsList.find((card) => card.word === params.card)

    setCardData(
      selectedCard as {
        letter: string
        word: string
        sound: string
        image: string
        imageBig: string
      },
    )

    // Use the checkAllImagesLoaded function from the custom hook
    checkAllImagesLoaded([selectedCard?.imageBig || '']) // Pass an array with the image URLs to check
  }, [params.card, checkAllImagesLoaded])

  // useEffect(() => {
  //   // Check if cardData is defined before playing sound
  //   if (cardData) {
  //     playSound()
  //   }
  // }, [cardData])

  if (loading || !cardData) {
    // Display a loading indicator or error message here
    return <Loader />
  }

  return (
    <div className="flex justify-center pt-20 " >
      <div onClick={playSound} className="card w-[600px] relative bg-white rounded-md p-2 shadow-lg cursor-pointer border border-gray-300">
      <div className="absolute right-5 top-5">
            <FontAwesomeIcon icon={faClose} size='2x' />
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
            <FontAwesomeIcon icon={faVolumeUp} size='2x' />
          </div>
        </div>
      </div>
    </div>
  )
}

export default SingleCard
