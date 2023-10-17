import { ReaumurToRankine } from "@ilihub/temperature";

const reaumur = 80;

const rankine = ReaumurToRankine(reaumur);
console.log(rankine); // 671.67
