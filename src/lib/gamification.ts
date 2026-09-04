export const calculateNewStreak = (lastActiveDate: string | null): number => {
  if (!lastActiveDate) return 1;
  
  const lastActive = new Date(lastActiveDate);
  const today = new Date();
  const diffTime = Math.abs(today.getTime() - lastActive.getTime());
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
  
  if (diffDays === 1) return 1; // Streak continues
  if (diffDays > 1) return 0; // Streak broken
  return 1; // Same day, streak persists
};

export const addXP = (currentXP: number, taskDifficulty: number): number => {
  return currentXP + (taskDifficulty * 10);
};
