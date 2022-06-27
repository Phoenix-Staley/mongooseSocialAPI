const mongoose = require('mongoose');

// Connect to a local database
mongoose.connect('mongodb://localhost:27017/socialNetworkDB', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Export the connection
module.exports = mongoose.connection;