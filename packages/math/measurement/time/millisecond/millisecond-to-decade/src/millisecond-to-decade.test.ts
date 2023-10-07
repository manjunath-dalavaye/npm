import {
  MillisecondToDecade,
  MillisecondsToDecades,
} from "./millisecond-to-decade";

describe("MillisecondToDecade", () => {
  it("converts 315360000000 milliseconds to 1 decade", () => {
    expect(MillisecondToDecade(315360000000)).toBe(1);
  });

  it("converts 630720000000 milliseconds to 2 decades", () => {
    expect(MillisecondToDecade(630720000000)).toBe(2);
  });

  it("converts 0 milliseconds to 0 decades", () => {
    expect(MillisecondToDecade(0)).toBe(0);
  });

  it("converts negative milliseconds to negative decades", () => {
    expect(MillisecondToDecade(-315360000000)).toBe(-1);
  });
});

describe("MillisecondsToDecades", () => {
  it("is an alias for MillisecondToDecade", () => {
    expect(MillisecondsToDecades).toBe(MillisecondToDecade);
  });
});
