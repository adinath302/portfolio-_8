import { color } from 'framer-motion';
import React from 'react'
import { GitHubCalendar } from 'react-github-calendar';

const GitHubContributions = () => {
  const blueTheme = {
     light: ['#f8f9fa', '#d1d5db', '#9ca3af', '#4b5563', '#1f2937'],
  dark: [
    '#0f172a', // Navy background
    '#264653', // Deep Teal
    '#2a9d8f', // Muted Green
    '#e9c46a', // Warm Gold
    '#f4a261'  // Soft Orange
  ],
  };

  return (
    <div className='px-6'>
      <div className='font-bold text-gray-700 mb-4'>Github Contributions</div>

      <GitHubCalendar
        username="adinath302"
        theme={blueTheme}
        colorScheme="dark"      // <--- Forces dark mode text colors
        style={{ color: 'white' }} // <--- Sets the text color to white
        showWeekdayLabels={false}
        blockSize={8}
        blockMargin={4}
        fontSize={12}
      />

    </div>
  )
}

export default GitHubContributions;