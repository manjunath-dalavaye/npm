import { CelsiusToKelvin, C2K } from "./celsius-to-kelvin";

describe("CelsiusToKelvin", () => {
  it("should convert 0 Celsius to 273.15 Kelvin", () => {
    const celsius = 0;
    const kelvin = CelsiusToKelvin(celsius);
    expect(kelvin).toBe(273.15);
  });

  it("should convert 25 Celsius to 298.15 Kelvin", () => {
    const celsius = 25;
    const kelvin = CelsiusToKelvin(celsius);
    expect(kelvin).toBe(298.15);
  });

  it("should convert -40 Celsius to 233.14999999999998 Kelvin", () => {
    const celsius = -40;
    const kelvin = CelsiusToKelvin(celsius);
    expect(kelvin).toBe(233.14999999999998);
  });
});

describe("C2K", () => {
  it("should be an alias for CelsiusToKelvin", () => {
    expect(C2K).toBe(CelsiusToKelvin);
  });
});
