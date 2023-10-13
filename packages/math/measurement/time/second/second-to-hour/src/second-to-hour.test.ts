import { SecondToHour, SecondsToHours } from "./second-to-hour";

describe("SecondToHour", () => {
  it("should convert seconds to hours", () => {
    const seconds = 7200;
    const expectedHours = 2;
    const actualHours = SecondToHour(seconds);
    expect(actualHours).toBe(expectedHours);
  });
});

describe("SecondsToHours", () => {
  it("should be an alias for SecondToHour", () => {
    expect(SecondsToHours).toBe(SecondToHour);
  });
});
