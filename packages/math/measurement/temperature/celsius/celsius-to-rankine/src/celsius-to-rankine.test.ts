import { CelsiusToRankine, C2R } from "./celsius-to-rankine";

describe("CelsiusToRankine", () => {
  it("should convert 0 Celsius to 491.66999999999996 Rankine", () => {
    const celsius = 0;
    const rankine = CelsiusToRankine(celsius);
    expect(rankine).toBe(491.66999999999996);
  });

  it("should convert 25 Celsius to 536.67 Rankine", () => {
    const celsius = 25;
    const rankine = CelsiusToRankine(celsius);
    expect(rankine).toBe(536.67);
  });

  it("should convert -40 Celsius to 419.66999999999996 Rankine", () => {
    const celsius = -40;
    const rankine = CelsiusToRankine(celsius);
    expect(rankine).toBe(419.66999999999996);
  });
});

describe("C2R", () => {
  it("should be an alias for CelsiusToRankine", () => {
    expect(C2R).toBe(CelsiusToRankine);
  });
});
