import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import '../styles.css';

function AnimeList() {
    const [animeList, setAnimeList] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        async function getAnimeList() {
            try {
                const response = await axios.get('http://localhost:3013/');
                setAnimeList(response.data.data);
                setIsLoading(false);
            } catch (error) {
                console.error(error);
            }
        }

        getAnimeList();
    }, []);

    if (isLoading) {
        return <div>Loading...</div>;
    }

    return (
        <div className="anime-list">
            <h2>Anime List</h2>
            <div className="anime-list--container">
                {animeList.map((anime) => (
                    <div className="anime-list--item" key={anime.node.id}>
                        <Link to={`/anime/${anime.node.id}`}>
                            <img src={anime.node.main_picture.large} alt={anime.node.title} />
                            <h3>{anime.node.title}</h3>
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default AnimeList;