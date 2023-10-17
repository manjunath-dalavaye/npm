import { RankineToReaumur } from "@ilihub/temperature";

const rankine = 671.67;

const reaumur = RankineToReaumur(rankine);
console.log(reaumur); // 80
