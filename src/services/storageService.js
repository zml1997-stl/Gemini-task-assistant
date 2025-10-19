const STORAGE_KEY = 'gemini_tasks';
const THEME_KEY = 'gemini_theme';

export const storageService = {
  getTasks: () => {
    try {
      const tasks = localStorage.getItem(STORAGE_KEY);
      return tasks ? JSON.parse(tasks) : [];
    } catch (error) {
      console.error('Error loading tasks:', error);
      return [];
    }
  },

  saveTasks: (tasks) => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(tasks));
      return true;
    } catch (error) {
      console.error('Error saving tasks:', error);
      return false;
    }
  },

  getTheme: () => {
    try {
      return localStorage.getItem(THEME_KEY) || 'light';
    } catch (error) {
      return 'light';
    }
  },

  saveTheme: (theme) => {
    try {
      localStorage.setItem(THEME_KEY, theme);
    } catch (error) {
      console.error('Error saving theme:', error);
    }
  },

  clearAll: () => {
    try {
      localStorage.removeItem(STORAGE_KEY);
      return true;
    } catch (error) {
      console.error('Error clearing storage:', error);
      return false;
    }
  }
};