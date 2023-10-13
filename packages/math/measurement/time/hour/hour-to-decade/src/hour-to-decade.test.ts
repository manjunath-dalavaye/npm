import { HourToDecade, HoursToDecades } from "./hour-to-decade";

describe("HourToDecade", () => {
  it("should convert 87600 hours to 1 decade", () => {
    const hours = 87600;
    const expectedDecades = 1;
    const actualDecades = HourToDecade(hours);
    expect(actualDecades).toBe(expectedDecades);
  });

  it("should convert 175200 hours to 2 decades", () => {
    const hours = 175200;
    const expectedDecades = 2;
    const actualDecades = HourToDecade(hours);
    expect(actualDecades).toBe(expectedDecades);
  });
});

describe("HoursToDecades", () => {
  it("should be an alias for HourToDecade", () => {
    expect(HoursToDecades).toBe(HourToDecade);
  });
});
