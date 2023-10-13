import { DecadeToWeek, DecadesToWeeks } from "./decade-to-week";

describe("DecadeToWeek", () => {
  it("should convert 1 decade to 520 weeks", () => {
    const decades = 1;
    const expectedWeeks = 520;
    const actualWeeks = DecadeToWeek(decades);
    expect(actualWeeks).toBe(expectedWeeks);
  });

  it("should convert 2 decades to 1040 weeks", () => {
    const decades = 2;
    const expectedWeeks = 1040;
    const actualWeeks = DecadeToWeek(decades);
    expect(actualWeeks).toBe(expectedWeeks);
  });
});

describe("DecadesToWeeks", () => {
  it("should be an alias for DecadeToWeek", () => {
    expect(DecadesToWeeks).toBe(DecadeToWeek);
  });
});
