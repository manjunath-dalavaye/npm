import {
  SecondToMillisecond,
  SecondsToMilliseconds,
} from "./second-to-millisecond";

describe("SecondToMillisecond", () => {
  it("should convert seconds to milliseconds", () => {
    const seconds = 5;
    const expectedMilliseconds = 5000;
    const actualMilliseconds = SecondToMillisecond(seconds);
    expect(actualMilliseconds).toBe(expectedMilliseconds);
  });

  it("should convert negative seconds to negative milliseconds", () => {
    const seconds = -5;
    const expectedMilliseconds = -5000;
    const actualMilliseconds = SecondToMillisecond(seconds);
    expect(actualMilliseconds).toBe(expectedMilliseconds);
  });

  it("should convert 0 seconds to 0 milliseconds", () => {
    const seconds = 0;
    const expectedMilliseconds = 0;
    const actualMilliseconds = SecondToMillisecond(seconds);
    expect(actualMilliseconds).toBe(expectedMilliseconds);
  });
});

describe("SecondsToMilliseconds", () => {
  it("should be an alias for SecondToMillisecond", () => {
    expect(SecondsToMilliseconds).toBe(SecondToMillisecond);
  });
});
