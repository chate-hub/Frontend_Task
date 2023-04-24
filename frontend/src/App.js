import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

//page & layout imports
import Homepage from './pages/Homepage'
import RestaurantDetails from './pages/RestaurantDetails';
import RestaurantGrid from './pages/RestaurantGrid'
import SiteHeader from './components/SiteHeader'

function App() {
  return (
    <Router>
      <div className="App">
        <SiteHeader />
        <Routes>
          <Route path="/" element={<Homepage />} /> 
          <Route path="/api/name/:id'" element={<RestaurantDetails />} /> 
          <Route path="/api/rating/:id'" element={<RestaurantGrid />} />          
        </Routes>
      </div>
    </Router>
  );
}

export default App;
