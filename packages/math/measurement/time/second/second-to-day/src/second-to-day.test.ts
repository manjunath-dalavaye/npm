import { SecondToDay, SecondsToDays } from "./second-to-day";

describe("SecondToDay", () => {
  it("should convert seconds to days", () => {
    const seconds = 172800;
    const expectedDays = 2;
    const actualDays = SecondToDay(seconds);
    expect(actualDays).toBe(expectedDays);
  });
});

describe("SecondsToDays", () => {
  it("should be an alias for SecondToDay", () => {
    expect(SecondsToDays).toBe(SecondToDay);
  });
});
