import { DecadeToDay, DecadesToDays } from "./decade-to-day";

describe("DecadeToDay", () => {
  it("should convert 1 decade to 3,650 days", () => {
    const decades = 1;
    const expectedDays = 3650;
    const actualDays = DecadeToDay(decades);
    expect(actualDays).toBe(expectedDays);
  });

  it("should convert 2 decades to 7,300 days", () => {
    const decades = 2;
    const expectedDays = 7300;
    const actualDays = DecadeToDay(decades);
    expect(actualDays).toBe(expectedDays);
  });
});

describe("DecadesToDays", () => {
  it("should be an alias for DecadeToDay", () => {
    expect(DecadesToDays).toBe(DecadeToDay);
  });
});
