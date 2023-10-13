import { SecondToMonth, SecondsToMonths } from "./second-to-month";

describe("SecondToMonth", () => {
  it("should convert 2592000 seconds to 1 month", () => {
    const seconds = 2592000;
    const expectedMonths = 1;
    const actualMonths = SecondToMonth(seconds);
    expect(actualMonths).toBe(expectedMonths);
  });

  it("should convert 5184000 seconds to 2 months", () => {
    const seconds = 5184000;
    const expectedMonths = 2;
    const actualMonths = SecondToMonth(seconds);
    expect(actualMonths).toBe(expectedMonths);
  });

  it("should convert 7776000 seconds to 3 months", () => {
    const seconds = 7776000;
    const expectedMonths = 3;
    const actualMonths = SecondToMonth(seconds);
    expect(actualMonths).toBe(expectedMonths);
  });
});

describe("SecondsToMonths", () => {
  it("should be an alias for SecondToMonth", () => {
    expect(SecondsToMonths).toBe(SecondToMonth);
  });
});
