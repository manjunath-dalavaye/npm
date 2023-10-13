import { Minute } from "@ilihub/minute";

const minute = new Minute(1);

const milliseconds = minute.toMillisecond();
console.log(milliseconds); // 60000

const seconds = minute.toSecond();
console.log(seconds); // 60

const hours = minute.toHour();
console.log(hours); // 0.016666666666666666

const days = minute.toDay();
console.log(days); // 0.0006944444444444445

const weeks = minute.toWeek();
console.log(weeks); // 0.0000992063492063492

const months = minute.toMonth();
console.log(months); // 0.000023148148148148147

const years = minute.toYear();
console.log(years); // 0.000001902587519025875

const decades = minute.toDecade();
console.log(decades); // 1.9025875190258752e-7

const centuries = minute.toCentury();
console.log(centuries); // 1.902587519025875e-8
