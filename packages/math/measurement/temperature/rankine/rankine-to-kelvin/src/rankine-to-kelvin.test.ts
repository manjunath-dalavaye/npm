import { RankineToKelvin, R2K } from "./rankine-to-kelvin";

describe("RankineToKelvin", () => {
  it("should convert 491.67 Rankine to 273.15 Kelvin", () => {
    const rankine = 491.67;
    const kelvin = RankineToKelvin(rankine);
    expect(kelvin).toBe(273.15);
  });

  it("should convert 536.67 Rankine to 298.15 Kelvin", () => {
    const rankine = 536.67;
    const kelvin = RankineToKelvin(rankine);
    expect(kelvin).toBe(298.15);
  });

  it("should convert 459.67 Rankine to 255.3722222222222 Kelvin", () => {
    const rankine = 459.67;
    const kelvin = RankineToKelvin(rankine);
    expect(kelvin).toBeCloseTo(255.3722222222222);
  });
});

describe("R2K", () => {
  it("should be an alias for RankineToKelvin", () => {
    expect(R2K).toBe(RankineToKelvin);
  });
});
