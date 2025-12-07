import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import { Dashboard } from './pages/Dashboard';
import { Screener } from './pages/Screener';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/screener" element={<Screener />} />
      </Routes>
    </Router>
  );
}

export default App;
