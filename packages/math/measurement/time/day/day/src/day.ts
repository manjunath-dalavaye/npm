import { DayToMillisecond } from "@ilihub/day-to-millisecond";
import { DayToSecond } from "@ilihub/day-to-second";
import { DayToMinute } from "@ilihub/day-to-minute";
import { DayToHour } from "@ilihub/day-to-hour";
import { DayToWeek } from "@ilihub/day-to-week";
import { DayToMonth } from "@ilihub/day-to-month";
import { DayToYear } from "@ilihub/day-to-year";
import { DayToDecade } from "@ilihub/day-to-decade";
import { DayToCentury } from "@ilihub/day-to-century";

/**
 * Represents a day measurement.
 */
export class Day {
  /**
   * Creates a new instance of Day.
   *
   * @param day - The number of days.
   *
   * @example
   * ```typescript
   * const day = new Day(1);
   * ```
   */
  constructor(private readonly day: number) {}

  /**
   * Converts the day measurement to milliseconds.
   *
   * @returns The number of milliseconds.
   *
   * @example
   * ```typescript
   * const day = new Day(1);
   * const milliseconds = day.toMillisecond();
   * ```
   */
  public toMillisecond(): number {
    return DayToMillisecond(this.day);
  }

  /**
   * Converts the day measurement to seconds.
   *
   * @returns The number of seconds.
   *
   * @example
   * ```typescript
   * const day = new Day(1);
   * const seconds = day.toSecond();
   * ```
   */
  public toSecond(): number {
    return DayToSecond(this.day);
  }

  /**
   * Converts the day measurement to minutes.
   *
   * @returns The number of minutes.
   *
   * @example
   * ```typescript
   * const day = new Day(1);
   * const minutes = day.toMinute();
   * ```
   */
  public toMinute(): number {
    return DayToMinute(this.day);
  }

  /**
   * Converts the day measurement to hours.
   *
   * @returns The number of hours.
   *
   * @example
   * ```typescript
   * const day = new Day(1);
   * const hours = day.toHour();
   * ```
   */
  public toHour(): number {
    return DayToHour(this.day);
  }

  /**
   * Converts the day measurement to weeks.
   *
   * @returns The number of weeks.
   *
   * @example
   * ```typescript
   * const day = new Day(7);
   * const weeks = day.toWeek();
   * ```
   */
  public toWeek(): number {
    return DayToWeek(this.day);
  }

  /**
   * Converts the day measurement to months.
   *
   * @returns The number of months.
   *
   * @example
   * ```typescript
   * const day = new Day(30);
   * const months = day.toMonth();
   * ```
   */
  public toMonth(): number {
    return DayToMonth(this.day);
  }

  /**
   * Converts the day measurement to years.
   *
   * @returns The number of years.
   *
   * @example
   * ```typescript
   * const day = new Day(365);
   * const years = day.toYear();
   * ```
   */
  public toYear(): number {
    return DayToYear(this.day);
  }

  /**
   * Converts the day measurement to decades.
   *
   * @returns The number of decades.
   *
   * @example
   * ```typescript
   * const day = new Day(3650);
   * const decades = day.toDecade();
   * ```
   */
  public toDecade(): number {
    return DayToDecade(this.day);
  }

  /**
   * Converts the day measurement to centuries.
   *
   * @returns The number of centuries.
   *
   * @example
   * ```typescript
   * const day = new Day(36500);
   * const centuries = day.toCentury();
   * ```
   */
  public toCentury(): number {
    return DayToCentury(this.day);
  }
}
