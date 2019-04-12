CREATE TABLE gigs(
	id SERIAL PRIMARY KEY,
	title VARCHAR(200),
	technologies VARCHAR(200),
	budget VARCHAR(20),
	description TEXT,
	contact_email VARCHAR(64),
	"createdAt" DATE,
	"updatedAt" DATE
);
