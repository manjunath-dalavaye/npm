import { Year } from "./year";

describe("Year", () => {
  describe("toMillisecond", () => {
    it("should convert 1 year to 31,536,000,000 milliseconds", () => {
      const year = new Year(1);
      const expectedMilliseconds = 31536000000;
      const actualMilliseconds = year.toMillisecond();
      expect(actualMilliseconds).toBe(expectedMilliseconds);
    });

    it("should convert 2 years to 63,072,000,000 milliseconds", () => {
      const year = new Year(2);
      const expectedMilliseconds = 63072000000;
      const actualMilliseconds = year.toMillisecond();
      expect(actualMilliseconds).toBe(expectedMilliseconds);
    });
  });

  describe("toSecond", () => {
    it("should convert 1 year to 31,536,000 seconds", () => {
      const year = new Year(1);
      const expectedSeconds = 31536000;
      const actualSeconds = year.toSecond();
      expect(actualSeconds).toBe(expectedSeconds);
    });

    it("should convert 2 years to 63,072,000 seconds", () => {
      const year = new Year(2);
      const expectedSeconds = 63072000;
      const actualSeconds = year.toSecond();
      expect(actualSeconds).toBe(expectedSeconds);
    });
  });

  describe("toMinute", () => {
    it("should convert 1 year to 525,600 minutes", () => {
      const year = new Year(1);
      const expectedMinutes = 525600;
      const actualMinutes = year.toMinute();
      expect(actualMinutes).toBe(expectedMinutes);
    });

    it("should convert 2 years to 1,051,200 minutes", () => {
      const year = new Year(2);
      const expectedMinutes = 1051200;
      const actualMinutes = year.toMinute();
      expect(actualMinutes).toBe(expectedMinutes);
    });
  });

  describe("toHour", () => {
    it("should convert 1 year to 8,760 hours", () => {
      const year = new Year(1);
      const expectedHours = 8760;
      const actualHours = year.toHour();
      expect(actualHours).toBe(expectedHours);
    });

    it("should convert 2 years to 17,520 hours", () => {
      const year = new Year(2);
      const expectedHours = 17520;
      const actualHours = year.toHour();
      expect(actualHours).toBe(expectedHours);
    });
  });

  describe("toDay", () => {
    it("should convert 1 year to 365 days", () => {
      const year = new Year(1);
      const expectedDays = 365;
      const actualDays = year.toDay();
      expect(actualDays).toBe(expectedDays);
    });

    it("should convert 2 years to 730 days", () => {
      const year = new Year(2);
      const expectedDays = 730;
      const actualDays = year.toDay();
      expect(actualDays).toBe(expectedDays);
    });
  });

  describe("toWeek", () => {
    it("should convert 1 year to 52 weeks", () => {
      const year = new Year(1);
      const expectedWeeks = 52;
      const actualWeeks = year.toWeek();
      expect(actualWeeks).toBe(expectedWeeks);
    });

    it("should convert 2 years to 104 weeks", () => {
      const year = new Year(2);
      const expectedWeeks = 104;
      const actualWeeks = year.toWeek();
      expect(actualWeeks).toBe(expectedWeeks);
    });
  });

  describe("toMonth", () => {
    it("should convert 1 year to 12 months", () => {
      const year = new Year(1);
      const expectedMonths = 12;
      const actualMonths = year.toMonth();
      expect(actualMonths).toBe(expectedMonths);
    });

    it("should convert 2 years to 24 months", () => {
      const year = new Year(2);
      const expectedMonths = 24;
      const actualMonths = year.toMonth();
      expect(actualMonths).toBe(expectedMonths);
    });
  });

  describe("toDecade", () => {
    it("should convert 10 years to 1 decade", () => {
      const year = new Year(10);
      const expectedDecades = 1;
      const actualDecades = year.toDecade();
      expect(actualDecades).toBe(expectedDecades);
    });

    it("should convert 20 years to 2 decades", () => {
      const year = new Year(20);
      const expectedDecades = 2;
      const actualDecades = year.toDecade();
      expect(actualDecades).toBe(expectedDecades);
    });
  });

  describe("toCentury", () => {
    it("should convert 100 years to 1 century", () => {
      const year = new Year(100);
      const expectedCenturies = 1;
      const actualCenturies = year.toCentury();
      expect(actualCenturies).toBe(expectedCenturies);
    });

    it("should convert 200 years to 2 centuries", () => {
      const year = new Year(200);
      const expectedCenturies = 2;
      const actualCenturies = year.toCentury();
      expect(actualCenturies).toBe(expectedCenturies);
    });
  });
});
