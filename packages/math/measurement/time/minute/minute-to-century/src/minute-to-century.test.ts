import { MinuteToCentury, MinutesToCenturies } from "./minute-to-century";

describe("MinuteToCentury", () => {
  it("should convert 52560000 minutes to 1 century", () => {
    const minutes = 52560000;
    const expectedCenturies = 1;
    const actualCenturies = MinuteToCentury(minutes);
    expect(actualCenturies).toBe(expectedCenturies);
  });

  it("should convert 105120000 minutes to 2 centuries", () => {
    const minutes = 105120000;
    const expectedCenturies = 2;
    const actualCenturies = MinuteToCentury(minutes);
    expect(actualCenturies).toBe(expectedCenturies);
  });
});

describe("MinutesToCenturies", () => {
  it("should be an alias for MinuteToCentury", () => {
    expect(MinutesToCenturies).toBe(MinuteToCentury);
  });
});
