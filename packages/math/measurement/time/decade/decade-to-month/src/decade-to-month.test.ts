import { DecadeToMonth, DecadesToMonths } from "./decade-to-month";

describe("DecadeToMonth", () => {
  it("should convert 1 decade to 120 months", () => {
    const decades = 1;
    const expectedMonths = 120;
    const actualMonths = DecadeToMonth(decades);
    expect(actualMonths).toBe(expectedMonths);
  });

  it("should convert 2 decades to 240 months", () => {
    const decades = 2;
    const expectedMonths = 240;
    const actualMonths = DecadeToMonth(decades);
    expect(actualMonths).toBe(expectedMonths);
  });
});

describe("DecadesToMonths", () => {
  it("should be an alias for DecadeToMonth", () => {
    expect(DecadesToMonths).toBe(DecadeToMonth);
  });
});
