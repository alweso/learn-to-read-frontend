interface LetterProps {
  letter: string
}

const Letter = ({ letter }: LetterProps) => {
  return (
    <div className="w-[100px] h-[100px] flex items-center justify-center bg-gray-500 rounded-md">
      <h1 className="text-xl">{letter}</h1>
    </div>
  )
}

export default Letter
