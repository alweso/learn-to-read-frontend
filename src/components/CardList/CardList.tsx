// CardList.tsx

import React, { useState, useEffect } from 'react'
import Card from '../Card/Card'
import Loader from '../Loader/Loader'
import wordsList, { WordItem } from '../../constants/wordlist' // Assuming WordItem type is defined in wordlist
import { useParams } from 'react-router-dom'

const CardList: React.FC = () => {
  const params = useParams<{ letter: string }>()
  const [loading, setLoading] = useState<boolean>(true)
  const [filteredWordsList, setFilteredWordsList] = useState<WordItem[]>([])

  useEffect(() => {
    // Filter wordsList based on the selected letter
    const filteredList = wordsList.filter(
      (item) => item.letter === params.letter,
    )
    setFilteredWordsList(filteredList)

    // Check if all images are loaded
    const images: HTMLImageElement[] = filteredList.map(() => new Image())
    let loadedImagesCount = 0

    const checkAllImagesLoaded = () => {
      loadedImagesCount++
      if (loadedImagesCount === images.length) {
        setLoading(false) // Set loading to false once all images are loaded
      }
    }

    images.forEach((img, index) => {
      img.src = filteredList[index].image
      img.onload = checkAllImagesLoaded
      img.onerror = checkAllImagesLoaded
    })
  }, [params.letter])

  return (
    <div className="flex flex-wrap gap-10 justify-center pt-20">
      {loading ? (
        <Loader />
      ) : (
        filteredWordsList.map((item) => (
          <Card
            key={item.word}
            image={item.image}
            word={item.word}
            sound={item.sound}
          />
        ))
      )}
    </div>
  )
}

export default CardList
