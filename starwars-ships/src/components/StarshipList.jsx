import React, { useEffect, useState } from "react";
import StarshipCard  from "./StarshipCard";

const API_URL = "https://swapi.dev/api/starships/";

export default function StarshipList({ onSelect}) {
    const [starships, setStarships] = useState([]);
    const [next, setNext] = useState(null);
    const [search, setSearch] = useState("");

    useEffect(() => {
        fetchStarships(API_URL, false);
    }, []);

    function fetchStarships(url, append) {
        fetch(url)
        .then(res => res.json())
        .then(data => {
            setNext(data.next);
            if(append) setStarships(prev => [...prev, ...data.results]);
            else setStarships(data.results);
        });
    }

    function handleSearch() {
        fetchStarships(`${API_URL}?search=${search}`, false);
    }

    function handleLoadMore() {
        if (next) fetchStarships(next, true);
    }

    return (
        <div>
            <div className="search-row">
                <input
                placeholder="Name / Model"
                value={search}
                onChange={e => setSearch(e.target.value)}
                />
                <button onClick={handleSearch}>Filter</button>
            </div>
            <div className="starship-list">
                {starships.map(ship => (
                    <StarshipCard key={ship.url} ship={ship} onClick={() => onSelect(ship)} />
                ))}
            </div>
            {next &&
            <button className="more-btn" onClick={handleLoadMore}>Daha Fazla</button>
            }
        </div>
    );
}