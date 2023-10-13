import { Minute } from "./minute";

describe("Minute", () => {
  describe("toMillisecond", () => {
    it("should convert 1 minute to 60000 milliseconds", () => {
      const minute = new Minute(1);
      const expectedMilliseconds = 60000;
      const actualMilliseconds = minute.toMillisecond();
      expect(actualMilliseconds).toBe(expectedMilliseconds);
    });

    it("should convert 2 minutes to 120000 milliseconds", () => {
      const minute = new Minute(2);
      const expectedMilliseconds = 120000;
      const actualMilliseconds = minute.toMillisecond();
      expect(actualMilliseconds).toBe(expectedMilliseconds);
    });
  });

  describe("toSecond", () => {
    it("should convert 1 minute to 60 seconds", () => {
      const minute = new Minute(1);
      const expectedSeconds = 60;
      const actualSeconds = minute.toSecond();
      expect(actualSeconds).toBe(expectedSeconds);
    });

    it("should convert 2 minutes to 120 seconds", () => {
      const minute = new Minute(2);
      const expectedSeconds = 120;
      const actualSeconds = minute.toSecond();
      expect(actualSeconds).toBe(expectedSeconds);
    });
  });

  describe("toHour", () => {
    it("should convert 1 minute to 0.0166667 hours", () => {
      const minute = new Minute(1);
      const expectedHours = 0.0166667;
      const actualHours = minute.toHour();
      expect(actualHours).toBeCloseTo(expectedHours);
    });

    it("should convert 2 minutes to 0.0333333 hours", () => {
      const minute = new Minute(2);
      const expectedHours = 0.0333333;
      const actualHours = minute.toHour();
      expect(actualHours).toBeCloseTo(expectedHours);
    });
  });

  describe("toDay", () => {
    it("should convert 1 minute to 0.0006944 days", () => {
      const minute = new Minute(1);
      const expectedDays = 0.0006944;
      const actualDays = minute.toDay();
      expect(actualDays).toBeCloseTo(expectedDays);
    });

    it("should convert 2 minutes to 0.0013889 days", () => {
      const minute = new Minute(2);
      const expectedDays = 0.0013889;
      const actualDays = minute.toDay();
      expect(actualDays).toBeCloseTo(expectedDays);
    });
  });

  describe("toWeek", () => {
    it("should convert 1 minute to 0.0000992 weeks", () => {
      const minute = new Minute(1);
      const expectedWeeks = 0.0000992;
      const actualWeeks = minute.toWeek();
      expect(actualWeeks).toBeCloseTo(expectedWeeks);
    });

    it("should convert 2 minutes to 0.0001984 weeks", () => {
      const minute = new Minute(2);
      const expectedWeeks = 0.0001984;
      const actualWeeks = minute.toWeek();
      expect(actualWeeks).toBeCloseTo(expectedWeeks);
    });
  });

  describe("toMonth", () => {
    it("should convert 1 minute to 0.00022998 months", () => {
      const minute = new Minute(1);
      const expectedMonths = 0.00022998;
      const actualMonths = minute.toMonth();
      expect(actualMonths).toBeCloseTo(expectedMonths);
    });

    it("should convert 2 minutes to 0.00045996 months", () => {
      const minute = new Minute(2);
      const expectedMonths = 0.00045996;
      const actualMonths = minute.toMonth();
      expect(actualMonths).toBeCloseTo(expectedMonths);
    });
  });

  describe("toYear", () => {
    it("should convert 1 minute to 0.00001917 years", () => {
      const minute = new Minute(1);
      const expectedYears = 0.00001917;
      const actualYears = minute.toYear();
      expect(actualYears).toBeCloseTo(expectedYears);
    });

    it("should convert 2 minutes to 0.00003835 years", () => {
      const minute = new Minute(2);
      const expectedYears = 0.00003835;
      const actualYears = minute.toYear();
      expect(actualYears).toBeCloseTo(expectedYears);
    });
  });

  describe("toDecade", () => {
    it("should convert 1 minute to 0.000001917 decades", () => {
      const minute = new Minute(1);
      const expectedDecades = 0.000001917;
      const actualDecades = minute.toDecade();
      expect(actualDecades).toBeCloseTo(expectedDecades);
    });

    it("should convert 2 minutes to 0.000003835 decades", () => {
      const minute = new Minute(2);
      const expectedDecades = 0.000003835;
      const actualDecades = minute.toDecade();
      expect(actualDecades).toBeCloseTo(expectedDecades);
    });
  });

  describe("toCentury", () => {
    it("should convert 1 minute to 0.0000001917 centuries", () => {
      const minute = new Minute(1);
      const expectedCenturies = 0.0000001917;
      const actualCenturies = minute.toCentury();
      expect(actualCenturies).toBeCloseTo(expectedCenturies);
    });

    it("should convert 2 minutes to 0.0000003835 centuries", () => {
      const minute = new Minute(2);
      const expectedCenturies = 0.0000003835;
      const actualCenturies = minute.toCentury();
      expect(actualCenturies).toBeCloseTo(expectedCenturies);
    });
  });
});
