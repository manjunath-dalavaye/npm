# @ilihub/rankine

TypeScript functions for converting Rankine to other temperature units.

![NPM Version](https://img.shields.io/npm/v/%40ilihub%2Frankine?color=33cd56&logo=npm)
![NPM](https://img.shields.io/npm/l/%40ilihub%2Frankine)
[![CodeFactor](https://www.codefactor.io/repository/github/ilihub/npm/badge)](https://www.codefactor.io/repository/github/ilihub/npm)
[![Socket Badge](https://socket.dev/api/badge/npm/package/@ilihub/rankine)](https://socket.dev/npm/package/@ilihub/rankine)

## Installation

```bash
# if you're using pnpm
pnpm add @ilihub/rankine

# or, if you're using npm
npm install @ilihub/rankine

# or, if you're using yarn
yarn add @ilihub/rankine
```

## Usage

```javascript
import { Rankine } from "@ilihub/rankine";

const rankine = new Rankine(671.67);

const celsius = rankine.toCelsius();
console.log(celsius); // 100

const kelvin = rankine.toKelvin();
console.log(kelvin); // 373.15

const reaumur = rankine.toReaumur();
console.log(reaumur); // 80

const fahrenheit = rankine.toFahrenheit();
console.log(fahrenheit); // 212
```

## Available Functions and Classes

- [Rankine](https://www.npmjs.com/package/@ilihub/rankine)
- [Rankine To Kelvin](https://www.npmjs.com/package/@ilihub/rankine-to-kelvin)
- [Rankine To Celsius](https://www.npmjs.com/package/@ilihub/rankine-to-celsius)
- [Rankine To Fahrenheit](https://www.npmjs.com/package/@ilihub/rankine-to-fahrenheit)
- [Rankine To Reaumur](https://www.npmjs.com/package/@ilihub/rankine-to-reaumur)

---

<!-- sponsors_and_backers_section_start -->

<!-- sponsors_and_backers_section_end -->

---
