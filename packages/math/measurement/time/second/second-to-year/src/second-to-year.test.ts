import { SecondToYear, SecondsToYears } from "./second-to-year";

describe("SecondToYear", () => {
  it("should convert 31536000 seconds to 1 year", () => {
    const seconds = 31536000;
    const expectedYears = 1;
    const actualYears = SecondToYear(seconds);
    expect(actualYears).toBe(expectedYears);
  });

  it("should convert 63072000 seconds to 2 years", () => {
    const seconds = 63072000;
    const expectedYears = 2;
    const actualYears = SecondToYear(seconds);
    expect(actualYears).toBe(expectedYears);
  });

  it("should convert 94608000 seconds to 3 years", () => {
    const seconds = 94608000;
    const expectedYears = 3;
    const actualYears = SecondToYear(seconds);
    expect(actualYears).toBe(expectedYears);
  });
});

describe("SecondsToYears", () => {
  it("should be an alias for SecondToYear", () => {
    expect(SecondsToYears).toBe(SecondToYear);
  });
});
