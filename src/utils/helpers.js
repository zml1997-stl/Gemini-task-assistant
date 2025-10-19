import { format, isToday, isTomorrow, isPast } from 'date-fns';

export const generateId = () => {
  return `task_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
};

export const formatDate = (date) => {
  const dateObj = new Date(date);
  
  if (isToday(dateObj)) return 'Today';
  if (isTomorrow(dateObj)) return 'Tomorrow';
  if (isPast(dateObj)) return `${format(dateObj, 'MMM d')} (Overdue)`;
  
  return format(dateObj, 'MMM d, yyyy');
};

export const getPriorityColor = (priority) => {
  const colors = {
    High: 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200',
    Medium: 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200',
    Low: 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200',
  };
  return colors[priority] || colors.Low;
};

export const getCategoryColor = (category) => {
  const colors = {
    Work: 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200',
    Personal: 'bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200',
    Health: 'bg-pink-100 text-pink-800 dark:bg-pink-900 dark:text-pink-200',
    Learning: 'bg-indigo-100 text-indigo-800 dark:bg-indigo-900 dark:text-indigo-200',
    Shopping: 'bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-200',
    Other: 'bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-200',
  };
  return colors[category] || colors.Other;
};

export const sortTasks = (tasks, sortBy) => {
  const sorted = [...tasks];
  
  switch (sortBy) {
    case 'priority':
      const priorityOrder = { High: 0, Medium: 1, Low: 2 };
      return sorted.sort((a, b) => 
        priorityOrder[a.priority] - priorityOrder[b.priority]
      );
    
    case 'date':
      return sorted.sort((a, b) => 
        new Date(a.createdAt) - new Date(b.createdAt)
      );
    
    case 'category':
      return sorted.sort((a, b) => 
        a.category.localeCompare(b.category)
      );
    
    default:
      return sorted;
  }
};

export const filterTasks = (tasks, filter) => {
  switch (filter) {
    case 'active':
      return tasks.filter(task => !task.completed);
    
    case 'completed':
      return tasks.filter(task => task.completed);
    
    default:
      return tasks;
  }
};