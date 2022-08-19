const express = require('express');
require('dotenv').config()
const cors = require('cors');
const sequelize = require('./models');

const sessionRouter = require('./routes/session')
const port = process.env.PORT;
async function initialize() {
  const app = express();
  app.use(cors())
  app.use(express.json())
  try {
    await sequelize.authenticate();
    await sequelize.sync();
    console.log('Connection has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
  app.use('/api', sessionRouter);

  app.listen(process.env.PORT || 3000, () => { console.log(`App is running on localhost:${port}`) });

}

initialize();
