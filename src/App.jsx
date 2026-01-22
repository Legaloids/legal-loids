import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { gsap } from 'gsap';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Disclaimer from './components/Disclaimer';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import BlogPage from './pages/BlogPage';
import BlogSinglePage from './pages/BlogSinglePage';
import GalleryPage from './pages/GalleryPage';
import PracticePage from './pages/PracticePage';
import WonPage from './pages/WonPage';
import ExpertisePage from './pages/ExpertisePage';
import PeoplePage from './pages/PeoplePage';
import NewsEventsPage from './pages/NewsEventsPage';
import LegacyPage from './pages/LegacyPage';
import ThoughtLeadershipPage from './pages/ThoughtLeadershipPage';

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const loaderRef = React.useRef(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (loaderRef.current) {
        gsap.to(loaderRef.current, {
          opacity: 0,
          duration: 0.5,
          onComplete: () => {
            setIsLoading(false);
          },
        });
      } else {
        setIsLoading(false);
      }
    }, 800);

    return () => clearTimeout(timer);
  }, []);

  return (
    <Router>
      <div className="min-h-screen bg-white">
        {/* Disclaimer Modal */}
        <Disclaimer />
        
        {/* Loading Screen */}
        {isLoading && (
          <div
            ref={loaderRef}
            className="fixed inset-0 z-[9999] flex items-center justify-center bg-primary-600"
          >
            <div className="text-center">
              <div className="w-16 h-16 border-4 border-white border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
              <p className="text-white text-xl font-semibold">Loading...</p>
            </div>
          </div>
        )}
        <Navbar />
        <main className="pt-20">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/blog" element={<BlogPage />} />
            <Route path="/blog-single" element={<BlogSinglePage />} />
            <Route path="/gallery" element={<GalleryPage />} />
            <Route path="/practice" element={<PracticePage />} />
            <Route path="/won" element={<WonPage />} />
            <Route path="/expertise" element={<ExpertisePage />} />
            <Route path="/people" element={<PeoplePage />} />
            <Route path="/news-events" element={<NewsEventsPage />} />
            <Route path="/legacy" element={<LegacyPage />} />
            <Route path="/thought-leadership" element={<ThoughtLeadershipPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
