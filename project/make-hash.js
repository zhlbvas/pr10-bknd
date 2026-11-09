const bcrypt = require("bcrypt");

async function createHash() {
    const password = "admin123";
    const hash = await bcrypt.hash(password, 10);

    console.log("Хеш пароля:");
    console.log(hash);
}

createHash();