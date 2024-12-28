import React, {  useState } from 'react';
import './SearchBar.css';



const SearchBar = () => {
    const [searchQuery, setSearchQuery] = useState('');
    const [results, setResults] = useState([]);

    const handleSearch = async () => {
        try {
            const response = await fetch('http://127.0.0.1:8000/api/posts/');
            const data = await response.json();
            setResults(data.results);
            console.log()
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    return (
        <><div className="search-bar">
            <input
                type="text"
                placeholder="Search..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)} />
            <button onClick={handleSearch}>Search</button>
        </div>
        <div className="search-results">
                {results.length > 0 ? (
                    <ul>
                        {results.map((result, index) => (
                            <li key={index}>{result.title}</li>
                        ))}
                    </ul>
                ) : (
                    <p>No results found</p>
                )}
            </div></>

        
    );
};

export default SearchBar;