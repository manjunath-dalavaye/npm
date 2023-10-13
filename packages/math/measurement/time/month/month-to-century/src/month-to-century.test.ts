import { MonthToCentury, MonthsToCenturies } from "./month-to-century";

describe("MonthToCentury", () => {
  it("should convert 1200 months to 1 century", () => {
    const months = 1200;
    const expectedCenturies = 1;
    const actualCenturies = MonthToCentury(months);
    expect(actualCenturies).toBe(expectedCenturies);
  });

  it("should convert 2400 months to 2 centuries", () => {
    const months = 2400;
    const expectedCenturies = 2;
    const actualCenturies = MonthToCentury(months);
    expect(actualCenturies).toBe(expectedCenturies);
  });
});

describe("MonthsToCenturies", () => {
  it("should be an alias for MonthToCentury", () => {
    expect(MonthsToCenturies).toBe(MonthToCentury);
  });
});
