import { Month } from "./month";

describe("Month", () => {
  describe("toMillisecond", () => {
    it("should convert 1 month to 2592000000 milliseconds", () => {
      const month = new Month(1);
      const expectedMilliseconds = 2592000000;
      const actualMilliseconds = month.toMillisecond();
      expect(actualMilliseconds).toBe(expectedMilliseconds);
    });

    it("should convert 2 months to 5184000000 milliseconds", () => {
      const month = new Month(2);
      const expectedMilliseconds = 5184000000;
      const actualMilliseconds = month.toMillisecond();
      expect(actualMilliseconds).toBe(expectedMilliseconds);
    });
  });

  describe("toSecond", () => {
    it("should convert 1 month to 2592000 seconds", () => {
      const month = new Month(1);
      const expectedSeconds = 2592000;
      const actualSeconds = month.toSecond();
      expect(actualSeconds).toBe(expectedSeconds);
    });

    it("should convert 2 months to 5184000 seconds", () => {
      const month = new Month(2);
      const expectedSeconds = 5184000;
      const actualSeconds = month.toSecond();
      expect(actualSeconds).toBe(expectedSeconds);
    });
  });

  describe("toMinute", () => {
    it("should convert 1 month to 43200 minutes", () => {
      const month = new Month(1);
      const expectedMinutes = 43200;
      const actualMinutes = month.toMinute();
      expect(actualMinutes).toBe(expectedMinutes);
    });

    it("should convert 2 months to 86400 minutes", () => {
      const month = new Month(2);
      const expectedMinutes = 86400;
      const actualMinutes = month.toMinute();
      expect(actualMinutes).toBe(expectedMinutes);
    });
  });

  describe("toHour", () => {
    it("should convert 1 month to 720 hours", () => {
      const month = new Month(1);
      const expectedHours = 720;
      const actualHours = month.toHour();
      expect(actualHours).toBe(expectedHours);
    });

    it("should convert 2 months to 1440 hours", () => {
      const month = new Month(2);
      const expectedHours = 1440;
      const actualHours = month.toHour();
      expect(actualHours).toBe(expectedHours);
    });
  });

  describe("toDay", () => {
    it("should convert 1 month to 30 days", () => {
      const month = new Month(1);
      const expectedDays = 30;
      const actualDays = month.toDay();
      expect(actualDays).toBeCloseTo(expectedDays);
    });

    it("should convert 2 months to 60 days", () => {
      const month = new Month(2);
      const expectedDays = 60;
      const actualDays = month.toDay();
      expect(actualDays).toBeCloseTo(expectedDays);
    });
  });

  describe("toWeek", () => {
    it("should convert 1 month to 4 weeks", () => {
      const month = new Month(1);
      const expectedWeeks = 4;
      const actualWeeks = month.toWeek();
      expect(actualWeeks).toBeCloseTo(expectedWeeks);
    });

    it("should convert 2 months to 8 weeks", () => {
      const month = new Month(2);
      const expectedWeeks = 8;
      const actualWeeks = month.toWeek();
      expect(actualWeeks).toBeCloseTo(expectedWeeks);
    });
  });

  describe("toYear", () => {
    it("should convert 12 months to 1 year", () => {
      const month = new Month(12);
      const expectedYears = 1;
      const actualYears = month.toYear();
      expect(actualYears).toBe(expectedYears);
    });

    it("should convert 24 months to 2 years", () => {
      const month = new Month(24);
      const expectedYears = 2;
      const actualYears = month.toYear();
      expect(actualYears).toBe(expectedYears);
    });
  });

  describe("toDecade", () => {
    it("should convert 120 months to 1 decade", () => {
      const month = new Month(120);
      const expectedDecades = 1;
      const actualDecades = month.toDecade();
      expect(actualDecades).toBe(expectedDecades);
    });

    it("should convert 240 months to 2 decades", () => {
      const month = new Month(240);
      const expectedDecades = 2;
      const actualDecades = month.toDecade();
      expect(actualDecades).toBe(expectedDecades);
    });
  });

  describe("toCentury", () => {
    it("should convert 1200 months to 1 century", () => {
      const month = new Month(1200);
      const expectedCenturies = 1;
      const actualCenturies = month.toCentury();
      expect(actualCenturies).toBe(expectedCenturies);
    });

    it("should convert 2400 months to 2 centuries", () => {
      const month = new Month(2400);
      const expectedCenturies = 2;
      const actualCenturies = month.toCentury();
      expect(actualCenturies).toBe(expectedCenturies);
    });
  });
});
