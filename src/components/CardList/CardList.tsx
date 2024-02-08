// CardList.tsx

import React, { useEffect } from 'react'
import Card from '../Card/Card'
import Loader from '../Loader/Loader'
import wordsList, { WordItem } from '../../constants/wordlist'
import { Link, useParams } from 'react-router-dom'
import { useLoading } from '../../hooks/useLoading' // Import the custom hook

const CardList: React.FC = () => {
  const params = useParams<{ letter: string }>()
  const { loading, setLoading, checkAllImagesLoaded } = useLoading(true)
  const [filteredWordsList, setFilteredWordsList] = React.useState<WordItem[]>(
    [],
  )

  useEffect(() => {
    const filteredList = wordsList.filter(
      (item) => item.letter === params.letter,
    )

    setFilteredWordsList(filteredList)

    // Use the checkAllImagesLoaded function from the custom hook
    checkAllImagesLoaded(filteredList.map((item) => item.image))
  }, [params.letter, checkAllImagesLoaded])

  return (
    <div className="flex flex-wrap gap-10 justify-center pt-20">
      {loading ? (
        <Loader />
      ) : (
        filteredWordsList.map((item) => (
          <Link to={`/card/${item.word}`} key={item.word}>
            <Card
              key={item.word}
              image={item.image}
              word={item.word}
              sound={item.sound}
            />
          </Link>
        ))
      )}
    </div>
  )
}

export default CardList
