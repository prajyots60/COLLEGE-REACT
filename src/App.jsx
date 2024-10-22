import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';

import Courses from './components/Courses';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import Calculator from './pages/About';
import Profile from './components/Profile';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-700 text-white relative overflow-hidden">

        {/* Background gradient */}
        <div className='absolute inset-0 overflow-hidden'>
          <div className='absolute inset-0'>
            <div className='absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(ellipse_at_top,rgba(16,185,129,0.3)_0%,rgba(10,80,60,0.2)_45%,rgba(0,0,0,0.1)_100%)]' />
          </div>
        </div>

        <div className="relative min-h-screen flex flex-col">
          <Header />
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/about" element={<Calculator />} />
              <Route path="/courses" element={<Courses />} />
              <Route path="/contact" element={<Profile />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </div>
    </Router>
  );
}

export default App;
