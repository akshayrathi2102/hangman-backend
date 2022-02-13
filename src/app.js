const express = require('express');
const sequelize = require('./models');

const sessionRouter = require('./routes/session')

async function initialize() {
    const app = express();
    app.use(express.json())
    try {
        await sequelize.authenticate();
        await sequelize.sync();
        console.log('Connection has been established successfully.');
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }
    app.use('/api', sessionRouter);

    app.listen(3000, () => { console.log("App is running on localhost:3000") });

}

initialize();
