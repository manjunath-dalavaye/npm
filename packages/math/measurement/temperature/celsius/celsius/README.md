# @ilihub/celsius

TypeScript functions for converting Celsius to other temperature units.

![NPM Version](https://img.shields.io/npm/v/%40ilihub%2Fcelsius?color=33cd56&logo=npm)
![NPM](https://img.shields.io/npm/l/%40ilihub%2Fcelsius)
[![CodeFactor](https://www.codefactor.io/repository/github/ilihub/npm/badge)](https://www.codefactor.io/repository/github/ilihub/npm)
[![Socket Badge](https://socket.dev/api/badge/npm/package/@ilihub/celsius)](https://socket.dev/npm/package/@ilihub/celsius)

## Installation

```bash
# if you're using pnpm
pnpm add @ilihub/celsius

# or, if you're using npm
npm install @ilihub/celsius

# or, if you're using yarn
yarn add @ilihub/celsius
```

## Usage

```javascript
import { Celsius } from "@ilihub/celsius";

const celsius = new Celsius(100);

const fahrenheit = celsius.toFahrenheit();
console.log(fahrenheit); // 212

const kelvin = celsius.toKelvin();
console.log(kelvin); // 373.15

const rankine = celsius.toRankine();
console.log(rankine); // 671.67

const reaumur = celsius.toReaumur();
console.log(reaumur); // 80
```

## Available Functions and Classes

- [Celsius](https://www.npmjs.com/package/@ilihub/celsius)
- [Celsius To Kelvin](https://www.npmjs.com/package/@ilihub/celsius-to-kelvin)
- [Celsius To Fahrenheit](https://www.npmjs.com/package/@ilihub/celsius-to-fahrenheit)
- [Celsius To Rankine](https://www.npmjs.com/package/@ilihub/celsius-to-rankine)
- [Celsius To Reaumur](https://www.npmjs.com/package/@ilihub/celsius-to-reaumur)

---

<!-- sponsors_and_backers_section_start -->

<!-- sponsors_and_backers_section_end -->

---
