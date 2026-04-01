export const contactPageData = {
  breadcrumb: {
    title: 'Contact Us',
    items: [
      { label: 'Home', path: '/' },
      { label: 'Contact Us', path: '#' },
    ],
    image: '/img/bg/breadcrumb-bg.webp',
    thumb: '/img/thumbs/truck1.svg',
  },
  infoCards: [
    {
      title: 'Our Location',
      icon: 'fa-light fa-location-dot',
      content: '1/276, Thogamalai Kottai, Kovilar<br/>Dindigul - 624706, Tamil Nadu, India',
    },
    {
      title: 'Phone Number',
      icon: 'fa-light fa-phone-volume',
      content: '<a href="tel:+919787180829">+91 97871 80829</a><br/>Call us anytime for inquiries',
    },
    {
      title: 'Email Address',
      icon: 'fa-light fa-envelope',
      content: '<a href="mailto:esha.office.dgl@gmail.com">esha.office.dgl@gmail.com</a><br/>We respond within 24 hours',
    },
  ],
  form: {
    title: 'Get in Touch with ESHA Enterprises',
    subtitle: 'Have questions about our waste management services? Fill out the form below and our team will get back to you.',
    services: [
      { value: '0', label: 'Select Service Required' },
      { value: 'collection', label: 'Collection and Transportation' },
      { value: 'segregation', label: 'Waste Segregation' },
      { value: 'shredding', label: 'Mechanical Shredding and Screening' },
      { value: 'coprocessing', label: 'Co-Processing in Cement Kilns' },
      { value: 'municipal', label: 'Municipal Waste Management' },
      { value: 'industrial', label: 'Industrial Waste Management' },
      { value: 'other', label: 'Other Services' },
    ],
  },
  map: {
    embedUrl:
      'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d125323.40216332498!2d77.89777147226088!3d10.366041645498347!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b00aa7a87de8b0d%3A0x7603e68e5c5cadc4!2sDindigul%2C%20Tamil%20Nadu%2C%20India!5e0!3m2!1sen!2sus!4v1708352698740!5m2!1sen!2sus',
  },
  whyContact: {
    subtitle: 'Why Contact Us',
    title: 'Your Trusted Waste Management Partner',
    cards: [
      { title: 'PCB Compliant', icon: 'fa-light fa-badge-check', description: 'All operations comply with Pollution Control Board standards.' },
      { title: '24/7 Support', icon: 'fa-light fa-headset', description: 'Our team is available to address your waste management needs.' },
      { title: 'Free Consultation', icon: 'fa-light fa-comments', description: 'Get expert advice on the best waste management solutions for you.' },
    ],
  },
};
