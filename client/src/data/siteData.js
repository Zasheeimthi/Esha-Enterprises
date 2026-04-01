export const siteData = {
  company: {
    name: 'ESHA Enterprises',
    tagline: 'Go Green. Plastic-Free Tamil Nadu.',
    description:
      'ESHA Enterprises is committed to creating sustainable waste management solutions that protect our environment and support a plastic-free future for Tamil Nadu.',
    phone: '+91 97871 80829',
    phoneRaw: '+919787180829',
    email: 'esha.office.dgl@gmail.com',
    address: {
      line1: '1/276, Thogamalai Kottai, Kovilar',
      line2: 'Dindigul - 624706',
      line3: 'Tamil Nadu, India',
      short: 'Dindigul - 624706, Tamil Nadu',
    },
    hours: 'Mon-Sat: 9:00am to 6:00pm',
    copyright: '2026 ESHA Enterprises. All Rights Reserved. | Go Green. Plastic-Free Tamil Nadu.',
  },
  logo: {
    main: '/img/logo/logo.svg',
    white: '/img/logo/logo-white.svg',
    favicon: '/img/logo/favi.svg',
  },
  navigation: [
    { label: 'Home', path: '/', hash: '' },
    { label: 'About Us', path: '/', hash: '#about' },
    { label: 'Our Mission', path: '/', hash: '#mission' },
    { label: 'Services', path: '/', hash: '#services' },
    { label: 'Projects', path: '/projects', hash: '' },
    { label: 'Contact Us', path: '/contact', hash: '' },
  ],
  socialLinks: [
    { icon: 'fab fa-facebook-f', url: 'https://facebook.com/' },
    { icon: 'fab fa-x-twitter', url: 'https://twitter.com/' },
    { icon: 'fab fa-instagram', url: 'https://www.instagram.com/' },
    { icon: 'fab fa-linkedin-in', url: 'https://linkedin.com/' },
  ],
  footer: {
    quickLinks: [
      { label: 'Home', path: '/', hash: '' },
      { label: 'About Us', path: '/', hash: '#about' },
      { label: 'Our Mission', path: '/', hash: '#mission' },
      { label: 'Our Services', path: '/', hash: '#services' },
      { label: 'Why Choose Us', path: '/', hash: '#why-choose' },
      { label: 'Contact Us', path: '/contact', hash: '' },
    ],
    serviceLinks: [
      { label: 'Collection and Transportation', path: '/', hash: '#services' },
      { label: 'Waste Segregation', path: '/', hash: '#services' },
      { label: 'Mechanical Shredding', path: '/', hash: '#services' },
      { label: 'Pre-Processing', path: '/', hash: '#services' },
      { label: 'Co-Processing', path: '/', hash: '#services' },
      { label: 'Industrial Waste Management', path: '/', hash: '#services' },
    ],
    bottomLinks: [
      { label: 'Terms and Conditions', path: '#' },
      { label: 'Privacy Policy', path: '#' },
    ],
  },
  contactInfoBar: [
    {
      icon: 'fa-solid fa-paper-plane',
      title: 'esha.office.dgl@gmail.com',
      subtitle: 'Send us an Email',
      href: 'mailto:esha.office.dgl@gmail.com',
      active: false,
    },
    {
      icon: 'fa-solid fa-phone-arrow-up-right',
      title: '+91 97871 80829',
      subtitle: 'Call Us Anytime',
      href: 'tel:+919787180829',
      active: true,
    },
    {
      icon: 'fa-solid fa-location-dot',
      title: 'Dindigul - 624706, Tamil Nadu',
      subtitle: '1/276, Thogamalai Kottai, Kovilar',
      href: '#',
      active: false,
    },
  ],
};
