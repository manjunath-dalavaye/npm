import { Month } from "@ilihub/measurement";

const month = new Month(1);

const milliseconds = month.toMillisecond();
console.log(milliseconds); // 2629800000

const seconds = month.toSecond();
console.log(seconds); // 2629800

const minutes = month.toMinute();
console.log(minutes); // 43830

const hours = month.toHour();
console.log(hours); // 720

const days = month.toDay();
console.log(days); // 30

const weeks = month.toWeek();
console.log(weeks); // 4

const years = month.toYear();
console.log(years); // 0.08333333333333333

const decades = month.toDecade();
console.log(decades); // 0.008333333333333333

const centuries = month.toCentury();
console.log(centuries); // 0.0008333333333333333
