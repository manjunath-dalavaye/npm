import { Century } from "./century";

describe("Century", () => {
  const century = new Century(1);

  it("should convert 1 century to 3153600000000 milliseconds", () => {
    const expectedMilliseconds = 3153600000000;
    const actualMilliseconds = century.toMillisecond();
    expect(actualMilliseconds).toBe(expectedMilliseconds);
  });

  it("should convert 1 century to 3153600000 seconds", () => {
    const expectedSeconds = 3153600000;
    const actualSeconds = century.toSecond();
    expect(actualSeconds).toBe(expectedSeconds);
  });

  it("should convert 1 century to 52560000 minutes", () => {
    const expectedMinutes = 52560000;
    const actualMinutes = century.toMinute();
    expect(actualMinutes).toBe(expectedMinutes);
  });

  it("should convert 1 century to 876000 hours", () => {
    const expectedHours = 876000;
    const actualHours = century.toHour();
    expect(actualHours).toBe(expectedHours);
  });

  it("should convert 1 century to 36500 days", () => {
    const expectedDays = 36500;
    const actualDays = century.toDay();
    expect(actualDays).toBe(expectedDays);
  });

  it("should convert 1 century to 5200 weeks", () => {
    const expectedWeeks = 5200;
    const actualWeeks = century.toWeek();
    expect(actualWeeks).toBe(expectedWeeks);
  });

  it("should convert 1 century to 1200 months", () => {
    const expectedMonths = 1200;
    const actualMonths = century.toMonth();
    expect(actualMonths).toBe(expectedMonths);
  });

  it("should convert 1 century to 100 years", () => {
    const expectedYears = 100;
    const actualYears = century.toYear();
    expect(actualYears).toBe(expectedYears);
  });

  it("should convert 1 century to 10 decades", () => {
    const expectedDecades = 10;
    const actualDecades = century.toDecade();
    expect(actualDecades).toBe(expectedDecades);
  });
});
