import { SecondToWeek, SecondsToWeeks } from "./second-to-week";

describe("SecondToWeek", () => {
  it("should convert 604800 seconds to 1 week", () => {
    const seconds = 604800;
    const expectedWeeks = 1;
    const actualWeeks = SecondToWeek(seconds);
    expect(actualWeeks).toBe(expectedWeeks);
  });

  it("should convert 1209600 seconds to 2 weeks", () => {
    const seconds = 1209600;
    const expectedWeeks = 2;
    const actualWeeks = SecondToWeek(seconds);
    expect(actualWeeks).toBe(expectedWeeks);
  });

  it("should convert 1814400 seconds to 3 weeks", () => {
    const seconds = 1814400;
    const expectedWeeks = 3;
    const actualWeeks = SecondToWeek(seconds);
    expect(actualWeeks).toBe(expectedWeeks);
  });
});

describe("SecondsToWeeks", () => {
  it("should be an alias for SecondToWeek", () => {
    expect(SecondsToWeeks).toBe(SecondToWeek);
  });
});
