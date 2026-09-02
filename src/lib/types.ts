export interface StudentDTO {
  id: number;
  name: string;
  avatar: string;
  createdAt: string;
}

export interface AttemptDTO {
  id: number;
  lessonId: string;
  level: number;
  score: number;
  stars: number;
  correct: number;
  total: number;
  completedAt: string;
}

export interface BestDTO {
  lessonId: string;
  level: number;
  stars: number;
  score: number;
  correct: number;
  total: number;
  attempts: number;
  lastAt: string;
}

export interface DailyActivity {
  date: string;
  attempts: number;
  points: number;
  stars: number;
}

export interface ProgressDTO {
  studentId: number;
  totals: {
    points: number;
    stars: number;
    completed: number;
    attempts: number;
  };
  best: Record<string, BestDTO>;
  recent: AttemptDTO[];
  activity: DailyActivity[];
  streak: number;
  longestStreak: number;
  activeDays: number;
}

export interface LeaderboardEntry {
  id: number;
  name: string;
  avatar: string;
  points: number;
  stars: number;
  completed: number;
}

export interface RecordAttemptPayload {
  studentId: number;
  lessonId: string;
  level: number;
  score: number;
  stars: number;
  correct: number;
  total: number;
}

export const AVATARS = [
  "🦁",
  "🐱",
  "🐰",
  "🐼",
  "🦊",
  "🐸",
  "🦉",
  "🐧",
  "🦄",
  "🐢",
  "🐬",
  "🦋",
];