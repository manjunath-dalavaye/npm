import { FahrenheitToCelsius, F2C } from "./fahrenheit-to-celsius";

describe("FahrenheitToCelsius", () => {
  it("should convert 32 Fahrenheit to 0 Celsius", () => {
    const fahrenheit = 32;
    const celsius = FahrenheitToCelsius(fahrenheit);
    expect(celsius).toBe(0);
  });

  it("should convert 77 Fahrenheit to 25 Celsius", () => {
    const fahrenheit = 77;
    const celsius = FahrenheitToCelsius(fahrenheit);
    expect(celsius).toBe(25);
  });

  it("should convert -40 Fahrenheit to -40 Celsius", () => {
    const fahrenheit = -40;
    const celsius = FahrenheitToCelsius(fahrenheit);
    expect(celsius).toBe(-40);
  });
});

describe("F2C", () => {
  it("should be an alias for FahrenheitToCelsius", () => {
    expect(F2C).toBe(FahrenheitToCelsius);
  });
});
