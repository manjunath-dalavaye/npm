# @ilihub/cipher

A collection of useful cipher cryptography TypeScript functions.

![NPM Version](https://img.shields.io/npm/v/%40ilihub%2Fcipher?color=33cd56&logo=npm)
![NPM](https://img.shields.io/npm/l/%40ilihub%2Fcipher)
[![CodeFactor](https://www.codefactor.io/repository/github/ilihub/npm/badge)](https://www.codefactor.io/repository/github/ilihub/npm)
[![Socket Badge](https://socket.dev/api/badge/npm/package/@ilihub/cipher)](https://socket.dev/npm/package/@ilihub/cipher)

## Installation

```bash
# if you're using pnpm
pnpm add @ilihub/cipher

# or, if you're using npm
npm install @ilihub/cipher

# or, if you're using yarn
yarn add @ilihub/cipher
```

## Usage

```javascript
import { CaesarCipher } from "@ilihub/cipher";

const caesarCipher = new CaesarCipher();

const encrypted = caesarCipher.encrypt("Hello World", 3);
console.log(encrypted); // Khoor Zruog

const decrypted = caesarCipher.decrypt(encrypted, 3);
console.log(decrypted); // Hello World

const alldecrypted = caesarCipher.decryptAll(encrypted);
console.log(alldecrypted); // [ 'Hello World', 'Gdkkn Vnqkc', ... ]
```

## Available Functions and Classes

- [Caesar Cipher](https://www.npmjs.com/package/@ilihub/caesar-cipher)

---

<!-- sponsors_and_backers_section_start -->

<!-- sponsors_and_backers_section_end -->

---
