import {
  integer,
  pgTable,
  serial,
  text,
  timestamp,
} from "drizzle-orm/pg-core";

export const students = pgTable("students", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  avatar: text("avatar").notNull().default("🦁"),
  createdAt: timestamp("created_at", { withTimezone: true })
    .defaultNow()
    .notNull(),
});

export const lessonAttempts = pgTable("lesson_attempts", {
  id: serial("id").primaryKey(),
  studentId: integer("student_id")
    .notNull()
    .references(() => students.id, { onDelete: "cascade" }),
  lessonId: text("lesson_id").notNull(),
  level: integer("level").notNull(),
  score: integer("score").notNull(),
  stars: integer("stars").notNull(),
  correct: integer("correct").notNull(),
  total: integer("total").notNull(),
  completedAt: timestamp("completed_at", { withTimezone: true })
    .defaultNow()
    .notNull(),
});

export type Student = typeof students.$inferSelect;
export type NewStudent = typeof students.$inferInsert;
export type LessonAttempt = typeof lessonAttempts.$inferSelect;
export type NewLessonAttempt = typeof lessonAttempts.$inferInsert;