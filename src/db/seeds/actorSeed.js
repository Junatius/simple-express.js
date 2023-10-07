const faker = require('faker');

const generateRandomName = () => {
    const firstName = faker.name.firstName();
    const lastName = faker.name.lastName();
    return { firstName, lastName };
};

const seedActors = async (client) => {
    try {
        const actors = [];
        
        for (let i = 0;i < 5; i++) {
            const randomName = generateRandomName();
            const actor = {
                first_name: randomName.firstName,
                last_name: randomName.lastName,
            };
            actors.push(actor);
        }

        for (const actor of actors) {
            await client.query(
            `
            INSERT INTO actor (first_name, last_name) VALUES ($1, $2)
            `,
            [actor.first_name, actor.last_name]
        );
      }
  
      console.log('Actors seeded successfully');
    } catch (error) {
      console.error('Error seeding actors:', error);
    }
  };
  
  module.exports = {
    seedActors,
  };
  