import { MonthToHour, MonthsToHours } from "./month-to-hour";

describe("MonthToHour", () => {
  it("should convert 1 month to 720 hours", () => {
    const months = 1;
    const expectedHours = 720;
    const actualHours = MonthToHour(months);
    expect(actualHours).toBe(expectedHours);
  });

  it("should convert 2 months to 1440 hours", () => {
    const months = 2;
    const expectedHours = 1440;
    const actualHours = MonthToHour(months);
    expect(actualHours).toBe(expectedHours);
  });
});

describe("MonthsToHours", () => {
  it("should be an alias for MonthToHour", () => {
    expect(MonthsToHours).toBe(MonthToHour);
  });
});
