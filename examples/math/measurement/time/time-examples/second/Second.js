import { Second } from "@ilihub/time";

const second = new Second(60);

const milliseconds = second.toMillisecond();
console.log(milliseconds); // 60000

const minutes = second.toMinute();
console.log(minutes); // 1

const hours = second.toHour();
console.log(hours); // 0.016666666666666666

const days = second.toDay();
console.log(days); // 0.0006944444444444445

const weeks = second.toWeek();
console.log(weeks); // 0.0000992063492063492

const months = second.toMonth();
console.log(months); // 0.000023148148148148147

const years = second.toYear();
console.log(years); // 0.000001902587519025875

const decades = second.toDecade();
console.log(decades); // 1.9025875190258752e-7

const centuries = second.toCentury();
console.log(centuries); // 1.9025875190258753e-8
