import { pgTable, serial, integer, varchar } from 'drizzle-orm/pg-core';

export const user = pgTable('user', {
	id: serial('id').primaryKey(),
	name: varchar('name', { length: 255 }).notNull(),
});

export const post = pgTable('post', {
	id: serial('id').primaryKey(),
	userId: integer('user_id').notNull().references(() => user.id),
	text: varchar('text').notNull(),
});