const bcrypt = require('bcrypt');

(async () => {
  const passwords = ['123456', '123456', '123456'];
  for (const password of passwords) {
    const hashedPassword = await bcrypt.hash(password, 10);
    console.log(`Hashed password for "${password}": ${hashedPassword}`);
  }
})();