import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Features from './pages/Features';
import Contact from './pages/Contact';
import Generator from './pages/Generator';
import Pricing from './pages/Pricing';
import PageLayout from './components/layouts/PageLayout';
import GoogleAnalytics from './components/shared/GoogleAnalytics';

function App() {
  return (
    <Router>
      <GoogleAnalytics />
      <PageLayout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/features" element={<Features />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/generator" element={<Generator />} />
          <Route path="/pricing" element={<Pricing />} />
        </Routes>
      </PageLayout>
    </Router>
  );
}

export default App;