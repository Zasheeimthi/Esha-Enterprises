import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useInitAOS } from '../../hooks/useAOS';
import { useFetchData } from '../../hooks/useFetchData';
import { getHomePageData } from '../../services/api';
import LoadingSpinner from '../../components/common/LoadingSpinner';
import ErrorMessage from '../../components/common/ErrorMessage';
import HeroSlider from '../../components/sections/HeroSlider';
import QuickServices from '../../components/sections/QuickServices';
import AboutSection from '../../components/sections/AboutSection';
import MissionSection from '../../components/sections/MissionSection';
import ServicesSection from '../../components/sections/ServicesSection';
import EnvironmentalBenefits from '../../components/sections/EnvironmentalBenefits';
import WasteToEnergy from '../../components/sections/WasteToEnergy';
import WhyChooseSection from '../../components/sections/WhyChooseSection';
import PhilosophySection from '../../components/sections/PhilosophySection';
import FAQSection from '../../components/sections/FAQSection';
import ContactInfoBar from '../../components/common/ContactInfoBar';

const HomePage = ({ siteData }) => {
  const { data, loading, error } = useFetchData(getHomePageData);
  const location = useLocation();

  // Initialize AOS after data loads
  useInitAOS(data);

  // Handle hash scrolling
  useEffect(() => {
    if (data && location.hash) {
      const timer = setTimeout(() => {
        const element = document.querySelector(location.hash);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 300);
      return () => clearTimeout(timer);
    }
  }, [data, location.hash]);

  if (loading) return <LoadingSpinner />;
  if (error) return <ErrorMessage message={error} />;
  if (!data) return null;

  return (
    <main>
      <HeroSlider slides={data.heroSlides} socialLinks={siteData.socialLinks} />
      <QuickServices services={data.quickServices} />
      <AboutSection data={data.about} />
      <MissionSection data={data.mission} />
      <ServicesSection data={data.services} />
      <EnvironmentalBenefits data={data.environmentalBenefits} />
      <WasteToEnergy data={data.wasteToEnergy} />
      <WhyChooseSection data={data.whyChoose} />
      <PhilosophySection data={data.philosophy} />
      <FAQSection faqs={data.faqs} />
      <ContactInfoBar items={siteData.contactInfoBar} />
    </main>
  );
};

export default HomePage;
