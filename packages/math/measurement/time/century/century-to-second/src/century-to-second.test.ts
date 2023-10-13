import { CenturyToSecond, CenturiesToSeconds } from "./century-to-second";

describe("CenturyToSecond", () => {
  it("should convert 1 century to 3153600000 seconds", () => {
    const centuries = 1;
    const expectedSeconds = 3153600000;
    const actualSeconds = CenturyToSecond(centuries);
    expect(actualSeconds).toBe(expectedSeconds);
  });

  it("should convert 2 centuries to 6307200000 seconds", () => {
    const centuries = 2;
    const expectedSeconds = 6307200000;
    const actualSeconds = CenturyToSecond(centuries);
    expect(actualSeconds).toBe(expectedSeconds);
  });
});

describe("CenturiesToSeconds", () => {
  it("should be an alias of CenturyToSecond", () => {
    expect(CenturiesToSeconds).toBe(CenturyToSecond);
  });
});
