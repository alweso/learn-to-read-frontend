import React from 'react'
import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { AppProvider } from './contexts/AppContext'
import LetterList from './components/LetterList/LetterList'
import CardList from './components/CardList/CardList'
import SingleCard from './components/SingleCard/SingleCard'
import CardListAndSingle from './containers/CardListAndSingle/CardListAndSingle'

function App() {
  return (
    <div className="App">
      <AppProvider>
        <Router>
          <Routes>
            {/* <Route path="/cardlist" element={<CardList />} />
          <Route path="/card" element={<CardList />} /> */}
            <Route path="/letterlist" element={<LetterList />} />
            {/* <Route path="/cards/:letter" element={<CardList />} /> */}
            <Route path="/cards/:letter" element={<CardList />} />
          </Routes>
        </Router>
      </AppProvider>
    </div>
  )
}

export default App
