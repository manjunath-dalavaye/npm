import { ReaumurToCelsius, Re2C } from "./reaumur-to-celsius";

describe("ReaumurToCelsius", () => {
  it("should convert 0 Réaumur to 0 Celsius", () => {
    const reaumur = 0;
    const celsius = ReaumurToCelsius(reaumur);
    expect(celsius).toBe(0);
  });

  it("should convert 80 Réaumur to 100 Celsius", () => {
    const reaumur = 80;
    const celsius = ReaumurToCelsius(reaumur);
    expect(celsius).toBe(100);
  });

  it("should convert -40 Réaumur to -50 Celsius", () => {
    const reaumur = -40;
    const celsius = ReaumurToCelsius(reaumur);
    expect(celsius).toBe(-50);
  });
});

describe("Re2C", () => {
  it("should be an alias of ReaumurToCelsius", () => {
    expect(Re2C).toBe(ReaumurToCelsius);
  });
});
