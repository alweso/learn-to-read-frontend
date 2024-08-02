import React, { useEffect, useState } from 'react'
import Card from '../Card/Card'
import Loader from '../Loader/Loader'
import wordsList, { WordItem } from '../../constants/wordlist'
import { Link, useParams } from 'react-router-dom'
import { useLoading } from '../../hooks/useLoading'

const CardList: React.FC = () => {
  const params = useParams<{ letter: string }>()
  const { loading, checkAllImagesLoaded } = useLoading(true)
  const [filteredWordsList, setFilteredWordsList] = useState<WordItem[]>([])

  useEffect(() => {
    if (params.letter) {
      const filteredList = wordsList.filter(
        (item) => item.letter === params.letter,
      )

      setFilteredWordsList(filteredList)

      checkAllImagesLoaded(filteredList.map((item) => item.image))
    }
  }, [params.letter, checkAllImagesLoaded])

  return (
    <div className="flex flex-wrap gap-10 justify-center pt-20">
      {loading ? (
        <Loader />
      ) : (
        filteredWordsList.map((item) => (
          <Link to={`/card/${item.word}`} key={item.word}>
            <Card
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
