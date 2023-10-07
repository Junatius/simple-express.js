const pool = require('../../config/database');

const addActorAge = async () => {
  const client = await pool.connect();
  try {
    await require('./addActorAge').addActorAge(client);
  } finally {
    client.release();
  }
};

addActorAge()
.then(() => {
  process.exit(0);
})
.catch((error) => {
  process.exit(1);
});