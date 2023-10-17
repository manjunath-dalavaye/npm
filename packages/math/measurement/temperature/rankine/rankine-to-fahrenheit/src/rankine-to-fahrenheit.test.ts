import { RankineToFahrenheit, R2F } from "./rankine-to-fahrenheit";

describe("RankineToFahrenheit", () => {
  it("should convert 491.67 Rankine to 32 Fahrenheit", () => {
    const rankine = 491.67;
    const fahrenheit = RankineToFahrenheit(rankine);
    expect(fahrenheit).toBe(32);
  });

  it("should convert 536.67 Rankine to 76.99999999999994 Fahrenheit", () => {
    const rankine = 536.67;
    const fahrenheit = RankineToFahrenheit(rankine);
    expect(fahrenheit).toBe(76.99999999999994);
  });

  it("should convert 459.67 Rankine to 0 Fahrenheit", () => {
    const rankine = 459.67;
    const fahrenheit = RankineToFahrenheit(rankine);
    expect(fahrenheit).toBe(0);
  });
});

describe("R2F", () => {
  it("should be an alias for RankineToFahrenheit", () => {
    expect(R2F).toBe(RankineToFahrenheit);
  });
});
