import { MinuteToDecade, MinutesToDecades } from "./minute-to-decade";

describe("MinuteToDecade", () => {
  it("should convert 5256000 minutes to 1 decade", () => {
    const minutes = 5256000;
    const expectedDecades = 1;
    const actualDecades = MinuteToDecade(minutes);
    expect(actualDecades).toBe(expectedDecades);
  });

  it("should convert 10512000 minutes to 2 decades", () => {
    const minutes = 10512000;
    const expectedDecades = 2;
    const actualDecades = MinuteToDecade(minutes);
    expect(actualDecades).toBe(expectedDecades);
  });
});

describe("MinutesToDecades", () => {
  it("should be an alias for MinuteToDecade", () => {
    expect(MinutesToDecades).toBe(MinuteToDecade);
  });
});
