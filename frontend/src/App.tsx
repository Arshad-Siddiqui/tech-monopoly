// import NavBar from "./components/NavBar/NavBar"
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home/Home'
import AllSpaces from './pages/AllSpaces/AllSpaces';

const App = () => {
  return (
    <div className="App">
      {/* <NavBar title='Tech Monopoly!' /> */}
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/allSpaces' element ={<AllSpaces />} />
          <Route path='/allProperties' element={<h1>All Properties</h1>} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App