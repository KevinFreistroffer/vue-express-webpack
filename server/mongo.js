const mongoose = require("mongoose");
const config = require("./config");

/**
 * Set to Node.js native promises
 * Per http://mongoosejs.com/docs/promises.html
 */
mongoose.Promise = global.Promise;

const dbURI =
  process.env.MONGOLAB_URI ||
  "mongodb://" +
    config.database.username +
    ":" +
    config.database.password +
    "@ds147589.mlab.com:47589/vue-starter";

mongooseConnection = mongoose.connect(dbURI);

mongoose.connection.on("connected", () => {
  console.log("Mongoose connection CONNECTED");
});
mongoose.connection.on("error", err => {
  console.log("Mongoose connection ERROR. Error: " + err);
  mongoose.disconnect();
});
mongoose.connection.on("disconnected", () => {
  console.log("Mongoose connection DISCONNECTED");
  mongoose.connect(dbURI, { server: { auto_reconnect: true } });
});

// // Cosmos DB Connection String
// // eslint-disable-next-line max-len
// const mongoUri = `mongodb://${process.env.COSMOSDB_ACCOUNT}:${
//   process.env.COSMOSDB_KEY
// }@${process.env.COSMOSDB_ACCOUNT}.documents.azure.com:${
//   process.env.COSMOSDB_PORT
// }/${process.env.COSMOSDB_DB}?ssl=true`;
// // &replicaSet=globaldb`;
//
// // Local MongoDB Connection String
// // const mongoUri = `mongodb://localhost:27017/connect-heroes`;

process.on("SIGINT", () => {
  mongoose.connection.close(() => {
    console.log("Closing Mongoose connection because node process ended.");
    process.exit(0);
  });
});

function connect() {
  mongoose.set("debug", true);
  return mongooseConnection;
}

module.exports = {
  connect,
  mongoose
};
