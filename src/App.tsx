import './App.css';
import React from 'react';
import  Navbar  from './components/Navbar'
import ProcessContextProvider from './contexts/ProcessContext'
import ThemeContextProvider from './contexts/ThemeContext'
import ToggleTheme from './components/ToggleTheme'
import MovieContextProvider from './contexts/MovieContext'
import Movies from './components/Movies'
function App() {
  return (
    <div>
      <MovieContextProvider>
        <ThemeContextProvider>
          <ProcessContextProvider>
              <Navbar />
              <Movies />
              <ToggleTheme />
          </ProcessContextProvider>
        </ThemeContextProvider>
      </MovieContextProvider>
    </div>
  )
}

export default App;