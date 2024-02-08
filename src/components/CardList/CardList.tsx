import Card from '../Card/Card'
import wordsList from '../../constants/wordlist'
import { useParams } from 'react-router-dom'

const CardList = () => {
  const params = useParams()
  console.log(params)
  // q: how can I only show words that have the same letter as the one in the URL?
  // a: You can use the filter method to filter the wordsList to get the words that have the same letter as the one in the URL. Here's how you can do it:
  const filteredWordsList = wordsList.filter(
    (item) => item.letter === params.letter,
  )
  return (
    <div className="flex flex-wrap gap-10 justify-center pt-20">
      {filteredWordsList.map((item) => (
        <Card
          key={item.word}
          image={item.image}
          word={item.word}
          sound={item.sound}
        />
      ))}
    </div>
  )
}

export default CardList
