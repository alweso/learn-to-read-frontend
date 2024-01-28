import Letter from '../Letter/Letter'

const LETTERS = [
  'a',
  'ą',
  'b',
  'c',
  'ć',
  'd',
  'e',
  'ę',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'ł',
  'm',
  'n',
  'ń',
  'o',
  'ó',
  'p',
  'r',
  's',
  'ś',
  't',
  'u',
  'w',
  'y',
  'z',
  'ź',
  'ż',
]

const LetterList = () => {
  return (
    <div>
      <h1 className="mb-8">Cześć, Igor! Wybierz jakąś literę! </h1>
      <div className="grid grid-cols-7 gap-4">
        {LETTERS.map((letter) => (
          <Letter key={letter} letter={letter} />
        ))}
      </div>
    </div>
  )
}

export default LetterList
