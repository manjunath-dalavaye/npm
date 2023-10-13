import { Decade } from "./decade";

describe("Decade", () => {
  const decades = 2;
  const decade = new Decade(decades);

  it("should convert decades to milliseconds", () => {
    const expectedMilliseconds = 630720000000;
    const actualMilliseconds = decade.toMillisecond();
    expect(actualMilliseconds).toBe(expectedMilliseconds);
  });

  it("should convert decades to seconds", () => {
    const expectedSeconds = 630720000;
    const actualSeconds = decade.toSecond();
    expect(actualSeconds).toBe(expectedSeconds);
  });

  it("should convert decades to minutes", () => {
    const expectedMinutes = 10512000;
    const actualMinutes = decade.toMinute();
    expect(actualMinutes).toBe(expectedMinutes);
  });

  it("should convert decades to hours", () => {
    const expectedHours = 175200;
    const actualHours = decade.toHour();
    expect(actualHours).toBe(expectedHours);
  });

  it("should convert decades to days", () => {
    const expectedDays = 7300;
    const actualDays = decade.toDay();
    expect(actualDays).toBe(expectedDays);
  });

  it("should convert decades to weeks", () => {
    const expectedWeeks = 1040;
    const actualWeeks = decade.toWeek();
    expect(actualWeeks).toBeCloseTo(expectedWeeks);
  });

  it("should convert decades to months", () => {
    const expectedMonths = 240;
    const actualMonths = decade.toMonth();
    expect(actualMonths).toBe(expectedMonths);
  });

  it("should convert decades to years", () => {
    const expectedYears = 20;
    const actualYears = decade.toYear();
    expect(actualYears).toBe(expectedYears);
  });

  it("should convert decades to centuries", () => {
    const expectedCenturies = 0.2;
    const actualCenturies = decade.toCentury();
    expect(actualCenturies).toBe(expectedCenturies);
  });
});
