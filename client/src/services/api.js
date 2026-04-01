import axios from 'axios';

const API_URL = import.meta.env.VITE_API_URL || '/api';

const apiClient = axios.create({
  baseURL: API_URL,
  headers: { 'Content-Type': 'application/json' },
  // Reject responses that aren't JSON (e.g. HTML fallback from dev server)
  transformResponse: [(data) => {
    try {
      return JSON.parse(data);
    } catch {
      throw new Error('Response is not valid JSON');
    }
  }],
});

// Fetch home page data
export const getHomePageData = async () => {
  try {
    const { data } = await apiClient.get('/home');
    return data;
  } catch {
    // Fallback to local data when API is unavailable
    const { homePageData } = await import('../data/homeData');
    return homePageData;
  }
};

// Fetch projects data
export const getProjectsData = async () => {
  try {
    const { data } = await apiClient.get('/projects');
    return data;
  } catch {
    const { projectsPageData } = await import('../data/projectsData');
    return projectsPageData;
  }
};

// Fetch contact page data
export const getContactData = async () => {
  try {
    const { data } = await apiClient.get('/contact');
    return data;
  } catch {
    const { contactPageData } = await import('../data/contactData');
    return contactPageData;
  }
};

// Fetch site-wide data (header, footer, etc.)
export const getSiteData = async () => {
  try {
    const { data } = await apiClient.get('/site');
    return data;
  } catch {
    const { siteData } = await import('../data/siteData');
    return siteData;
  }
};

// Submit contact form
export const submitContactForm = async (formData) => {
  try {
    const { data } = await apiClient.post('/contact', formData);
    return { success: true, data };
  } catch (error) {
    return {
      success: false,
      error: error.response?.data?.message || 'Failed to submit form. Please try again.',
    };
  }
};
