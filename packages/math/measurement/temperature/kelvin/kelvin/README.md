# @ilihub/kelvin

TypeScript functions for converting kelvin to other temperature units.

![NPM Version](https://img.shields.io/npm/v/%40ilihub%2Fkelvin?color=33cd56&logo=npm)
![NPM](https://img.shields.io/npm/l/%40ilihub%2Fkelvin)
[![CodeFactor](https://www.codefactor.io/repository/github/ilihub/npm/badge)](https://www.codefactor.io/repository/github/ilihub/npm)
[![Socket Badge](https://socket.dev/api/badge/npm/package/@ilihub/kelvin)](https://socket.dev/npm/package/@ilihub/kelvin)

## Installation

```bash
# if you're using pnpm
pnpm add @ilihub/kelvin

# or, if you're using npm
npm install @ilihub/kelvin

# or, if you're using yarn
yarn add @ilihub/kelvin
```

## Usage

```javascript
import { Kelvin } from "@ilihub/kelvin";

const kelvin = new Kelvin(373.15);

const celcius = kelvin.toCelsius();
console.log(celcius); // 100

const fahrenheit = kelvin.toFahrenheit();
console.log(fahrenheit); // 212

const rankine = kelvin.toRankine();
console.log(rankine); // 671.67

const reaumur = kelvin.toReaumur();
console.log(reaumur); // 80
```

## Available Functions and Classes

- [Kelvin](https://www.npmjs.com/package/@ilihub/kelvin)
- [Kelvin To Celsius](https://www.npmjs.com/package/@ilihub/kelvin-to-celsius)
- [Kelvin To Fahrenheit](https://www.npmjs.com/package/@ilihub/kelvin-to-fahrenheit)
- [Kelvin To Rankine](https://www.npmjs.com/package/@ilihub/kelvin-to-rankine)
- [Kelvin To Reaumur](https://www.npmjs.com/package/@ilihub/kelvin-to-reaumur)

---

<!-- sponsors_and_backers_section_start -->

<!-- sponsors_and_backers_section_end -->

---
