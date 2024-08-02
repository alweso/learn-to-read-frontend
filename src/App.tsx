import React from 'react';
import './App.css';
import CardList from './components/CardList/CardList';
import LetterList from './components/LetterList/LetterList';
import UserList from './components/UserList/UserList';
import SingleCard from './components/SingleCard/SingleCard';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/cardlist" element={<CardList />} />
          {/* <Route path="/card" element={<CardList />} /> */}
          <Route path="/letterlist" element={<LetterList />} />
          <Route path="/userlist" element={<UserList />} />
          <Route path="/cards/:letter" element={<CardList />} />
          <Route path="/card/:card" element={<SingleCard />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;



// credits:
// <a href="https://www.flaticon.com/free-icons/volume" title="volume icons">Volume icons created by Bharat Icons - Flaticon</a>
