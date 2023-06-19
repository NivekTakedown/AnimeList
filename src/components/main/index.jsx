//main component 
import React from 'react';
import Header from '../header';
import AnimeList from '../AnimeList';
import Footer from '../footer';
import '../styles.css';

function Main() {
    return (
        <div className="main">
        <Header />
        <AnimeList />
        <Footer />
        </div>
    );
}

export default Main;