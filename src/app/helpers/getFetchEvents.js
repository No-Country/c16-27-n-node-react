export async function fetchEvents() {
  try {
    const response = await fetch('https://apimeethubbackend.onrender.com/api/events');
    if (!response.ok) {
      throw new Error('Failed to fetch events');
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching events:', error);
    throw error;
  }
}
