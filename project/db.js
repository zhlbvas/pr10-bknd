const { MongoClient } = require("mongodb");
const path = require("path");

require("dotenv").config({
    path: path.join(__dirname, ".env")
});

const client = new MongoClient(process.env.MONGODB_URI);

let database = null;

async function connect() {
    if (database) {
        return database;
    }

    await client.connect();
    database = client.db("astana_guide");

    console.log("Облачная база данных подключена");

    return database;
}

function getCollection(name) {
    if (!database) {
        throw new Error("Сначала подключите базу данных");
    }

    return database.collection(name);
}

module.exports = {
    connect,
    getCollection
};
