import { KelvinToReaumur, K2Re } from "./kelvin-to-reaumur";

describe("KelvinToReaumur", () => {
  it("should convert 0 Kelvin to -218.52 Réaumur", () => {
    const kelvin = 0;
    const reaumur = KelvinToReaumur(kelvin);
    expect(reaumur).toBeCloseTo(-218.52);
  });

  it("should convert 273.15 Kelvin to 0 Réaumur", () => {
    const kelvin = 273.15;
    const reaumur = KelvinToReaumur(kelvin);
    expect(reaumur).toBeCloseTo(0);
  });

  it("should convert 373.15 Kelvin to 80 Réaumur", () => {
    const kelvin = 373.15;
    const reaumur = KelvinToReaumur(kelvin);
    expect(reaumur).toBeCloseTo(80);
  });
});

describe("K2Re", () => {
  it("should be an alias for KelvinToReaumur", () => {
    expect(K2Re).toBe(KelvinToReaumur);
  });
});
