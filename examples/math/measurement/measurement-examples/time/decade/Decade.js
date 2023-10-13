import { Decade } from "@ilihub/measurement";

const decade = new Decade(1);

const milliseconds = decade.toMillisecond();
console.log(milliseconds); // 315360000000

const seconds = decade.toSecond();
console.log(seconds); // 315360000

const minutes = decade.toMinute();
console.log(minutes); // 5256000

const hours = decade.toHour();
console.log(hours); // 87600

const days = decade.toDay();
console.log(days); // 3650

const weeks = decade.toWeek();
console.log(weeks); // 520

const months = decade.toMonth();
console.log(months); // 120

const years = decade.toYear();
console.log(years); // 10

const centuries = decade.toCentury();
console.log(centuries); // 0.1
