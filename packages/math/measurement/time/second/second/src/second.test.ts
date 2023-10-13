import { Second } from "./second";

describe("Second", () => {
  describe("toMillisecond", () => {
    it("should convert 1 second to 1000 milliseconds", () => {
      const seconds = new Second(1);
      const expectedMilliseconds = 1000;
      const actualMilliseconds = seconds.toMillisecond();
      expect(actualMilliseconds).toBe(expectedMilliseconds);
    });

    it("should convert 5 seconds to 5000 milliseconds", () => {
      const seconds = new Second(5);
      const expectedMilliseconds = 5000;
      const actualMilliseconds = seconds.toMillisecond();
      expect(actualMilliseconds).toBe(expectedMilliseconds);
    });
  });

  describe("toMinute", () => {
    it("should convert 60 seconds to 1 minute", () => {
      const seconds = new Second(60);
      const expectedMinutes = 1;
      const actualMinutes = seconds.toMinute();
      expect(actualMinutes).toBe(expectedMinutes);
    });

    it("should convert 120 seconds to 2 minutes", () => {
      const seconds = new Second(120);
      const expectedMinutes = 2;
      const actualMinutes = seconds.toMinute();
      expect(actualMinutes).toBe(expectedMinutes);
    });
  });

  describe("toHour", () => {
    it("should convert 3600 seconds to 1 hour", () => {
      const seconds = new Second(3600);
      const expectedHours = 1;
      const actualHours = seconds.toHour();
      expect(actualHours).toBe(expectedHours);
    });

    it("should convert 7200 seconds to 2 hours", () => {
      const seconds = new Second(7200);
      const expectedHours = 2;
      const actualHours = seconds.toHour();
      expect(actualHours).toBe(expectedHours);
    });
  });

  describe("toDay", () => {
    it("should convert 86400 seconds to 1 day", () => {
      const seconds = new Second(86400);
      const expectedDays = 1;
      const actualDays = seconds.toDay();
      expect(actualDays).toBe(expectedDays);
    });

    it("should convert 172800 seconds to 2 days", () => {
      const seconds = new Second(172800);
      const expectedDays = 2;
      const actualDays = seconds.toDay();
      expect(actualDays).toBe(expectedDays);
    });
  });

  describe("toWeek", () => {
    it("should convert 604800 seconds to 1 week", () => {
      const seconds = new Second(604800);
      const expectedWeeks = 1;
      const actualWeeks = seconds.toWeek();
      expect(actualWeeks).toBe(expectedWeeks);
    });

    it("should convert 1209600 seconds to 2 weeks", () => {
      const seconds = new Second(1209600);
      const expectedWeeks = 2;
      const actualWeeks = seconds.toWeek();
      expect(actualWeeks).toBe(expectedWeeks);
    });
  });

  describe("toMonth", () => {
    it("should convert 2592000 seconds to 1 month", () => {
      const seconds = new Second(2592000);
      const expectedMonths = 1;
      const actualMonths = seconds.toMonth();
      expect(actualMonths).toBe(expectedMonths);
    });

    it("should convert 5184000 seconds to 2 months", () => {
      const seconds = new Second(5184000);
      const expectedMonths = 2;
      const actualMonths = seconds.toMonth();
      expect(actualMonths).toBe(expectedMonths);
    });
  });

  describe("toYear", () => {
    it("should convert 31536000 seconds to 1 year", () => {
      const seconds = new Second(31536000);
      const expectedYears = 1;
      const actualYears = seconds.toYear();
      expect(actualYears).toBe(expectedYears);
    });

    it("should convert 63072000 seconds to 2 years", () => {
      const seconds = new Second(63072000);
      const expectedYears = 2;
      const actualYears = seconds.toYear();
      expect(actualYears).toBe(expectedYears);
    });
  });

  describe("toDecade", () => {
    it("should convert 315360000 seconds to 1 decade", () => {
      const seconds = new Second(315360000);
      const expectedDecades = 1;
      const actualDecades = seconds.toDecade();
      expect(actualDecades).toBe(expectedDecades);
    });

    it("should convert 630720000 seconds to 2 decades", () => {
      const seconds = new Second(630720000);
      const expectedDecades = 2;
      const actualDecades = seconds.toDecade();
      expect(actualDecades).toBe(expectedDecades);
    });
  });

  describe("toCentury", () => {
    it("should convert 3153600000 seconds to 1 century", () => {
      const seconds = new Second(3153600000);
      const expectedCenturies = 1;
      const actualCenturies = seconds.toCentury();
      expect(actualCenturies).toBe(expectedCenturies);
    });

    it("should convert 6307200000 seconds to 2 centuries", () => {
      const seconds = new Second(6307200000);
      const expectedCenturies = 2;
      const actualCenturies = seconds.toCentury();
      expect(actualCenturies).toBe(expectedCenturies);
    });
  });
});
