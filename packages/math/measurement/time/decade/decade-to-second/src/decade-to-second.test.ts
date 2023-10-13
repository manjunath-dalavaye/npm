import { DecadeToSecond, DecadesToSeconds } from "./decade-to-second";

describe("DecadeToSecond", () => {
  it("should convert 1 decade to 315,360,000 seconds", () => {
    const decades = 1;
    const expectedSeconds = 315360000;
    const actualSeconds = DecadeToSecond(decades);
    expect(actualSeconds).toBe(expectedSeconds);
  });

  it("should convert 2 decades to 630,720,000 seconds", () => {
    const decades = 2;
    const expectedSeconds = 630720000;
    const actualSeconds = DecadeToSecond(decades);
    expect(actualSeconds).toBe(expectedSeconds);
  });
});

describe("DecadesToSeconds", () => {
  it("should be an alias for DecadeToSecond", () => {
    expect(DecadesToSeconds).toBe(DecadeToSecond);
  });
});
