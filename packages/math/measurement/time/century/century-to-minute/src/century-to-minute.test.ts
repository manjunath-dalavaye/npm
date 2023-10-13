import { CenturyToMinute, CenturiesToMinutes } from "./century-to-minute";

describe("CenturyToMinute", () => {
  it("should convert 1 century to 52560000 minutes", () => {
    const centuries = 1;
    const expectedMinutes = 52560000;
    const actualMinutes = CenturyToMinute(centuries);
    expect(actualMinutes).toBe(expectedMinutes);
  });

  it("should convert 2 centuries to 105120000 minutes", () => {
    const centuries = 2;
    const expectedMinutes = 105120000;
    const actualMinutes = CenturyToMinute(centuries);
    expect(actualMinutes).toBe(expectedMinutes);
  });
});

describe("CenturiesToMinutes", () => {
  it("should be an alias of CenturyToMinute", () => {
    expect(CenturiesToMinutes).toBe(CenturyToMinute);
  });
});
