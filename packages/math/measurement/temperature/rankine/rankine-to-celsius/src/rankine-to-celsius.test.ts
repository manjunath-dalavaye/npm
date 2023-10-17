import { RankineToCelsius, R2C } from "./rankine-to-celsius";

describe("RankineToCelsius", () => {
  it("should convert 491.67 Rankine to 0 Celsius", () => {
    const rankine = 491.67;
    const celsius = RankineToCelsius(rankine);
    expect(celsius).toBe(0);
  });

  it("should convert 536.67 Rankine to 24.999999999999968 Celsius", () => {
    const rankine = 536.67;
    const celsius = RankineToCelsius(rankine);
    expect(celsius).toBe(24.999999999999968);
  });

  it("should convert 459.67 Rankine to -17.77777777777778 Celsius", () => {
    const rankine = 459.67;
    const celsius = RankineToCelsius(rankine);
    expect(celsius).toBeCloseTo(-17.77777777777778);
  });
});

describe("R2C", () => {
  it("should be an alias for RankineToCelsius", () => {
    expect(R2C).toBe(RankineToCelsius);
  });
});
