import { MonthToSecond, MonthsToSeconds } from "./month-to-second";

describe("MonthToSecond", () => {
  it("should convert 1 month to 2592000 seconds", () => {
    const months = 1;
    const expectedSeconds = 2592000;
    const actualSeconds = MonthToSecond(months);
    expect(actualSeconds).toBe(expectedSeconds);
  });

  it("should convert 2 months to 5184000 seconds", () => {
    const months = 2;
    const expectedSeconds = 5184000;
    const actualSeconds = MonthToSecond(months);
    expect(actualSeconds).toBe(expectedSeconds);
  });
});

describe("MonthsToSeconds", () => {
  it("should be an alias for MonthToSecond", () => {
    expect(MonthsToSeconds).toBe(MonthToSecond);
  });
});
