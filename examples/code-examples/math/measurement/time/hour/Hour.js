import { Hour } from "@ilihub/code";

const hour = new Hour(1);

const milliseconds = hour.toMillisecond();
console.log(milliseconds); // 3600000

const seconds = hour.toSecond();
console.log(seconds); // 3600

const minutes = hour.toMinute();
console.log(minutes); // 60

const days = hour.toDay();
console.log(days); // 0.041666666666666664

const weeks = hour.toWeek();
console.log(weeks); // 0.005952380952380952

const months = hour.toMonth();
console.log(months); // 0.001388888888888889

const years = hour.toYear();
console.log(years); // 0.00011415525114155251

const decades = hour.toDecade();
console.log(decades); // 0.000011415525114155251

const centuries = hour.toCentury();
console.log(centuries); // 0.0000011415525114155251
