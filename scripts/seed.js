const { db } = require('@vercel/postgres');
const {
  analysisProjects,
} = require('./placeholder-data.js');
const bcrypt = require('bcrypt');

async function seedAnalysis(client) {
  try {
    await client.sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;
    // Create the "users" table if it doesn't exist
    const createTable = await client.sql`
        CREATE TABLE IF NOT EXISTS analysis (
        id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
        userid VARCHAR(255) NOT NULL,
        website TEXT NOT NULL,
        date DATE NOT NULL,
        status TEXT NOT NULL
        );`;

    console.log(`Created "anaylsis" table`);

    // Insert data into the "users" table
    const insertAnalysis = await Promise.all(
        analysisProjects.map(async (p) => {
          return client.sql`
          INSERT INTO analysis (id, userid, website, date, status)
          VALUES (${p.id}, ${p.userid}, ${p.website}, ${p.date}, ${p.status})
          ON CONFLICT (id) DO NOTHING;
        `;
        }),
      );
    console.log(`Seeded ${analysisProjects.length} analysis projects`);

    return {
      createTable,
      users: insertAnalysis,
    };
  } catch (error) {
    console.error('Error seeding users:', error);
    throw error;
  }
}

async function main() {
  const client = await db.connect();
  await seedAnalysis(client);
  await client.end();
}

main().catch((err) => {
  console.error(
    'An error occurred while attempting to seed the database:',
    err,
  );
});
