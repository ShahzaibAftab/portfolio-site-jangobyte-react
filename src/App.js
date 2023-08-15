import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import HomePage from './Homepage/HomePage';
import Apply from './Careers/Apply';

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/Careers" element={<Apply />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
