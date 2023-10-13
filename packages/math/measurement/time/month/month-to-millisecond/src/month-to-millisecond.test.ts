import {
  MonthToMillisecond,
  MonthsToMilliseconds,
} from "./month-to-millisecond";

describe("MonthToMillisecond", () => {
  it("should convert 1 month to 2592000000 milliseconds", () => {
    const months = 1;
    const expectedMilliseconds = 2592000000;
    const actualMilliseconds = MonthToMillisecond(months);
    expect(actualMilliseconds).toBe(expectedMilliseconds);
  });

  it("should convert 2 months to 5184000000 milliseconds", () => {
    const months = 2;
    const expectedMilliseconds = 5184000000;
    const actualMilliseconds = MonthToMillisecond(months);
    expect(actualMilliseconds).toBe(expectedMilliseconds);
  });
});

describe("MonthsToMilliseconds", () => {
  it("should be an alias for MonthToMillisecond", () => {
    expect(MonthsToMilliseconds).toBe(MonthToMillisecond);
  });
});
