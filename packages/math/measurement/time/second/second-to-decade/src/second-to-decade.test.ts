import { SecondToDecade, SecondsToDecades } from "./second-to-decade";

describe("SecondToDecade", () => {
  it("should convert 315360000 seconds to 1 decade", () => {
    const seconds = 315360000;
    const expectedDecades = 1;
    const actualDecades = SecondToDecade(seconds);
    expect(actualDecades).toBe(expectedDecades);
  });

  it("should convert 630720000 seconds to 2 decades", () => {
    const seconds = 630720000;
    const expectedDecades = 2;
    const actualDecades = SecondToDecade(seconds);
    expect(actualDecades).toBe(expectedDecades);
  });

  it("should convert 946080000 seconds to 3 decades", () => {
    const seconds = 946080000;
    const expectedDecades = 3;
    const actualDecades = SecondToDecade(seconds);
    expect(actualDecades).toBe(expectedDecades);
  });
});

describe("SecondsToDecades", () => {
  it("should be an alias for SecondToDecade", () => {
    expect(SecondsToDecades).toBe(SecondToDecade);
  });
});
