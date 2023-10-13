import {
  CenturyToMillisecond,
  CenturiesToMilliseconds,
} from "./century-to-millisecond";

describe("CenturyToMillisecond", () => {
  it("should convert 1 century to 3153600000000 milliseconds", () => {
    const centuries = 1;
    const expectedMilliseconds = 3153600000000;
    const actualMilliseconds = CenturyToMillisecond(centuries);
    expect(actualMilliseconds).toBe(expectedMilliseconds);
  });

  it("should convert 2 centuries to 6307200000000 milliseconds", () => {
    const centuries = 2;
    const expectedMilliseconds = 6307200000000;
    const actualMilliseconds = CenturyToMillisecond(centuries);
    expect(actualMilliseconds).toBe(expectedMilliseconds);
  });
});

describe("CenturiesToMilliseconds", () => {
  it("should be an alias of CenturyToMillisecond", () => {
    expect(CenturiesToMilliseconds).toBe(CenturyToMillisecond);
  });
});
