import { DecadeToHour, DecadesToHours } from "./decade-to-hour";

describe("DecadeToHour", () => {
  it("should convert 1 decade to 87,600 hours", () => {
    const decades = 1;
    const expectedHours = 87600;
    const actualHours = DecadeToHour(decades);
    expect(actualHours).toBe(expectedHours);
  });

  it("should convert 2 decades to 175,200 hours", () => {
    const decades = 2;
    const expectedHours = 175200;
    const actualHours = DecadeToHour(decades);
    expect(actualHours).toBe(expectedHours);
  });
});

describe("DecadesToHours", () => {
  it("should be an alias for DecadeToHour", () => {
    expect(DecadesToHours).toBe(DecadeToHour);
  });
});
