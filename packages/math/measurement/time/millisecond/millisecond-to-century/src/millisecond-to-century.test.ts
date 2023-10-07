import {
  MillisecondToCentury,
  MillisecondsToCenturies,
} from "./millisecond-to-century";

describe("MillisecondToCentury", () => {
  it("converts 3153600000000 milliseconds to 1 century", () => {
    expect(MillisecondToCentury(3153600000000)).toBe(1);
  });

  it("converts 6307200000000 milliseconds to 2 centuries", () => {
    expect(MillisecondToCentury(6307200000000)).toBe(2);
  });

  it("converts 0 milliseconds to 0 centuries", () => {
    expect(MillisecondToCentury(0)).toBe(0);
  });

  it("converts negative milliseconds to negative centuries", () => {
    expect(MillisecondToCentury(-3153600000000)).toBe(-1);
  });
});

describe("MillisecondsToCenturies", () => {
  it("is an alias for MillisecondToCentury", () => {
    expect(MillisecondsToCenturies).toBe(MillisecondToCentury);
  });
});
