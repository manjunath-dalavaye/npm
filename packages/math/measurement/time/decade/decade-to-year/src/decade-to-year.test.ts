import { DecadeToYear, DecadesToYears } from "./decade-to-year";

describe("DecadeToYear", () => {
  it("should convert 1 decade to 10 years", () => {
    const decades = 1;
    const expectedYears = 10;
    const actualYears = DecadeToYear(decades);
    expect(actualYears).toBe(expectedYears);
  });

  it("should convert 2 decades to 20 years", () => {
    const decades = 2;
    const expectedYears = 20;
    const actualYears = DecadeToYear(decades);
    expect(actualYears).toBe(expectedYears);
  });
});

describe("DecadesToYears", () => {
  it("should be an alias for DecadeToYear", () => {
    expect(DecadesToYears).toBe(DecadeToYear);
  });
});
