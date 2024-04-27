require('express-async-errors');
const database = require('./Database/sqlite');
const AppError = require ('./Utils/AppError');

const express = require('express');
const routes = require('./Routes');

const uploadConfig = require('./Configs/upload');
const cors = require('cors');


const app = express();
app.use(cors());
app.use(express.json());

app.use('/files', express.static(uploadConfig.UPLOADS_FOLDER));

app.use(routes);

database()

app.use(( error, request, response, next ) => {

  if ( error instanceof AppError ) {
    return response.status(error.statusCode).json({
      status: 'error',
      message: error.message
    })
  }

    console.log(error);

  return response.status(500).json({
    status: 'error',
    message: 'Internal server error.'
  })
})


const PORT = 8080;
app.listen(PORT, () => {console.log(`Server is running on Port ${PORT}`)});
