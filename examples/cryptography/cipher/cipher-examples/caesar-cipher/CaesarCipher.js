import { CaesarCipher } from "@ilihub/cipher";

const caesarCipher = new CaesarCipher();

const encrypted = caesarCipher.encrypt("Hello World", 3);
console.log(encrypted); // Khoor Zruog

const decrypted = caesarCipher.decrypt(encrypted, 3);
console.log(decrypted); // Hello World

const alldecrypted = caesarCipher.decryptAll(encrypted);
console.log(alldecrypted); // [ 'Hello World', 'Gdkkn Vnqkc', ... ]
