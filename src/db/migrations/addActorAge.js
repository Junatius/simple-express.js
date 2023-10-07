const addActorAge = async (client) => {
    try {
      await client.query
      (
        `ALTER TABLE actor ADD COLUMN age int DEFAULT FLOOR(RANDOM() * (40 + 1) + 20);`
      );
  
      console.log('Age column successfully added');
    } catch (error) {
      console.error('Error adding age colum:', error);
    }
  };
  
  module.exports = {
    addActorAge,
  };
  