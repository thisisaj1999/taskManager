const mongoose = require('mongoose');

const connectionString =
  'mongodb+srv://Atul:6199@nodeexpressprojects.vniqudy.mongodb.net/TASK-MANAGER?retryWrites=true&w=majority';

/*
to remove the warnings
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
*/

const connectDB = (url) => {
  return mongoose.connect(connectionString, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
  });
};

module.exports = connectDB;
