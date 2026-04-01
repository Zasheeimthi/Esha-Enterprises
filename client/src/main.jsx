import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';

// Vendor CSS
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
