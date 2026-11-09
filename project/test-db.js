
require("dotenv").config();

if (!process.env.MONGODB_URI) {
    console.log("Ошибка: MONGODB_URI не найдена.");
    console.log("Проверь файл .env и его расположение.");
    process.exit(1);
}

const { MongoClient } = require("mongodb");

async function test() {
    const client = new MongoClient(process.env.MONGODB_URI);

    try {
        await client.connect();
        console.log("Подключение работает!");
    } catch (error) {
        console.error("Ошибка подключения:", error.message);
    } finally {
        await client.close();
    }
}

test();
