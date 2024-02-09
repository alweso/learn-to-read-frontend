import Card from '../Card/Card'
import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'
import SingleCard from '../../components/SingleCard/SingleCard'
import wordsList, { WordItem } from '../../constants/wordlist'

const CardList = () => {
  const params = useParams<{ letter: string }>()
  const [filteredWordsList, setFilteredWordsList] = useState<WordItem[]>([])
  const [selectedCard, setSelectedCard] = useState<WordItem | null>(null)

  useEffect(() => {
    const filteredList = wordsList.filter(
      (item) => item.letter === params.letter,
    )

    setFilteredWordsList(filteredList)
  }, [params.letter])

  const handleCardClick = (selectedCard: WordItem) => {
    setSelectedCard(selectedCard)
  }

  return (
    <div className="flex flex-wrap gap-10 justify-center pt-20">
      {filteredWordsList.map((item: WordItem) => (
        <div key={item.word}>
          <Card
            image={item.image}
            word={item.word}
            sound={item.sound}
            onClick={() => handleCardClick(item)}
          />
        </div>
      ))}

      {selectedCard && (
        <SingleCard
          word={selectedCard.word}
          imageBig={selectedCard.imageBig}
          sound={selectedCard.sound}
        />
      )}
    </div>
  )
}

export default CardList
