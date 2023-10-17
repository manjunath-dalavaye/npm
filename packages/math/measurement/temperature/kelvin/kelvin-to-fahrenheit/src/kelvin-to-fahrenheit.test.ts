import { KelvinToFahrenheit, K2F } from "./kelvin-to-fahrenheit";

describe("KelvinToFahrenheit", () => {
  it("should convert 0 Kelvin to -459.67 Fahrenheit", () => {
    const kelvin = 0;
    const fahrenheit = KelvinToFahrenheit(kelvin);
    expect(fahrenheit).toBeCloseTo(-459.67);
  });

  it("should convert 273.15 Kelvin to 32 Fahrenheit", () => {
    const kelvin = 273.15;
    const fahrenheit = KelvinToFahrenheit(kelvin);
    expect(fahrenheit).toBeCloseTo(32);
  });

  it("should convert 373.15 Kelvin to 212 Fahrenheit", () => {
    const kelvin = 373.15;
    const fahrenheit = KelvinToFahrenheit(kelvin);
    expect(fahrenheit).toBeCloseTo(212);
  });
});

describe("K2F", () => {
  it("should be an alias for KelvinToFahrenheit", () => {
    expect(K2F).toBe(KelvinToFahrenheit);
  });
});
