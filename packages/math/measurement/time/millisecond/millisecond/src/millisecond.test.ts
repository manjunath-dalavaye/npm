import { Millisecond } from "./millisecond";

describe("Millisecond", () => {
  describe("toSecond", () => {
    it("converts 1000 milliseconds to 1 second", () => {
      const milliseconds = new Millisecond(1000);
      expect(milliseconds.toSecond()).toBe(1);
    });

    it("converts 5000 milliseconds to 5 seconds", () => {
      const milliseconds = new Millisecond(5000);
      expect(milliseconds.toSecond()).toBe(5);
    });

    it("converts 0 milliseconds to 0 seconds", () => {
      const milliseconds = new Millisecond(0);
      expect(milliseconds.toSecond()).toBe(0);
    });

    it("converts negative milliseconds to negative seconds", () => {
      const milliseconds = new Millisecond(-1000);
      expect(milliseconds.toSecond()).toBe(-1);
    });
  });

  describe("toMinute", () => {
    it("converts 60000 milliseconds to 1 minute", () => {
      const milliseconds = new Millisecond(60000);
      expect(milliseconds.toMinute()).toBe(1);
    });

    it("converts 300000 milliseconds to 5 minutes", () => {
      const milliseconds = new Millisecond(300000);
      expect(milliseconds.toMinute()).toBe(5);
    });

    it("converts 0 milliseconds to 0 minutes", () => {
      const milliseconds = new Millisecond(0);
      expect(milliseconds.toMinute()).toBe(0);
    });

    it("converts negative milliseconds to negative minutes", () => {
      const milliseconds = new Millisecond(-60000);
      expect(milliseconds.toMinute()).toBe(-1);
    });
  });

  describe("toHour", () => {
    it("converts 3600000 milliseconds to 1 hour", () => {
      const milliseconds = new Millisecond(3600000);
      expect(milliseconds.toHour()).toBe(1);
    });

    it("converts 18000000 milliseconds to 5 hours", () => {
      const milliseconds = new Millisecond(18000000);
      expect(milliseconds.toHour()).toBe(5);
    });

    it("converts 0 milliseconds to 0 hours", () => {
      const milliseconds = new Millisecond(0);
      expect(milliseconds.toHour()).toBe(0);
    });

    it("converts negative milliseconds to negative hours", () => {
      const milliseconds = new Millisecond(-3600000);
      expect(milliseconds.toHour()).toBe(-1);
    });
  });

  describe("toDay", () => {
    it("converts 86400000 milliseconds to 1 day", () => {
      const milliseconds = new Millisecond(86400000);
      expect(milliseconds.toDay()).toBe(1);
    });

    it("converts 432000000 milliseconds to 5 days", () => {
      const milliseconds = new Millisecond(432000000);
      expect(milliseconds.toDay()).toBe(5);
    });

    it("converts 0 milliseconds to 0 days", () => {
      const milliseconds = new Millisecond(0);
      expect(milliseconds.toDay()).toBe(0);
    });

    it("converts negative milliseconds to negative days", () => {
      const milliseconds = new Millisecond(-86400000);
      expect(milliseconds.toDay()).toBe(-1);
    });
  });

  describe("toWeek", () => {
    it("converts 604800000 milliseconds to 1 week", () => {
      const milliseconds = new Millisecond(604800000);
      expect(milliseconds.toWeek()).toBe(1);
    });

    it("converts 3024000000 milliseconds to 5 weeks", () => {
      const milliseconds = new Millisecond(3024000000);
      expect(milliseconds.toWeek()).toBe(5);
    });

    it("converts 0 milliseconds to 0 weeks", () => {
      const milliseconds = new Millisecond(0);
      expect(milliseconds.toWeek()).toBe(0);
    });

    it("converts negative milliseconds to negative weeks", () => {
      const milliseconds = new Millisecond(-604800000);
      expect(milliseconds.toWeek()).toBe(-1);
    });
  });

  describe("toMonth", () => {
    it("converts 2592000000 milliseconds to 1 month", () => {
      const milliseconds = new Millisecond(2592000000);
      expect(milliseconds.toMonth()).toBe(1);
    });

    it("converts 12960000000 milliseconds to 5 months", () => {
      const milliseconds = new Millisecond(12960000000);
      expect(milliseconds.toMonth()).toBe(5);
    });

    it("converts 0 milliseconds to 0 months", () => {
      const milliseconds = new Millisecond(0);
      expect(milliseconds.toMonth()).toBe(0);
    });

    it("converts negative milliseconds to negative months", () => {
      const milliseconds = new Millisecond(-2592000000);
      expect(milliseconds.toMonth()).toBe(-1);
    });
  });

  describe("toYear", () => {
    it("converts 31536000000 milliseconds to 1 year", () => {
      const milliseconds = new Millisecond(31536000000);
      expect(milliseconds.toYear()).toBe(1);
    });

    it("converts 157680000000 milliseconds to 5 years", () => {
      const milliseconds = new Millisecond(157680000000);
      expect(milliseconds.toYear()).toBe(5);
    });

    it("converts 0 milliseconds to 0 years", () => {
      const milliseconds = new Millisecond(0);
      expect(milliseconds.toYear()).toBe(0);
    });

    it("converts negative milliseconds to negative years", () => {
      const milliseconds = new Millisecond(-31536000000);
      expect(milliseconds.toYear()).toBe(-1);
    });
  });

  describe("toDecade", () => {
    it("converts 315360000000 milliseconds to 1 decade", () => {
      const milliseconds = new Millisecond(315360000000);
      expect(milliseconds.toDecade()).toBe(1);
    });

    it("converts 630720000000 milliseconds to 2 decades", () => {
      const milliseconds = new Millisecond(630720000000);
      expect(milliseconds.toDecade()).toBe(2);
    });

    it("converts 0 milliseconds to 0 decades", () => {
      const milliseconds = new Millisecond(0);
      expect(milliseconds.toDecade()).toBe(0);
    });

    it("converts negative milliseconds to negative decades", () => {
      const milliseconds = new Millisecond(-315360000000);
      expect(milliseconds.toDecade()).toBe(-1);
    });
  });

  describe("toCentury", () => {
    it("converts 3153600000000 milliseconds to 1 century", () => {
      const milliseconds = new Millisecond(3153600000000);
      expect(milliseconds.toCentury()).toBe(1);
    });

    it("converts 6307200000000 milliseconds to 2 centuries", () => {
      const milliseconds = new Millisecond(6307200000000);
      expect(milliseconds.toCentury()).toBe(2);
    });

    it("converts 0 milliseconds to 0 centuries", () => {
      const milliseconds = new Millisecond(0);
      expect(milliseconds.toCentury()).toBe(0);
    });

    it("converts negative milliseconds to negative centuries", () => {
      const milliseconds = new Millisecond(-3153600000000);
      expect(milliseconds.toCentury()).toBe(-1);
    });
  });
});
