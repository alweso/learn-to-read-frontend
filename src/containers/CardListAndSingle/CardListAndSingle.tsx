import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import CardList from '../../components/CardList/CardList'
import SingleCard from '../../components/SingleCard/SingleCard'
import wordsList, { WordItem } from '../../constants/wordlist'

const CardListAndSingle = () => {
  const params = useParams<{ letter: string }>()
  const [filteredWordsList, setFilteredWordsList] = useState<WordItem[]>([])

  useEffect(() => {
    const filteredList = wordsList.filter(
      (item) => item.letter === params.letter,
    )

    setFilteredWordsList(filteredList)
  }, [params.letter])

  //   return (
  //     <div>
  //       <CardList wordlist={filteredWordsList} />
  //     </div>
  //   )
}

export default CardListAndSingle
