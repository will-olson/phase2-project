import React, { useState, useEffect } from "react";

function Header() {
  const [isDarkMode, setIsDarkMode] = useState(() => {
    return localStorage.getItem('isDarkMode') === 'true';
  });

  useEffect(() => {
    document.body.className = isDarkMode ? 'dark-mode' : 'light-mode';

    localStorage.setItem('isDarkMode', isDarkMode);
  }, [isDarkMode]);

  function toggleDarkMode() {
    setIsDarkMode(prevMode => !prevMode);
  }

  return (
    <div className="header">
      <h1>
        Flatiron Software Engineering Job Search Guide
      </h1>
      <button onClick={toggleDarkMode}>
        {isDarkMode ? 'Light Mode' : 'Dark Mode'}
      </button>
    </div>
  );
}

export default Header;