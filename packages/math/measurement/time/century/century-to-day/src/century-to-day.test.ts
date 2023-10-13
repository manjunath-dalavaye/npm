import { CenturyToDay, CenturiesToDays } from "./century-to-day";

describe("CenturyToDay", () => {
  it("should convert 1 century to 36500 days", () => {
    const centuries = 1;
    const expectedDays = 36500;
    const actualDays = CenturyToDay(centuries);
    expect(actualDays).toBe(expectedDays);
  });

  it("should convert 2 centuries to 73000 days", () => {
    const centuries = 2;
    const expectedDays = 73000;
    const actualDays = CenturyToDay(centuries);
    expect(actualDays).toBe(expectedDays);
  });
});

describe("CenturiesToDays", () => {
  it("should be an alias of CenturyToDay", () => {
    expect(CenturiesToDays).toBe(CenturyToDay);
  });
});
