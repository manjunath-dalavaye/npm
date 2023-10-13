import { CenturyToMonth, CenturiesToMonths } from "./century-to-month";

describe("CenturyToMonth", () => {
  it("should convert 1 century to 1200 months", () => {
    const centuries = 1;
    const expectedMonths = 1200;
    const actualMonths = CenturyToMonth(centuries);
    expect(actualMonths).toBe(expectedMonths);
  });

  it("should convert 2 centuries to 2400 months", () => {
    const centuries = 2;
    const expectedMonths = 2400;
    const actualMonths = CenturyToMonth(centuries);
    expect(actualMonths).toBe(expectedMonths);
  });
});

describe("CenturiesToMonths", () => {
  it("should be an alias of CenturyToMonth", () => {
    expect(CenturiesToMonths).toBe(CenturyToMonth);
  });
});
