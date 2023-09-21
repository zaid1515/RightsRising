const express = require('express');
const mongoose = require('mongoose');
const cookieparser = require('cookie-parser');
const errorMiddleware = require('./middleware/errorMiddleware');
const connectDB = require('./config/db');
const cors = require('cors');
const corsOptions = require('./config/corsOption');

require('dotenv').config();

// create a express app.
const app = express();

// connect to mongoDb.
connectDB();


// adding middlewares.
app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({ extended : true }))
app.use(cookieparser());

app.use('/api/users', require('./Routes/userRoutes'));


app.use(errorMiddleware.notFound);
app.use(errorMiddleware.errorHandler);

mongoose.connection.once('open', () => {
    console.log(`Connected to mongoDB`);
    // launch the express app.
    const port = process.env.PORT
    app.listen(port, ()=>{
        console.log(`Server is running at http://localhost:${port}`);
    });
})

mongoose.connection.on('error', (err) => {
    console.log(`error : ${err}`);
})