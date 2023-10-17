import { ReaumurToRankine, Re2R } from "./reaumur-to-rankine";

describe("ReaumurToRankine", () => {
  it("should convert 0 Réaumur to 491.67 Rankine", () => {
    const reaumur = 0;
    const rankine = ReaumurToRankine(reaumur);
    expect(rankine).toBe(491.67);
  });

  it("should convert 80 Réaumur to 671.67 Rankine", () => {
    const reaumur = 80;
    const rankine = ReaumurToRankine(reaumur);
    expect(rankine).toBe(671.67);
  });

  it("should convert -40 Réaumur to 401.67 Rankine", () => {
    const reaumur = -40;
    const rankine = ReaumurToRankine(reaumur);
    expect(rankine).toBe(401.67);
  });
});

describe("Re2R", () => {
  it("should be an alias of ReaumurToRankine", () => {
    expect(Re2R).toBe(ReaumurToRankine);
  });
});
