import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import { Dashboard } from './pages/Dashboard';
import { Watchlist } from './pages/Watchlist';
import { PastWeekCanslim } from './pages/PastWeekCanslim';
import { TopGainers } from './pages/TopGainers';
import { Top20Snapshot } from './pages/Top20Snapshot';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/watchlist" element={<Watchlist />} />
        <Route path="/todays-canslim" element={<Top20Snapshot />} />
        <Route path="/past-week-canslim" element={<PastWeekCanslim />} />
        <Route path="/top-gainers" element={<TopGainers />} />
      </Routes>
    </Router>
  );
}

export default App;
