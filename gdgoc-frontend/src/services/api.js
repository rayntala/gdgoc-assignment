const API_BASE_URL = 'https://gdgoc-ugm-api.vercel.app/api';

export const getTracks = async () => {
  const res = await fetch(`${API_BASE_URL}/tracks`);
  if (!res.ok) throw new Error('Failed to fetch tracks');
  const data = await res.json();
  return data.data;
};

export const getFormats = async () => {
  const res = await fetch(`${API_BASE_URL}/formats`);
  if (!res.ok) throw new Error('Failed to fetch formats');
  const data = await res.json();
  return data.data;
};

export const getJourney = async () => {
  const res = await fetch(`${API_BASE_URL}/journey`);
  if (!res.ok) throw new Error('Failed to fetch journey');
  const data = await res.json();
  return data.data;
};

export const getRoles = async () => {
  const res = await fetch(`${API_BASE_URL}/roles`);
  if (!res.ok) throw new Error('Failed to fetch roles');
  const data = await res.json();
  return data.data;
};

export const getFAQ = async () => {
  const res = await fetch(`${API_BASE_URL}/faqs`);
  if (!res.ok) throw new Error('Failed to fetch FAQs');
  const data = await res.json();
  return data.data; 
};

export const getNavigation = async () => {
  const res = await fetch(`${API_BASE_URL}/navigation`);
  if (!res.ok) throw new Error('Failed to fetch navigation links');
  const data = await res.json();
  return data.data;
}