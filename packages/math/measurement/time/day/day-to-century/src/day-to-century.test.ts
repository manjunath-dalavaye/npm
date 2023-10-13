import { DayToCentury, DaysToCenturies } from "./day-to-century";

describe("DayToCentury", () => {
  it("should convert 36500 days to 1 century", () => {
    const days = 36500;
    const expectedCenturies = 1;
    const actualCenturies = DayToCentury(days);
    expect(actualCenturies).toBe(expectedCenturies);
  });

  it("should convert 73000 days to 2 centuries", () => {
    const days = 73000;
    const expectedCenturies = 2;
    const actualCenturies = DayToCentury(days);
    expect(actualCenturies).toBe(expectedCenturies);
  });
});

describe("DaysToCenturies", () => {
  it("should be an alias for DayToCentury", () => {
    expect(DaysToCenturies).toBe(DayToCentury);
  });
});
