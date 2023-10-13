import { HourToCentury, HoursToCenturies } from "./hour-to-century";

describe("HourToCentury", () => {
  it("should convert 876000 hours to 1 century", () => {
    const hours = 876000;
    const expectedCenturies = 1;
    const actualCenturies = HourToCentury(hours);
    expect(actualCenturies).toBe(expectedCenturies);
  });

  it("should convert 1752000 hours to 2 centuries", () => {
    const hours = 1752000;
    const expectedCenturies = 2;
    const actualCenturies = HourToCentury(hours);
    expect(actualCenturies).toBe(expectedCenturies);
  });
});

describe("HoursToCenturies", () => {
  it("should be an alias for HourToCentury", () => {
    expect(HoursToCenturies).toBe(HourToCentury);
  });
});
