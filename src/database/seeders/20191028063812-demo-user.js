import uuidv4 from 'uuid/v4';
import bcrypt from 'bcrypt';

export default {
  // eslint-disable-next-line no-unused-vars
  up: async (queryInterface, Sequelize) => queryInterface.bulkInsert(
    'Users',
    [
      {
        id: uuidv4(),
        first_name: 'Pegeen',
        last_name: 'Rayhill',
        email: 'prayhill0@yelp.com',
        password: await bcrypt.hash('12345', await bcrypt.genSalt(+process.env.SALT)),
        address: '5 Fair Oaks Road',
        phone: '983-515-5106',
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: uuidv4(),
        first_name: 'Alard',
        last_name: 'Shevill',
        email: 'ashevill1@digg.com',
        password: await bcrypt.hash('12345', await bcrypt.genSalt(+process.env.SALT)),
        address: '58 Mallory Parkway',
        phone: '885-594-5404',
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: uuidv4(),
        first_name: 'Cairistiona',
        last_name: 'Arnaudet',
        email: 'carnaudet2@lycos.com',
        password: await bcrypt.hash('12345', await bcrypt.genSalt(+process.env.SALT)),
        address: '84821 Redwing Crossing',
        phone: '795-401-5699',
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: uuidv4(),
        first_name: 'Cherie',
        last_name: 'Halfhyde',
        email: 'chalfhyde3@youku.com',
        password: await bcrypt.hash('12345', await bcrypt.genSalt(+process.env.SALT)),
        address: '45 Waywood Hill',
        phone: '281-247-4610',
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: uuidv4(),
        first_name: 'Daniel',
        last_name: 'Gosneye',
        email: 'dgosneye4@si.edu',
        password: await bcrypt.hash('12345', await bcrypt.genSalt(+process.env.SALT)),
        address: '501 Texas Junction',
        phone: '696-578-2870',
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: uuidv4(),
        first_name: 'Jessi',
        last_name: 'Bowlesworth',
        email: 'jbowlesworth5@furl.net',
        password: await bcrypt.hash('12345', await bcrypt.genSalt(+process.env.SALT)),
        address: '3317 Red Cloud Plaza',
        phone: '705-251-1071',
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: uuidv4(),
        first_name: 'Deena',
        last_name: 'Dowker',
        email: 'ddowker6@last.fm',
        password: await bcrypt.hash('12345', await bcrypt.genSalt(+process.env.SALT)),
        address: '37868 Corry Court',
        phone: '369-695-8421',
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: uuidv4(),
        first_name: 'Felice',
        last_name: 'Whiteman',
        email: 'fwhiteman7@hao123.com',
        password: await bcrypt.hash('12345', await bcrypt.genSalt(+process.env.SALT)),
        address: '71 Division Point',
        phone: '497-572-4449',
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: uuidv4(),
        first_name: 'Raychel',
        last_name: 'Handyside',
        email: 'rhandyside8@mysql.com',
        password: await bcrypt.hash('12345', await bcrypt.genSalt(+process.env.SALT)),
        address: '867 Thierer Way',
        phone: '920-553-7093',
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: uuidv4(),
        first_name: 'Orella',
        last_name: 'Tipler',
        email: 'otipler9@microsoft.com',
        password: await bcrypt.hash('12345', await bcrypt.genSalt(+process.env.SALT)),
        address: '4622 South Crossing',
        phone: '951-228-8616',
        created_at: new Date(),
        updated_at: new Date()
      }
    ],
    {}
  ),

  // eslint-disable-next-line no-unused-vars
  down: (queryInterface, Sequelize) => queryInterface.bulkDelete('Users', null, {})
};
