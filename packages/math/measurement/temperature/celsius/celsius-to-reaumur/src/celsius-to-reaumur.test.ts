import { CelsiusToReaumur, C2Re } from "./celsius-to-reaumur";

describe("CelsiusToReaumur", () => {
  it("should convert 0 Celsius to 0 Réaumur", () => {
    const celsius = 0;
    const reaumur = CelsiusToReaumur(celsius);
    expect(reaumur).toBe(0);
  });

  it("should convert 25 Celsius to 20 Réaumur", () => {
    const celsius = 25;
    const reaumur = CelsiusToReaumur(celsius);
    expect(reaumur).toBe(20);
  });

  it("should convert -40 Celsius to -32 Réaumur", () => {
    const celsius = -40;
    const reaumur = CelsiusToReaumur(celsius);
    expect(reaumur).toBe(-32);
  });
});

describe("C2Re", () => {
  it("should be an alias for CelsiusToReaumur", () => {
    expect(C2Re).toBe(CelsiusToReaumur);
  });
});
