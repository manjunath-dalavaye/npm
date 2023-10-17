import { FahrenheitToReaumur, F2Re } from "./fahrenheit-to-reaumur";

describe("FahrenheitToReaumur", () => {
  it("should convert 32 Fahrenheit to 0 Réaumur", () => {
    const fahrenheit = 32;
    const reaumur = FahrenheitToReaumur(fahrenheit);
    expect(reaumur).toBe(0);
  });

  it("should convert 77 Fahrenheit to 20 Réaumur", () => {
    const fahrenheit = 77;
    const reaumur = FahrenheitToReaumur(fahrenheit);
    expect(reaumur).toBe(20);
  });

  it("should convert -40 Fahrenheit to -32 Réaumur", () => {
    const fahrenheit = -40;
    const reaumur = FahrenheitToReaumur(fahrenheit);
    expect(reaumur).toBe(-32);
  });
});

describe("F2Re", () => {
  it("should be an alias for FahrenheitToReaumur", () => {
    expect(F2Re).toBe(FahrenheitToReaumur);
  });
});
