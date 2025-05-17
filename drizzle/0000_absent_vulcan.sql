CREATE TABLE "tickets" (
	"id" text PRIMARY KEY NOT NULL,
	"reference_id" text NOT NULL,
	"reference_link" text NOT NULL,
	"title" text NOT NULL,
	"type" text NOT NULL,
	"status" text NOT NULL,
	"remarks" text DEFAULT 'There has no remarks at the moment' NOT NULL,
	"department" text NOT NULL,
	"created_at" timestamp with time zone DEFAULT now(),
	"updated_at" timestamp with time zone DEFAULT now()
);
--> statement-breakpoint
CREATE TABLE "users" (
	"id" serial PRIMARY KEY NOT NULL,
	"name" text NOT NULL,
	"email" text NOT NULL,
	"password" text NOT NULL,
	"role" text NOT NULL,
	"created_at" timestamp with time zone DEFAULT now(),
	"updated_at" timestamp with time zone DEFAULT now(),
	CONSTRAINT "users_email_unique" UNIQUE("email")
);
