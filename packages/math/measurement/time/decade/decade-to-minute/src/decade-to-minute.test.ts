import { DecadeToMinute, DecadesToMinutes } from "./decade-to-minute";

describe("DecadeToMinute", () => {
  it("should convert 1 decade to 5,256,000 minutes", () => {
    const decades = 1;
    const expectedMinutes = 5256000;
    const actualMinutes = DecadeToMinute(decades);
    expect(actualMinutes).toBe(expectedMinutes);
  });

  it("should convert 2 decades to 10,512,000 minutes", () => {
    const decades = 2;
    const expectedMinutes = 10512000;
    const actualMinutes = DecadeToMinute(decades);
    expect(actualMinutes).toBe(expectedMinutes);
  });
});

describe("DecadesToMinutes", () => {
  it("should be an alias for DecadeToMinute", () => {
    expect(DecadesToMinutes).toBe(DecadeToMinute);
  });
});
