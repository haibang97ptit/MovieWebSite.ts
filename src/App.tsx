import './App.css';
import React from 'react';
import  Navbar  from './components/Navbar'
import ProcessContextProvider from './contexts/ProcessContext'
import ThemeContextProvider from './contexts/ThemeContext'
import ToggleTheme from './components/ToggleTheme'
import MovieContextProvider from './contexts/MovieContext'
import Movies from './components/Movies'
import AuthContextProvider from './contexts/AuthContext'
import FetchApi from './components/FetchApi'
import AlerLogin from './components/AlerLogin'
function App() {
  return (
    <div>
      <AuthContextProvider>
          <MovieContextProvider>
            <ThemeContextProvider>
              <ProcessContextProvider>
                  <Navbar />
                  <Movies />
                  <FetchApi />
                  <ToggleTheme />
              </ProcessContextProvider>
            </ThemeContextProvider>
          </MovieContextProvider>
      </AuthContextProvider>
     
    </div>
  )
}

export default App;