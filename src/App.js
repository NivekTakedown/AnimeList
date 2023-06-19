import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/header';
import Footer from './components/footer';
import Main from './components/main';
import AnimeList from './components/AnimeList';

function App() {
  return (
    <Router>
      <div>
        <Header />
        <AnimeList />
        <Routes>
          <Route exact path="/" component={Main} />
          <Route path="/AnimeList" component={AnimeList} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;