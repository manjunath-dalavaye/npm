import { FahrenheitToRankine, F2R } from "./fahrenheit-to-rankine";

describe("FahrenheitToRankine", () => {
  it("should convert 32 Fahrenheit to 491.67 Rankine", () => {
    const fahrenheit = 32;
    const rankine = FahrenheitToRankine(fahrenheit);
    expect(rankine).toBe(491.67);
  });

  it("should convert 77 Fahrenheit to 536.6700000000001 Rankine", () => {
    const fahrenheit = 77;
    const rankine = FahrenheitToRankine(fahrenheit);
    expect(rankine).toBe(536.6700000000001);
  });

  it("should convert -40 Fahrenheit to 419.67 Rankine", () => {
    const fahrenheit = -40;
    const rankine = FahrenheitToRankine(fahrenheit);
    expect(rankine).toBe(419.67);
  });
});

describe("F2R", () => {
  it("should be an alias for FahrenheitToRankine", () => {
    expect(F2R).toBe(FahrenheitToRankine);
  });
});
