import { CenturyToYear, CenturiesToYears } from "./century-to-year";

describe("CenturyToYear", () => {
  it("should convert 1 century to 100 years", () => {
    const centuries = 1;
    const expectedYears = 100;
    const actualYears = CenturyToYear(centuries);
    expect(actualYears).toBe(expectedYears);
  });

  it("should convert 2 centuries to 200 years", () => {
    const centuries = 2;
    const expectedYears = 200;
    const actualYears = CenturyToYear(centuries);
    expect(actualYears).toBe(expectedYears);
  });
});

describe("CenturiesToYears", () => {
  it("should be an alias of CenturyToYear", () => {
    expect(CenturiesToYears).toBe(CenturyToYear);
  });
});
