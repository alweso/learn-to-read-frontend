import * as React from 'react'
import { useState, useEffect } from 'react'

interface CardProps {
  image: string
  word: string
  sound: string
}

const Card = ({ image, word, sound }: CardProps) => {
  return (
    <div>
      <h1>{word}</h1>
    </div>
  )
}

export default Card
