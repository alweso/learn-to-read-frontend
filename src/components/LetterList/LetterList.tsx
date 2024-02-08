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
    <>
      <h1 className="mb-8">Cześć, Igor! Wybierz jakąś literę! </h1>
      <div className="flex flex-wrap gap-10 justify-center pt-20">
        {LETTERS.map((letter) => (
          <Letter key={letter} letter={letter} />
        ))}
      </div>
    </>
  )
}

export default LetterList
