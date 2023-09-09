# @ilihub/camel-case-string-to-snake-case-string

Converts a camel case string to a snake case string.

![NPM Version](https://img.shields.io/npm/v/%40ilihub%2Fcamel-case-string-to-snake-case-string?color=33cd56&logo=npm)
![NPM](https://img.shields.io/npm/l/%40ilihub%2Fcamel-case-string-to-snake-case-string)

## Installation

```bash
# if you're using pnpm
pnpm add @ilihub/camel-case-string-to-snake-case-string

# or, if you're using npm
npm install @ilihub/camel-case-string-to-snake-case-string

# or, if you're using yarn
yarn add @ilihub/camel-case-string-to-snake-case-string
```

## Usage

```javascript
import { CamelCaseStringToPascalCaseString } from "@ilihub/camel-case-string-to-snake-case-string";

const string = "helloWorld";

console.log(CamelCaseStringToSnakeCaseString(string));

// Output
// hello_world
```

---