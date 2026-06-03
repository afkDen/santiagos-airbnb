import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import { Layout } from './components/Layout';
import { Home } from './pages/Home';
import { Amenities } from './pages/Amenities';
import { Packages } from './pages/Packages';
import { Location } from './pages/Location';
import { Events } from './pages/Events';
import { Gallery } from './pages/Gallery';
import { Contact } from './pages/Contact';

export const App: React.FC = () => {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/amenities" element={<Amenities />} />
          <Route path="/packages" element={<Packages />} />
          <Route path="/location" element={<Location />} />
          <Route path="/events" element={<Events />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<Home />} /> {/* Fallback route */}
        </Routes>
      </Layout>
    </Router>
  );
};
export default App;
