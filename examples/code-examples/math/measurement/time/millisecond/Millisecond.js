import { Millisecond as MillisecondClass } from "@ilihub/code";

const millisecond = 3153600000000;

const Millisecond = new MillisecondClass(millisecond);

const century = Millisecond.toCentury();
console.log(century); // 1

const decade = Millisecond.toDecade();
console.log(decade); // 10

const year = Millisecond.toYear();
console.log(year); // 100

const month = Millisecond.toMonth();
console.log(month); // 1216.6666666666667

const week = Millisecond.toWeek();
console.log(week); // 5214.285714285715

const day = Millisecond.toDay();
console.log(day); // 36500

const hour = Millisecond.toHour();
console.log(hour); // 876000

const minute = Millisecond.toMinute();
console.log(minute); // 52560000

const second = Millisecond.toSecond();
console.log(second); // 3153600000
