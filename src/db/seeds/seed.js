const pool = require('../../config/database');

const seedDatabase = async () => {
  const client = await pool.connect();
  try {
    await require('./actorSeed').seedActors(client);
  } finally {
    client.release();
  }
};

seedDatabase()
  .then(() => {
    process.exit(0);
  })
  .catch((error) => {
    process.exit(1);
  });