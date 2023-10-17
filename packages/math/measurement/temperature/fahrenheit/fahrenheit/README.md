# @ilihub/fahrenheit

TypeScript functions for converting Fahrenheit to other temperature units.

![NPM Version](https://img.shields.io/npm/v/%40ilihub%2Ffahrenheit?color=33cd56&logo=npm)
![NPM](https://img.shields.io/npm/l/%40ilihub%2Ffahrenheit)
[![CodeFactor](https://www.codefactor.io/repository/github/ilihub/npm/badge)](https://www.codefactor.io/repository/github/ilihub/npm)
[![Socket Badge](https://socket.dev/api/badge/npm/package/@ilihub/fahrenheit)](https://socket.dev/npm/package/@ilihub/fahrenheit)

## Installation

```bash
# if you're using pnpm
pnpm add @ilihub/fahrenheit

# or, if you're using npm
npm install @ilihub/fahrenheit

# or, if you're using yarn
yarn add @ilihub/fahrenheit
```

## Usage

```javascript
import { Fahrenheit } from "@ilihub/fahrenheit";

const fahrenheit = new Fahrenheit(212);

const celsius = fahrenheit.toCelsius();
console.log(celsius); // 100

const kelvin = fahrenheit.toKelvin();
console.log(kelvin); // 373.15

const reaumur = fahrenheit.toReaumur();
console.log(reaumur); // 80

const rankine = fahrenheit.toRankine();
console.log(rankine); // 671.67
```

## Available Functions and Classes

- [Fahrenheit](https://www.npmjs.com/package/@ilihub/fahrenheit)
- [Fahrenheit To Kelvin](https://www.npmjs.com/package/@ilihub/fahrenheit-to-kelvin)
- [Fahrenheit To Celsius](https://www.npmjs.com/package/@ilihub/fahrenheit-to-celsius)
- [Fahrenheit To Rankine](https://www.npmjs.com/package/@ilihub/fahrenheit-to-rankine)
- [Fahrenheit To Reaumur](https://www.npmjs.com/package/@ilihub/fahrenheit-to-reaumur)

---

<!-- sponsors_and_backers_section_start -->

<!-- sponsors_and_backers_section_end -->

---
