import React from 'react'
import './App.css'
import Card from './components/Card/Card'
import LetterList from './components/LetterList/LetterList'
import YouTubePlayer from './components/YouTubePlayer/YouTubePlayer'
import CardList from './components/CardList/CardList'
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <CardList />
        <LetterList />
      </header>
    </div>
  )
}

export default App
