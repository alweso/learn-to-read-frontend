import { Link } from 'react-router-dom'

interface LetterProps {
  letter: string
}

const Letter = ({ letter }: LetterProps) => {
  return (
    <Link to={`/${letter}`}>
      <div className="w-[200px] h-[200px] bg-white rounded-md p-1 shadow-lg cursor-pointer">
        <div className="rounded-md bg-[#f76a59] h-full w-full flex items-center justify-center">
          <h1 className="text-5xl font-bold text-white uppercase">{letter}</h1>
        </div>
      </div>
    </Link>
  )
}

export default Letter
