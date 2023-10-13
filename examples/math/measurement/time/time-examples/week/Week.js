import { Week } from "@ilihub/time";

const week = new Week(1);

const milliseconds = week.toMillisecond();
console.log(milliseconds); // 604800000

const seconds = week.toSecond();
console.log(seconds); // 604800

const minutes = week.toMinute();
console.log(minutes); // 10080

const hours = week.toHour();
console.log(hours); // 168

const days = week.toDay();
console.log(days); // 7

const months = week.toMonth();
console.log(months); // 0.25

const years = week.toYear();
console.log(years); // 0.019230769230769232

const decades = week.toDecade();
console.log(decades); // 0.0019230769230769232

const centuries = week.toCentury();
console.log(centuries); // 0.00019230769230769232
