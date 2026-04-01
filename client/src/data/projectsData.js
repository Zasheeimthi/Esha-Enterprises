export const projectsPageData = {
  breadcrumb: {
    title: 'Our Projects',
    items: [
      { label: 'Home', path: '/' },
      { label: 'Our Projects', path: '#' },
    ],
    image: '/img/bg/breadcrumb-bg.webp',
    thumb: '/img/thumbs/truck1.svg',
  },
  header: {
    subtitle: 'Our Projects',
    title: 'Waste Management Projects We Have Completed',
  },
  projects: [
    {
      id: 1,
      title: 'Municipal Waste Collection',
      description: 'Comprehensive door-to-door waste collection services for municipalities across Tamil Nadu, ensuring clean and hygienic communities.',
      image: '/img/thumbs/municipal.svg',
      tag: 'Municipal',
    },
    {
      id: 2,
      title: 'RDF Production Facility',
      description: 'State-of-the-art Refuse Derived Fuel production converting non-recyclable waste into alternative fuel for cement kilns.',
      image: '/img/thumbs/thumb-70.webp',
      tag: 'Energy',
    },
    {
      id: 3,
      title: 'Industrial Waste Processing',
      description: 'Specialized handling and processing of industrial non-recyclable plastic waste with full regulatory compliance.',
      image: '/img/thumbs/thumb-71.webp',
      tag: 'Industrial',
    },
    {
      id: 4,
      title: 'Waste Segregation Center',
      description: 'Advanced material recovery facility for systematic sorting and segregation of mixed waste streams.',
      image: '/img/thumbs/thumb-72.webp',
      tag: 'Segregation',
    },
    {
      id: 5,
      title: 'Mechanical Shredding Unit',
      description: 'High-capacity mechanical shredding and screening facility for waste size reduction and pre-processing.',
      image: '/img/thumbs/thumb-73.webp',
      tag: 'Processing',
    },
    {
      id: 6,
      title: 'Cement Kiln Co-Processing',
      description: 'Partnership with cement manufacturers for sustainable waste-to-energy co-processing solutions.',
      image: '/img/thumbs/thumb-74.webp',
      tag: 'Co-Processing',
    },
  ],
  team: {
    subtitle: 'Our Team',
    title: 'Meet the People Behind ESHA',
    image: '/img/bg/team.svg',
  },
  stats: [
    { label: 'Projects Completed', icon: 'fa-light fa-check-circle', value: 50 },
    { label: 'Tonnes Processed', icon: 'fa-light fa-weight-scale', value: 10000 },
    { label: 'Partner Municipalities', icon: 'fa-light fa-building-columns', value: 25 },
    { label: 'Industrial Clients', icon: 'fa-light fa-industry', value: 100 },
  ],
  cta: {
    subtitle: 'Start Your Project',
    title: 'Ready to Partner with Us?',
    description: 'Whether you are a municipality, industrial facility, or organization looking for sustainable waste management solutions, ESHA Enterprises is here to help. Contact us today for a free consultation.',
    buttonText: 'Request a Quote',
    buttonLink: '/contact',
  },
};
