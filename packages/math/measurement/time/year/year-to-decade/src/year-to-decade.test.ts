import { YearToDecade, YearsToDecades } from "./year-to-decade";

describe("YearToDecade", () => {
  it("should convert 10 years to 1 decade", () => {
    const years = 10;
    const expectedDecades = 1;
    const actualDecades = YearToDecade(years);
    expect(actualDecades).toBe(expectedDecades);
  });

  it("should convert 20 years to 2 decades", () => {
    const years = 20;
    const expectedDecades = 2;
    const actualDecades = YearToDecade(years);
    expect(actualDecades).toBe(expectedDecades);
  });
});

describe("YearsToDecades", () => {
  it("should be an alias for YearToDecade", () => {
    expect(YearsToDecades).toBe(YearToDecade);
  });
});
