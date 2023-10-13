import { WeekToDecade, WeeksToDecades } from "./week-to-decade";

describe("WeekToDecade", () => {
  it("should convert 520 weeks to 1 decade", () => {
    const weeks = 520;
    const expectedDecades = 1;
    const actualDecades = WeekToDecade(weeks);
    expect(actualDecades).toBe(expectedDecades);
  });

  it("should convert 1040 weeks to 2 decades", () => {
    const weeks = 1040;
    const expectedDecades = 2;
    const actualDecades = WeekToDecade(weeks);
    expect(actualDecades).toBe(expectedDecades);
  });
});

describe("WeeksToDecades", () => {
  it("should be an alias for WeekToDecade", () => {
    expect(WeeksToDecades).toBe(WeekToDecade);
  });
});
