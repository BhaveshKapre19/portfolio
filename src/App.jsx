import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import LoadingScreen from './components/LoadingScreen';
import BackToTop from './components/BackToTop';
import HeroSection from './sections/HeroSection';
import ProjectsSection from './sections/ProjectsSection';
import AboutSection from './sections/AboutSection';
import SkillsSection from './sections/SkillsSection';
import CertificationsSection from './sections/CertificationsSection';
import ExperienceSection from './sections/ExperienceSection';
import WhyHireSection from './sections/WhyHireSection';
import ContactSection from './sections/ContactSection';
import Footer from './sections/Footer';
import ThemeSoftBlue from './pages/ThemeSoftBlue';
import SitemapPage from './pages/SitemapPage';

function DarkPortfolio() {
  return (
    <>
      <LoadingScreen />
      <Navbar />
      <main>
        <HeroSection />
        <ProjectsSection />
        <AboutSection />
        <SkillsSection />
        <CertificationsSection />
        <ExperienceSection />
        <WhyHireSection />
        <ContactSection />
      </main>
      <Footer />
      <BackToTop />
    </>
  );
}

function App() {
  return (
    <BrowserRouter basename={import.meta.env.BASE_URL}>
      <Routes>
        <Route path="/" element={<DarkPortfolio />} />
        <Route path="/sitemap" element={<SitemapPage />} />
        <Route path="/theme" element={<ThemeSoftBlue />} />
        <Route path="/theme4" element={<ThemeSoftBlue />} />
        <Route path="/soft-blue" element={<ThemeSoftBlue />} />
        <Route path="*" element={<DarkPortfolio />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
