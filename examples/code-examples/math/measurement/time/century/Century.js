import { Century } from "@ilihub/code";

const century = new Century(1);

const millisecond = century.toMillisecond();
console.log(millisecond); // 3153600000000

const second = century.toSecond();
console.log(second); // 3153600000

const minute = century.toMinute();
console.log(minute); // 52560000

const hour = century.toHour();
console.log(hour); // 876000

const day = century.toDay();
console.log(day); // 36500

const week = century.toWeek();
console.log(week); // 5200

const month = century.toMonth();
console.log(month); // 1200

const year = century.toYear();
console.log(year); // 100

const decade = century.toDecade();
console.log(decade); // 10
