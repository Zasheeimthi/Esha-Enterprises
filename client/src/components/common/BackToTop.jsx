import { useState, useEffect } from 'react';

const BackToTop = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 300);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = (e) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <a
      href="#"
      id="back-to-top"
      className={`back-to-top${visible ? ' active' : ''}`}
      title="Go to Top"
      onClick={scrollToTop}
      style={{ display: visible ? 'flex' : 'none' }}
    >
      <i className="fa-solid fa-arrow-up"></i>
    </a>
  );
};

export default BackToTop;
