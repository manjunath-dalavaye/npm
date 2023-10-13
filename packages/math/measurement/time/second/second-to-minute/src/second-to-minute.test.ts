import { SecondToMinute, SecondsToMinutes } from "./second-to-minute";

describe("SecondToMinute", () => {
  it("should convert seconds to minutes", () => {
    const seconds = 120;
    const expectedMinutes = 2;
    const actualMinutes = SecondToMinute(seconds);
    expect(actualMinutes).toBe(expectedMinutes);
  });
});

describe("SecondsToMinutes", () => {
  it("should be an alias for SecondToMinute", () => {
    expect(SecondsToMinutes).toBe(SecondToMinute);
  });
});
