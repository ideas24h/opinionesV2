import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Dashboard from './components/Dashboard';
import FeedbackForm from './components/FeedbackForm';
import LandingPage from './components/LandingPage';

const App: React.FC = () => {
  return (
    <Router>
      <div className="min-h-screen bg-gray-100">
        <Header />
        <main className="container mx-auto px-4 py-8">
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/feedback/:businessId" element={<FeedbackForm />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;