import { MinuteToSecond, MinutesToSeconds } from "./minute-to-second";

describe("MinuteToSecond", () => {
  it("should convert 1 minute to 60 seconds", () => {
    const minutes = 1;
    const expectedSeconds = 60;
    const actualSeconds = MinuteToSecond(minutes);
    expect(actualSeconds).toBe(expectedSeconds);
  });

  it("should convert 5 minutes to 300 seconds", () => {
    const minutes = 5;
    const expectedSeconds = 300;
    const actualSeconds = MinuteToSecond(minutes);
    expect(actualSeconds).toBe(expectedSeconds);
  });
});

describe("MinutesToSeconds", () => {
  it("should be an alias for MinuteToSecond", () => {
    expect(MinutesToSeconds).toBe(MinuteToSecond);
  });
});
