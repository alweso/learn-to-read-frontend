import Card from '../Card/Card'
import wordsList from '../../constants/wordlist'

const CardList = () => {
  return (
    <div className="grid grid-cols-4 gap-4">
      {wordsList.map((item) => (
        <Card image={item.image} word={item.word} />
      ))}
    </div>
  )
}

export default CardList
