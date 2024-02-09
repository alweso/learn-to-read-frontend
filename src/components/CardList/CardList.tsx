import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import Card from '../Card/Card'
import SingleCard from '../../components/SingleCard/SingleCard'
import wordsList, { WordItem } from '../../constants/wordlist'
import { useAppContext } from '../../contexts/AppContext'

const CardList: React.FC = () => {
  const { showSingleCard } = useAppContext()
  const [filteredWordsList, setFilteredWordsList] = useState<WordItem[]>([])
  const [selectedCard, setSelectedCard] = useState<WordItem | null>(null)

  const params = useParams<{ letter: string }>()

  useEffect(() => {
    const filteredList = wordsList.filter(
      (item) => item.letter === params.letter,
    )
    setFilteredWordsList(filteredList)
  }, [params.letter])

  return (
    <div className="flex flex-wrap gap-10 justify-center pt-20">
      {filteredWordsList.map((item: WordItem) => (
        <div key={item.word}>
          <Card
            image={item.image}
            word={item.word}
            sound={item.sound}
            onClick={() => {
              showSingleCard() // Show SingleCard when clicked
              setSelectedCard(item)
            }}
          />
        </div>
      ))}

      {filteredWordsList.map((item: WordItem) => (
        <SingleCard item={item} selectedCard={selectedCard} />
      ))}
    </div>
  )
}

export default CardList
