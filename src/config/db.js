/**
 * db.js
 * @description :: exports database connection using mongoose
 */

const mongoose = require("mongoose");
const uri = process.env.DB_URL;
mongoose.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    dbName: "prep-pro",
});
let db = mongoose.connection;

db.once("open", () => {
    console.log("Database Connection Successful");
});

db.on("error", () => {
    console.log("Error in mongodb connection");
});

module.exports = mongoose;
