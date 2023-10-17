import { ReaumurToFahrenheit, Re2F } from "./reaumur-to-fahrenheit";

describe("ReaumurToFahrenheit", () => {
  it("should convert 0 Réaumur to 32 Fahrenheit", () => {
    const reaumur = 0;
    const fahrenheit = ReaumurToFahrenheit(reaumur);
    expect(fahrenheit).toBe(32);
  });

  it("should convert 80 Réaumur to 212 Fahrenheit", () => {
    const reaumur = 80;
    const fahrenheit = ReaumurToFahrenheit(reaumur);
    expect(fahrenheit).toBe(212);
  });

  it("should convert -40 Réaumur to -58 Fahrenheit", () => {
    const reaumur = -40;
    const fahrenheit = ReaumurToFahrenheit(reaumur);
    expect(fahrenheit).toBe(-58);
  });
});

describe("Re2F", () => {
  it("should be an alias of ReaumurToFahrenheit", () => {
    expect(Re2F).toBe(ReaumurToFahrenheit);
  });
});
