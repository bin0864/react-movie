import { useState } from 'react'
import Header from './component/Header'
import MovieList from './component/MovieList'
import MovieEdit from './component/MovieEdit'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='App'>
      <Header/>
      <MovieEdit/>
      <MovieList/>
    </div>
  )
}

export default App
