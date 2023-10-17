import { RankineToReaumur, R2Re } from "./rankine-to-reaumur";

describe("RankineToReaumur", () => {
  it("should convert 491.67 Rankine to 0 Réaumur", () => {
    const rankine = 491.67;
    const reaumur = RankineToReaumur(rankine);
    expect(reaumur).toBe(0);
  });

  it("should convert 536.67 Rankine to 19.999999999999975 Réaumur", () => {
    const rankine = 536.67;
    const reaumur = RankineToReaumur(rankine);
    expect(reaumur).toBeCloseTo(19.999999999999975);
  });

  it("should convert 459.67 Rankine to -14.222222222222221 Réaumur", () => {
    const rankine = 459.67;
    const reaumur = RankineToReaumur(rankine);
    expect(reaumur).toBeCloseTo(-14.222222222222221);
  });
});

describe("R2Re", () => {
  it("should be an alias for RankineToReaumur", () => {
    expect(R2Re).toBe(RankineToReaumur);
  });
});
