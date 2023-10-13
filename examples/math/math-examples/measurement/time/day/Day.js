import { Day } from "@ilihub/math";

const day = new Day(1);

const milliseconds = day.toMillisecond();
console.log(milliseconds); // 86400000

const seconds = day.toSecond();
console.log(seconds); // 86400

const minutes = day.toMinute();
console.log(minutes); // 1440

const hours = day.toHour();
console.log(hours); // 24

const weeks = day.toWeek();
console.log(weeks); // 0.14285714285714285

const months = day.toMonth();
console.log(months); // 0.03333333333333333

const years = day.toYear();
console.log(years); // 0.0027397260273972603

const decades = day.toDecade();
console.log(decades); // 0.000273972602739726

const centuries = day.toCentury();
console.log(centuries); // 0.000027397260273972603
