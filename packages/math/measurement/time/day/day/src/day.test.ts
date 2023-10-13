import { Day } from "./day";

describe("Day", () => {
  describe("toMillisecond", () => {
    it("should convert 1 day to 86400000 milliseconds", () => {
      const day = new Day(1);
      const expectedMilliseconds = 86400000;
      const actualMilliseconds = day.toMillisecond();
      expect(actualMilliseconds).toBe(expectedMilliseconds);
    });

    it("should convert 2 days to 172800000 milliseconds", () => {
      const day = new Day(2);
      const expectedMilliseconds = 172800000;
      const actualMilliseconds = day.toMillisecond();
      expect(actualMilliseconds).toBe(expectedMilliseconds);
    });
  });

  describe("toSecond", () => {
    it("should convert 1 day to 86400 seconds", () => {
      const day = new Day(1);
      const expectedSeconds = 86400;
      const actualSeconds = day.toSecond();
      expect(actualSeconds).toBe(expectedSeconds);
    });

    it("should convert 2 days to 172800 seconds", () => {
      const day = new Day(2);
      const expectedSeconds = 172800;
      const actualSeconds = day.toSecond();
      expect(actualSeconds).toBe(expectedSeconds);
    });
  });

  describe("toMinute", () => {
    it("should convert 1 day to 1440 minutes", () => {
      const day = new Day(1);
      const expectedMinutes = 1440;
      const actualMinutes = day.toMinute();
      expect(actualMinutes).toBe(expectedMinutes);
    });

    it("should convert 2 days to 2880 minutes", () => {
      const day = new Day(2);
      const expectedMinutes = 2880;
      const actualMinutes = day.toMinute();
      expect(actualMinutes).toBe(expectedMinutes);
    });
  });

  describe("toHour", () => {
    it("should convert 1 day to 24 hours", () => {
      const day = new Day(1);
      const expectedHours = 24;
      const actualHours = day.toHour();
      expect(actualHours).toBe(expectedHours);
    });

    it("should convert 2 days to 48 hours", () => {
      const day = new Day(2);
      const expectedHours = 48;
      const actualHours = day.toHour();
      expect(actualHours).toBe(expectedHours);
    });
  });

  describe("toWeek", () => {
    it("should convert 7 days to 1 week", () => {
      const day = new Day(7);
      const expectedWeeks = 1;
      const actualWeeks = day.toWeek();
      expect(actualWeeks).toBe(expectedWeeks);
    });

    it("should convert 14 days to 2 weeks", () => {
      const day = new Day(14);
      const expectedWeeks = 2;
      const actualWeeks = day.toWeek();
      expect(actualWeeks).toBe(expectedWeeks);
    });
  });

  describe("toMonth", () => {
    it("should convert 30 days to 1 month", () => {
      const day = new Day(30);
      const expectedMonths = 1;
      const actualMonths = day.toMonth();
      expect(actualMonths).toBe(expectedMonths);
    });

    it("should convert 60 days to 2 months", () => {
      const day = new Day(60);
      const expectedMonths = 2;
      const actualMonths = day.toMonth();
      expect(actualMonths).toBe(expectedMonths);
    });
  });

  describe("toYear", () => {
    it("should convert 365 days to 1 year", () => {
      const day = new Day(365);
      const expectedYears = 1;
      const actualYears = day.toYear();
      expect(actualYears).toBe(expectedYears);
    });

    it("should convert 730 days to 2 years", () => {
      const day = new Day(730);
      const expectedYears = 2;
      const actualYears = day.toYear();
      expect(actualYears).toBe(expectedYears);
    });
  });

  describe("toDecade", () => {
    it("should convert 3650 days to 1 decade", () => {
      const day = new Day(3650);
      const expectedDecades = 1;
      const actualDecades = day.toDecade();
      expect(actualDecades).toBe(expectedDecades);
    });

    it("should convert 7300 days to 2 decades", () => {
      const day = new Day(7300);
      const expectedDecades = 2;
      const actualDecades = day.toDecade();
      expect(actualDecades).toBe(expectedDecades);
    });
  });

  describe("toCentury", () => {
    it("should convert 36500 days to 1 century", () => {
      const day = new Day(36500);
      const expectedCenturies = 1;
      const actualCenturies = day.toCentury();
      expect(actualCenturies).toBe(expectedCenturies);
    });

    it("should convert 73000 days to 2 centuries", () => {
      const day = new Day(73000);
      const expectedCenturies = 2;
      const actualCenturies = day.toCentury();
      expect(actualCenturies).toBe(expectedCenturies);
    });
  });
});
