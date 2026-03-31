import React, { useState, useEffect } from 'react';
import { FiSun, FiMoon } from 'react-icons/fi';

const ThemeToggle = () => {
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    const root = window.document.documentElement;
    const initialTheme = localStorage.getItem('theme') || 'dark';
    const isDarkMode = initialTheme === 'dark';
    setIsDark(isDarkMode);
    root.classList.toggle('dark', isDarkMode);
  }, []);

  const toggleTheme = () => {
    const root = window.documentElement;
    const newIsDark = !isDark;
    setIsDark(newIsDark);
    localStorage.setItem('theme', newIsDark ? 'dark' : 'light');
    root.classList.toggle('dark', newIsDark);
  };

  return (
    <button
      onClick={toggleTheme}
      className="relative w-12 h-6 p-1 bg-gray-200 dark:bg-gray-800 rounded-full transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
      aria-label="Toggle dark mode"
    >
      <FiSun className={`absolute top-1 left-1 w-4 h-4 text-yellow-400 transform transition-all duration-500 ${isDark ? 'translate-x-0 opacity-100' : 'translate-x-6 opacity-0'}`} />
      <FiMoon className={`absolute top-1 right-1 w-4 h-4 text-gray-600 dark:text-gray-300 transform transition-all duration-500 ${!isDark ? 'translate-x-0 opacity-100' : '-translate-x-6 opacity-0'}`} />
      <div className={`w-4 h-4 bg-white dark:bg-gray-900 rounded-full shadow-md transform transition-all duration-500 ease-in-out ${isDark ? 'translate-x-6' : 'translate-x-0'}`} />
    </button>
  );
};

export default ThemeToggle;

