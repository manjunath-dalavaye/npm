import { CenturyToHour, CenturiesToHours } from "./century-to-hour";

describe("CenturyToHour", () => {
  it("should convert 1 century to 876000 hours", () => {
    const centuries = 1;
    const expectedHours = 876000;
    const actualHours = CenturyToHour(centuries);
    expect(actualHours).toBe(expectedHours);
  });

  it("should convert 2 centuries to 1752000 hours", () => {
    const centuries = 2;
    const expectedHours = 1752000;
    const actualHours = CenturyToHour(centuries);
    expect(actualHours).toBe(expectedHours);
  });
});

describe("CenturiesToHours", () => {
  it("should be an alias of CenturyToHour", () => {
    expect(CenturiesToHours).toBe(CenturyToHour);
  });
});
