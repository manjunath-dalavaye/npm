import {
  DecadeToMillisecond,
  DecadesToMilliseconds,
} from "./decade-to-millisecond";

describe("DecadeToMillisecond", () => {
  it("should convert 1 decade to 315,360,000,000 milliseconds", () => {
    const decades = 1;
    const expectedMilliseconds = 315360000000;
    const actualMilliseconds = DecadeToMillisecond(decades);
    expect(actualMilliseconds).toBe(expectedMilliseconds);
  });

  it("should convert 2 decades to 630,720,000,000 milliseconds", () => {
    const decades = 2;
    const expectedMilliseconds = 630720000000;
    const actualMilliseconds = DecadeToMillisecond(decades);
    expect(actualMilliseconds).toBe(expectedMilliseconds);
  });
});

describe("DecadesToMilliseconds", () => {
  it("should be an alias for DecadeToMillisecond", () => {
    expect(DecadesToMilliseconds).toBe(DecadeToMillisecond);
  });
});
