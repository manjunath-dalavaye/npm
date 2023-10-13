import { MonthToDecade, MonthsToDecades } from "./month-to-decade";

describe("MonthToDecade", () => {
  it("should convert 120 months to 1 decade", () => {
    const months = 120;
    const expectedDecades = 1;
    const actualDecades = MonthToDecade(months);
    expect(actualDecades).toBe(expectedDecades);
  });

  it("should convert 240 months to 2 decades", () => {
    const months = 240;
    const expectedDecades = 2;
    const actualDecades = MonthToDecade(months);
    expect(actualDecades).toBe(expectedDecades);
  });
});

describe("MonthsToDecades", () => {
  it("should be an alias for MonthToDecade", () => {
    expect(MonthsToDecades).toBe(MonthToDecade);
  });
});
