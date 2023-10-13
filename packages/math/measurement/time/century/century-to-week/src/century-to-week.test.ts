import { CenturyToWeek, CenturiesToWeeks } from "./century-to-week";

describe("CenturyToWeek", () => {
  it("should convert 1 century to 5200 weeks", () => {
    const centuries = 1;
    const expectedWeeks = 5200;
    const actualWeeks = CenturyToWeek(centuries);
    expect(actualWeeks).toBe(expectedWeeks);
  });

  it("should convert 2 centuries to 10400 weeks", () => {
    const centuries = 2;
    const expectedWeeks = 10400;
    const actualWeeks = CenturyToWeek(centuries);
    expect(actualWeeks).toBe(expectedWeeks);
  });
});

describe("CenturiesToWeeks", () => {
  it("should be an alias of CenturyToWeek", () => {
    expect(CenturiesToWeeks).toBe(CenturyToWeek);
  });
});
