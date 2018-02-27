const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

mongoose.connect(process.env.MONGODB_URL)

var db = mongoose.connection;

db.once('open', function () {
    console.log(`Connected to MongDB`);
});