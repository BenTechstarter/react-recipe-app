
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Main from './components/Main';
import './App.css';

const App = () => {
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  return (
    <Router>
      <div className={`flex flex-col min-h-screen ${theme === 'dark' ? 'dark' : ''}`}>
        <Header />
        <main className="flex-grow">
          <button
            className="m-4 p-2 bg-gray-200 dark:bg-gray-800 text-black dark:text-white rounded"
            onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
          >
            Switch Theme
          </button>
          <Main />
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
