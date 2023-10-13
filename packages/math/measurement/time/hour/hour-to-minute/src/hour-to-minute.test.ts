import { HourToMinute, HoursToMinutes } from "./hour-to-minute";

describe("HourToMinute", () => {
  it("should convert 1 hour to 60 minutes", () => {
    const hours = 1;
    const expectedMinutes = 60;
    const actualMinutes = HourToMinute(hours);
    expect(actualMinutes).toBe(expectedMinutes);
  });

  it("should convert 2 hours to 120 minutes", () => {
    const hours = 2;
    const expectedMinutes = 120;
    const actualMinutes = HourToMinute(hours);
    expect(actualMinutes).toBe(expectedMinutes);
  });
});

describe("HoursToMinutes", () => {
  it("should be an alias for HourToMinute", () => {
    expect(HoursToMinutes).toBe(HourToMinute);
  });
});
