import React from 'react'
import './App.css'
import Card from './components/Card/Card'
import LetterList from './components/LetterList/LetterList'
import YouTubePlayer from './components/YouTubePlayer/YouTubePlayer'
import CardList from './components/CardList/CardList'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import SingleCard from './components/SingleCard/SingleCard'
import UserList from './components/UserList/UserList'

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/cardlist" element={<CardList />} />
          <Route path="/card" element={<CardList />} />
          <Route path="/letterlist" element={<LetterList />} />
          <Route path="/userlist" element={<UserList />} />
          <Route path="/cards/:letter" element={<CardList />} />
          <Route path="/card/:card" element={<SingleCard />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App
