import { DayToDecade, DaysToDecades } from "./day-to-decade";

describe("DayToDecade", () => {
  it("should convert 3650 days to 1 decade", () => {
    const days = 3650;
    const expectedDecades = 1;
    const actualDecades = DayToDecade(days);
    expect(actualDecades).toBe(expectedDecades);
  });

  it("should convert 7300 days to 2 decades", () => {
    const days = 7300;
    const expectedDecades = 2;
    const actualDecades = DayToDecade(days);
    expect(actualDecades).toBe(expectedDecades);
  });
});

describe("DaysToDecades", () => {
  it("should be an alias for DayToDecade", () => {
    expect(DaysToDecades).toBe(DayToDecade);
  });
});
