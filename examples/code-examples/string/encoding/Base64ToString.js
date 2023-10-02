import { Base64ToString } from "@ilihub/code";

const base64String = "SGVsbG8gV29ybGQh";

const string = Base64ToString(base64String);
console.log(string); // Hello World!
