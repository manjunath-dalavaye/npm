import { Week } from "./week";

describe("Week", () => {
  describe("toMillisecond", () => {
    it("should convert 1 week to 604800000 milliseconds", () => {
      const week = new Week(1);
      const expectedMilliseconds = 604800000;
      const actualMilliseconds = week.toMillisecond();
      expect(actualMilliseconds).toBe(expectedMilliseconds);
    });

    it("should convert 2 weeks to 1209600000 milliseconds", () => {
      const week = new Week(2);
      const expectedMilliseconds = 1209600000;
      const actualMilliseconds = week.toMillisecond();
      expect(actualMilliseconds).toBe(expectedMilliseconds);
    });
  });

  describe("toSecond", () => {
    it("should convert 1 week to 604800 seconds", () => {
      const week = new Week(1);
      const expectedSeconds = 604800;
      const actualSeconds = week.toSecond();
      expect(actualSeconds).toBe(expectedSeconds);
    });

    it("should convert 2 weeks to 1209600 seconds", () => {
      const week = new Week(2);
      const expectedSeconds = 1209600;
      const actualSeconds = week.toSecond();
      expect(actualSeconds).toBe(expectedSeconds);
    });
  });

  describe("toMinute", () => {
    it("should convert 1 week to 10080 minutes", () => {
      const week = new Week(1);
      const expectedMinutes = 10080;
      const actualMinutes = week.toMinute();
      expect(actualMinutes).toBe(expectedMinutes);
    });

    it("should convert 2 weeks to 20160 minutes", () => {
      const week = new Week(2);
      const expectedMinutes = 20160;
      const actualMinutes = week.toMinute();
      expect(actualMinutes).toBe(expectedMinutes);
    });
  });

  describe("toHour", () => {
    it("should convert 1 week to 168 hours", () => {
      const week = new Week(1);
      const expectedHours = 168;
      const actualHours = week.toHour();
      expect(actualHours).toBe(expectedHours);
    });

    it("should convert 2 weeks to 336 hours", () => {
      const week = new Week(2);
      const expectedHours = 336;
      const actualHours = week.toHour();
      expect(actualHours).toBe(expectedHours);
    });
  });

  describe("toDay", () => {
    it("should convert 1 week to 7 days", () => {
      const week = new Week(1);
      const expectedDays = 7;
      const actualDays = week.toDay();
      expect(actualDays).toBe(expectedDays);
    });

    it("should convert 2 weeks to 14 days", () => {
      const week = new Week(2);
      const expectedDays = 14;
      const actualDays = week.toDay();
      expect(actualDays).toBe(expectedDays);
    });
  });

  describe("toMonth", () => {
    it("should convert 1 week to 0.25 months", () => {
      const week = new Week(1);
      const expectedMonths = 0.25;
      const actualMonths = week.toMonth();
      expect(actualMonths).toBe(expectedMonths);
    });

    it("should convert 2 weeks to 0.5 months", () => {
      const week = new Week(2);
      const expectedMonths = 0.5;
      const actualMonths = week.toMonth();
      expect(actualMonths).toBe(expectedMonths);
    });
  });

  describe("toYear", () => {
    it("should convert 52 weeks to 1 year", () => {
      const week = new Week(52);
      const expectedYears = 1;
      const actualYears = week.toYear();
      expect(actualYears).toBe(expectedYears);
    });

    it("should convert 104 weeks to 2 years", () => {
      const week = new Week(104);
      const expectedYears = 2;
      const actualYears = week.toYear();
      expect(actualYears).toBe(expectedYears);
    });
  });

  describe("toDecade", () => {
    it("should convert 520 weeks to 1 decade", () => {
      const week = new Week(520);
      const expectedDecades = 1;
      const actualDecades = week.toDecade();
      expect(actualDecades).toBe(expectedDecades);
    });

    it("should convert 1040 weeks to 2 decades", () => {
      const week = new Week(1040);
      const expectedDecades = 2;
      const actualDecades = week.toDecade();
      expect(actualDecades).toBe(expectedDecades);
    });
  });

  describe("toCentury", () => {
    it("should convert 5200 weeks to 1 century", () => {
      const week = new Week(5200);
      const expectedCenturies = 1;
      const actualCenturies = week.toCentury();
      expect(actualCenturies).toBe(expectedCenturies);
    });

    it("should convert 10400 weeks to 2 centuries", () => {
      const week = new Week(10400);
      const expectedCenturies = 2;
      const actualCenturies = week.toCentury();
      expect(actualCenturies).toBe(expectedCenturies);
    });
  });
});
