import { FahrenheitToKelvin, F2K } from "./fahrenheit-to-kelvin";

describe("FahrenheitToKelvin", () => {
  it("should convert 32 Fahrenheit to 273.15 Kelvin", () => {
    const fahrenheit = 32;
    const kelvin = FahrenheitToKelvin(fahrenheit);
    expect(kelvin).toBe(273.15);
  });

  it("should convert 77 Fahrenheit to 298.15000000000003 Kelvin", () => {
    const fahrenheit = 77;
    const kelvin = FahrenheitToKelvin(fahrenheit);
    expect(kelvin).toBe(298.15000000000003);
  });

  it("should convert -40 Fahrenheit to 233.14999999999998 Kelvin", () => {
    const fahrenheit = -40;
    const kelvin = FahrenheitToKelvin(fahrenheit);
    expect(kelvin).toBe(233.14999999999998);
  });
});

describe("F2K", () => {
  it("should be an alias for FahrenheitToKelvin", () => {
    expect(F2K).toBe(FahrenheitToKelvin);
  });
});
