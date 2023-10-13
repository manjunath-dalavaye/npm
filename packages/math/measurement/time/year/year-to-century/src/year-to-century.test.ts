import { YearToCentury, YearsToCenturies } from "./year-to-century";

describe("YearToCentury", () => {
  it("should convert 100 years to 1 century", () => {
    const years = 100;
    const expectedCenturies = 1;
    const actualCenturies = YearToCentury(years);
    expect(actualCenturies).toBe(expectedCenturies);
  });

  it("should convert 200 years to 2 centuries", () => {
    const years = 200;
    const expectedCenturies = 2;
    const actualCenturies = YearToCentury(years);
    expect(actualCenturies).toBe(expectedCenturies);
  });
});

describe("YearsToCenturies", () => {
  it("should be an alias for YearToCentury", () => {
    expect(YearsToCenturies).toBe(YearToCentury);
  });
});
