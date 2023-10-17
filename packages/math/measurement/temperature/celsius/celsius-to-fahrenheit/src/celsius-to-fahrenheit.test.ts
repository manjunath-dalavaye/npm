import { CelsiusToFahrenheit, C2F } from "./celsius-to-fahrenheit";

describe("CelsiusToFahrenheit", () => {
  it("should convert 0 Celsius to 32 Fahrenheit", () => {
    const celsius = 0;
    const fahrenheit = CelsiusToFahrenheit(celsius);
    expect(fahrenheit).toBe(32);
  });

  it("should convert 25 Celsius to 77 Fahrenheit", () => {
    const celsius = 25;
    const fahrenheit = CelsiusToFahrenheit(celsius);
    expect(fahrenheit).toBe(77);
  });

  it("should convert -40 Celsius to -40 Fahrenheit", () => {
    const celsius = -40;
    const fahrenheit = CelsiusToFahrenheit(celsius);
    expect(fahrenheit).toBe(-40);
  });
});

describe("C2F", () => {
  it("should be an alias for CelsiusToFahrenheit", () => {
    expect(C2F).toBe(CelsiusToFahrenheit);
  });
});
