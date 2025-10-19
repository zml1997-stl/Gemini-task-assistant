const API_BASE = '/.netlify/functions';

export const apiService = {
  prioritizeTasks: async (tasks) => {
    try {
      const response = await fetch(`${API_BASE}/gemini-api`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ action: 'prioritize', tasks }),
      });
      
      if (!response.ok) throw new Error('Failed to prioritize tasks');
      return await response.json();
    } catch (error) {
      console.error('API Error:', error);
      throw error;
    }
  },

  getInsights: async (tasks) => {
    try {
      const response = await fetch(`${API_BASE}/gemini-api`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ action: 'insights', tasks }),
      });
      
      if (!response.ok) throw new Error('Failed to get insights');
      return await response.json();
    } catch (error) {
      console.error('API Error:', error);
      throw error;
    }
  },

  categorizeTask: async (task) => {
    try {
      const response = await fetch(`${API_BASE}/gemini-api`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ action: 'categorize', task }),
      });
      
      if (!response.ok) throw new Error('Failed to categorize task');
      return await response.json();
    } catch (error) {
      console.error('API Error:', error);
      throw error;
    }
  },
};