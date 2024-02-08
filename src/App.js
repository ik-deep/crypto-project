import {React} from 'react'
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import HomePage from './pages/Home';
import DashboardPage from './pages/Dashboard';
import CoinPage from './pages/Coin';
import ComparePage from './pages/Compare';
import WatchlistPage from './pages/Watchlist';



function App() {
  return (
    <Router>
      <Routes>
          <Route path="/" element={<HomePage/>}/>
          <Route path="/dashboard" element={<DashboardPage/>}/>
          <Route path="/coin/:id" element={<CoinPage/>}/>
          <Route path="/compare" element={<ComparePage/>}/>
          <Route path="/watchlist" element={<WatchlistPage/>}/>
      </Routes>
    </Router>
  );
}

export default App;
