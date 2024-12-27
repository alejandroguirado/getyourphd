import React from 'react';
import './homepage.css';
import SearchBar from '../components/SearchBar';

const HomePage = () => {
    return (
        <div className="homepage">
            {/* Header */}
            <header className="header">
                <nav className="navbar">
                    <div className="logo">MyWebsite</div>
                    <ul className="nav-links">
                        <li><a href="#">Home</a></li>
                        <li><a href="#about">About</a></li>
                        <li><a href="#contact">Contact</a></li>
                    </ul>
                </nav>
            </header>

            {/* Main Content */}
            <main className="main-content">
                <h1>Welcome to My Website</h1>
                <p>Discover amazing content here!</p>

                {/* Search Bar */}
                <SearchBar />
            </main>

            {/* Footer */}
            <footer className="footer">
                <p>&copy; 2024 MyWebsite. All Rights Reserved.</p>
            </footer>
        </div>
    );
};

export default HomePage;

