import { WeekToCentury, WeeksToCenturies } from "./week-to-century";

describe("WeekToCentury", () => {
  it("should convert 5200 weeks to 1 century", () => {
    const weeks = 5200;
    const expectedCenturies = 1;
    const actualCenturies = WeekToCentury(weeks);
    expect(actualCenturies).toBe(expectedCenturies);
  });

  it("should convert 10400 weeks to 2 centuries", () => {
    const weeks = 10400;
    const expectedCenturies = 2;
    const actualCenturies = WeekToCentury(weeks);
    expect(actualCenturies).toBe(expectedCenturies);
  });
});

describe("WeeksToCenturies", () => {
  it("should be an alias for WeekToCentury", () => {
    expect(WeeksToCenturies).toBe(WeekToCentury);
  });
});
