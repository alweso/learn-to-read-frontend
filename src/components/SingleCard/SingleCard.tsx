import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import wordsList from '../../constants/wordlist'
import { useLoading } from '../../hooks/useLoading'
import Loader from '../Loader/Loader'

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

  useEffect(() => {
    // Check if cardData is defined before playing sound
    if (cardData) {
      playSound()
    }
  }, [cardData])

  if (loading || !cardData) {
    // Display a loading indicator or error message here
    return <Loader />
  }

  return (
    <div className="flex justify-center pt-20">
      <div className="card w-[600px] bg-white rounded-md p-2 shadow-lg cursor-pointer border border-gray-300">
        <img
          src={cardData.imageBig}
          alt={cardData.word}
          className="w-full rounded-md"
        />
        <h1 className="uppercase text-6xl font-sans font-bold text-gray-800 flex justify-center py-2">
          {cardData.word}
        </h1>
      </div>
    </div>
  )
}

export default SingleCard
