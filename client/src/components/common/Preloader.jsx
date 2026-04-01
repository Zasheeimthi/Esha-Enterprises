import { useState, useEffect } from 'react';

const Preloader = () => {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(false), 800);
    return () => clearTimeout(timer);
  }, []);

  if (!visible) return null;

  return (
    <div id="preloader">
      <div className="preloader">
        <img src="/img/thumbs/preloader.gif" alt="preloader" />
      </div>
    </div>
  );
};

export default Preloader;
