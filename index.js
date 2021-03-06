/**
 * Shopping Ecommerce
 * author: @minhlezz */

/**package importing */
import dotenv from 'dotenv';
import connectDatabase from './src/configs/database';
import config from './src/configs/config';
import app from './express';

dotenv.config();
connectDatabase();



// Open Port && Start Local Server
app.listen(config.port, (err) => {
    if (err) {
        console.log(err);
    }
    console.info(`Server is running on http://localhost:${config.port}`);
});