import Navbar1 from './components/NavBar/Navbar1';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import './App.css';
import Home from './components/Home/Home';
import Popularmovies from './components/PopularMovies/Popularmovies';
import LatestMovie from './components/LatestMovies/LatestMovie';

function App() {
  return (

   
    <div className="App">
       <Navbar1/>
       <BrowserRouter>
        <Routes>
            <Route path='/' element={<Home/>}  />
            <Route path='/popular' element={<Popularmovies/>}  />
            <Route path='/latest' element={<LatestMovie/>}  />



        </Routes>
       </BrowserRouter>

  


    </div>
  );
}

export default App;
