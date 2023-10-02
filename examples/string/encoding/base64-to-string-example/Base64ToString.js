import { Base64ToString } from "@ilihub/base64-to-string";

const base64String = "SGVsbG8gV29ybGQh";

const string = Base64ToString(base64String);
console.log(string); // Hello World!
