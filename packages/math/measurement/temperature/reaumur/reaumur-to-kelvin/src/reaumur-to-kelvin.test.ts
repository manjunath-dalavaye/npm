import { ReaumurToKelvin, Re2K } from "./reaumur-to-kelvin";

describe("ReaumurToKelvin", () => {
  it("should convert 0 Réaumur to 273.15 Kelvin", () => {
    const reaumur = 0;
    const kelvin = ReaumurToKelvin(reaumur);
    expect(kelvin).toBe(273.15);
  });

  it("should convert 80 Réaumur to 373.15 Kelvin", () => {
    const reaumur = 80;
    const kelvin = ReaumurToKelvin(reaumur);
    expect(kelvin).toBe(373.15);
  });

  it("should convert -40 Réaumur to 223.14999999999998 Kelvin", () => {
    const reaumur = -40;
    const kelvin = ReaumurToKelvin(reaumur);
    expect(kelvin).toBe(223.14999999999998);
  });
});

describe("Re2K", () => {
  it("should be an alias of ReaumurToKelvin", () => {
    expect(Re2K).toBe(ReaumurToKelvin);
  });
});
