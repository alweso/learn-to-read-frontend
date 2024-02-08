import React from 'react'
import './App.css'
import Card from './components/Card/Card'
import LetterList from './components/LetterList/LetterList'
import YouTubePlayer from './components/YouTubePlayer/YouTubePlayer'
import CardList from './components/CardList/CardList'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

function App() {
  // q: in the last example with "/:letter,", how can I list a cardlist with words that have the same letter?
  // a: You can use the useParams hook to get the letter from the URL and then filter the wordsList to get the words that have the same letter. Here's how you can do it:
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/cardlist" element={<CardList />} />
          <Route path="/card" element={<CardList />} />
          <Route path="/letterlist" element={<LetterList />} />
          <Route path="/:letter" element={<CardList />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App
