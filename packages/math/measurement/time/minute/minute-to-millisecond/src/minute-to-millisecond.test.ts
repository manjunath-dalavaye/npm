import {
  MinuteToMillisecond,
  MinutesToMilliseconds,
} from "./minute-to-millisecond";

describe("MinuteToMillisecond", () => {
  it("should convert 1 minute to 60000 milliseconds", () => {
    const minutes = 1;
    const expectedMilliseconds = 60000;
    const actualMilliseconds = MinuteToMillisecond(minutes);
    expect(actualMilliseconds).toBe(expectedMilliseconds);
  });

  it("should convert 5 minutes to 300000 milliseconds", () => {
    const minutes = 5;
    const expectedMilliseconds = 300000;
    const actualMilliseconds = MinuteToMillisecond(minutes);
    expect(actualMilliseconds).toBe(expectedMilliseconds);
  });
});

describe("MinutesToMilliseconds", () => {
  it("should be an alias for MinuteToMillisecond", () => {
    expect(MinutesToMilliseconds).toBe(MinuteToMillisecond);
  });
});
