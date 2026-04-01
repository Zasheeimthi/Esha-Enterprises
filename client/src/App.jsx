import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useFetchData } from './hooks/useFetchData';
import { useAOS } from './hooks/useAOS';
import { getSiteData } from './services/api';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import Preloader from './components/common/Preloader';
import BackToTop from './components/common/BackToTop';
import LoadingSpinner from './components/common/LoadingSpinner';
import HomePage from './pages/Home/HomePage';
import ProjectsPage from './pages/Projects/ProjectsPage';
import ContactPage from './pages/Contact/ContactPage';

function App() {
  const { data: siteData, loading } = useFetchData(getSiteData);

  // Initialize AOS animations
  useAOS();

  if (loading || !siteData) return <LoadingSpinner />;

  return (
    <BrowserRouter>
      <Preloader />
      <Header siteData={siteData} />

      <Routes>
        <Route path="/" element={<HomePage siteData={siteData} />} />
        <Route path="/projects" element={<ProjectsPage siteData={siteData} />} />
        <Route path="/contact" element={<ContactPage siteData={siteData} />} />
      </Routes>

      <Footer siteData={siteData} />
      <BackToTop />
    </BrowserRouter>
  );
}

export default App;
