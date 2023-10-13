import { Hour } from "./hour";

describe("Hour", () => {
  describe("toMillisecond", () => {
    it("should convert 1 hour to 3600000 milliseconds", () => {
      const hour = new Hour(1);
      const expectedMilliseconds = 3600000;
      const actualMilliseconds = hour.toMillisecond();
      expect(actualMilliseconds).toBe(expectedMilliseconds);
    });

    it("should convert 2 hours to 7200000 milliseconds", () => {
      const hour = new Hour(2);
      const expectedMilliseconds = 7200000;
      const actualMilliseconds = hour.toMillisecond();
      expect(actualMilliseconds).toBe(expectedMilliseconds);
    });
  });

  describe("toSecond", () => {
    it("should convert 1 hour to 3600 seconds", () => {
      const hour = new Hour(1);
      const expectedSeconds = 3600;
      const actualSeconds = hour.toSecond();
      expect(actualSeconds).toBe(expectedSeconds);
    });

    it("should convert 2 hours to 7200 seconds", () => {
      const hour = new Hour(2);
      const expectedSeconds = 7200;
      const actualSeconds = hour.toSecond();
      expect(actualSeconds).toBe(expectedSeconds);
    });
  });

  describe("toMinute", () => {
    it("should convert 1 hour to 60 minutes", () => {
      const hour = new Hour(1);
      const expectedMinutes = 60;
      const actualMinutes = hour.toMinute();
      expect(actualMinutes).toBe(expectedMinutes);
    });

    it("should convert 2 hours to 120 minutes", () => {
      const hour = new Hour(2);
      const expectedMinutes = 120;
      const actualMinutes = hour.toMinute();
      expect(actualMinutes).toBe(expectedMinutes);
    });
  });

  describe("toDay", () => {
    it("should convert 24 hours to 1 day", () => {
      const hour = new Hour(24);
      const expectedDays = 1;
      const actualDays = hour.toDay();
      expect(actualDays).toBe(expectedDays);
    });

    it("should convert 48 hours to 2 days", () => {
      const hour = new Hour(48);
      const expectedDays = 2;
      const actualDays = hour.toDay();
      expect(actualDays).toBe(expectedDays);
    });
  });

  describe("toWeek", () => {
    it("should convert 168 hours to 1 week", () => {
      const hour = new Hour(168);
      const expectedWeeks = 1;
      const actualWeeks = hour.toWeek();
      expect(actualWeeks).toBe(expectedWeeks);
    });

    it("should convert 336 hours to 2 weeks", () => {
      const hour = new Hour(336);
      const expectedWeeks = 2;
      const actualWeeks = hour.toWeek();
      expect(actualWeeks).toBe(expectedWeeks);
    });
  });

  describe("toMonth", () => {
    it("should convert 720 hours to 1 month", () => {
      const hour = new Hour(720);
      const expectedMonths = 1;
      const actualMonths = hour.toMonth();
      expect(actualMonths).toBe(expectedMonths);
    });

    it("should convert 1440 hours to 2 months", () => {
      const hour = new Hour(1440);
      const expectedMonths = 2;
      const actualMonths = hour.toMonth();
      expect(actualMonths).toBe(expectedMonths);
    });
  });

  describe("toYear", () => {
    it("should convert 8760 hours to 1 year", () => {
      const hour = new Hour(8760);
      const expectedYears = 1;
      const actualYears = hour.toYear();
      expect(actualYears).toBe(expectedYears);
    });

    it("should convert 17520 hours to 2 years", () => {
      const hour = new Hour(17520);
      const expectedYears = 2;
      const actualYears = hour.toYear();
      expect(actualYears).toBe(expectedYears);
    });
  });

  describe("toDecade", () => {
    it("should convert 87600 hours to 1 decade", () => {
      const hour = new Hour(87600);
      const expectedDecades = 1;
      const actualDecades = hour.toDecade();
      expect(actualDecades).toBe(expectedDecades);
    });

    it("should convert 175200 hours to 2 decades", () => {
      const hour = new Hour(175200);
      const expectedDecades = 2;
      const actualDecades = hour.toDecade();
      expect(actualDecades).toBe(expectedDecades);
    });
  });

  describe("toCentury", () => {
    it("should convert 876000 hours to 1 century", () => {
      const hour = new Hour(876000);
      const expectedCenturies = 1;
      const actualCenturies = hour.toCentury();
      expect(actualCenturies).toBe(expectedCenturies);
    });

    it("should convert 1752000 hours to 2 centuries", () => {
      const hour = new Hour(1752000);
      const expectedCenturies = 2;
      const actualCenturies = hour.toCentury();
      expect(actualCenturies).toBe(expectedCenturies);
    });
  });
});
