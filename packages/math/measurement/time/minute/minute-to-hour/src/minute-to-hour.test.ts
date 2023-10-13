import { MinuteToHour, MinutesToHours } from "./minute-to-hour";

describe("MinuteToHour", () => {
  it("should convert 60 minutes to 1 hour", () => {
    const minutes = 60;
    const expectedHours = 1;
    const actualHours = MinuteToHour(minutes);
    expect(actualHours).toBe(expectedHours);
  });

  it("should convert 120 minutes to 2 hours", () => {
    const minutes = 120;
    const expectedHours = 2;
    const actualHours = MinuteToHour(minutes);
    expect(actualHours).toBe(expectedHours);
  });
});

describe("MinutesToHours", () => {
  it("should be an alias for MinuteToHour", () => {
    expect(MinutesToHours).toBe(MinuteToHour);
  });
});
