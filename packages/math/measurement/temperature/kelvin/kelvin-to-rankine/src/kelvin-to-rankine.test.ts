import { KelvinToRankine, K2R } from "./kelvin-to-rankine";

describe("KelvinToRankine", () => {
  it("should convert 0 Kelvin to 0 Rankine", () => {
    const kelvin = 0;
    const rankine = KelvinToRankine(kelvin);
    expect(rankine).toBeCloseTo(0);
  });

  it("should convert 273.15 Kelvin to 491.67 Rankine", () => {
    const kelvin = 273.15;
    const rankine = KelvinToRankine(kelvin);
    expect(rankine).toBeCloseTo(491.67);
  });

  it("should convert 373.15 Kelvin to 671.67 Rankine", () => {
    const kelvin = 373.15;
    const rankine = KelvinToRankine(kelvin);
    expect(rankine).toBeCloseTo(671.67);
  });
});

describe("K2R", () => {
  it("should be an alias for KelvinToRankine", () => {
    expect(K2R).toBe(KelvinToRankine);
  });
});
