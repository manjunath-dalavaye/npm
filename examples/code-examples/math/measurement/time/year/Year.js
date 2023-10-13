import { Year } from "@ilihub/code";

const year = new Year(1);

const millisecond = year.toMillisecond();
console.log(millisecond); // 31536000000

const second = year.toSecond();
console.log(second); // 31536000

const minute = year.toMinute();
console.log(minute); // 525600

const hour = year.toHour();
console.log(hour); // 8760

const day = year.toDay();
console.log(day); // 365

const week = year.toWeek();
console.log(week); // 52

const month = year.toMonth();
console.log(month); // 12

const decade = year.toDecade();
console.log(decade); // 0.1

const century = year.toCentury();
console.log(century); // 0.01
