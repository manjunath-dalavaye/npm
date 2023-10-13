import { SecondToCentury, SecondsToCenturies } from "./second-to-century";

describe("SecondToCentury", () => {
  it("should convert 3153600000 seconds to 1 century", () => {
    const seconds = 3153600000;
    const expectedCenturies = 1;
    const actualCenturies = SecondToCentury(seconds);
    expect(actualCenturies).toBe(expectedCenturies);
  });

  it("should convert 6307200000 seconds to 2 centuries", () => {
    const seconds = 6307200000;
    const expectedCenturies = 2;
    const actualCenturies = SecondToCentury(seconds);
    expect(actualCenturies).toBe(expectedCenturies);
  });

  it("should convert 9460800000 seconds to 3 centuries", () => {
    const seconds = 9460800000;
    const expectedCenturies = 3;
    const actualCenturies = SecondToCentury(seconds);
    expect(actualCenturies).toBe(expectedCenturies);
  });
});

describe("SecondsToCenturies", () => {
  it("should be an alias for SecondToCentury", () => {
    expect(SecondsToCenturies).toBe(SecondToCentury);
  });
});
