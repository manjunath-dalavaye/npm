import { KelvinToCelsius, K2C } from "./kelvin-to-celsius";

describe("KelvinToCelsius", () => {
  it("should convert 0 Kelvin to -273.15 Celsius", () => {
    const kelvin = 0;
    const celsius = KelvinToCelsius(kelvin);
    expect(celsius).toBeCloseTo(-273.15);
  });

  it("should convert 273.15 Kelvin to 0 Celsius", () => {
    const kelvin = 273.15;
    const celsius = KelvinToCelsius(kelvin);
    expect(celsius).toBeCloseTo(0);
  });

  it("should convert 373.15 Kelvin to 100 Celsius", () => {
    const kelvin = 373.15;
    const celsius = KelvinToCelsius(kelvin);
    expect(celsius).toBeCloseTo(100);
  });
});

describe("K2C", () => {
  it("should be an alias for KelvinToCelsius", () => {
    expect(K2C).toBe(KelvinToCelsius);
  });
});
