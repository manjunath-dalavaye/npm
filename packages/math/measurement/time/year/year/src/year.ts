import { YearToMillisecond } from "@ilihub/year-to-millisecond";
import { YearToSecond } from "@ilihub/year-to-second";
import { YearToMinute } from "@ilihub/year-to-minute";
import { YearToHour } from "@ilihub/year-to-hour";
import { YearToDay } from "@ilihub/year-to-day";
import { YearToWeek } from "@ilihub/year-to-week";
import { YearToMonth } from "@ilihub/year-to-month";
import { YearToDecade } from "@ilihub/year-to-decade";
import { YearToCentury } from "@ilihub/year-to-century";

/**
 * Represents a year and provides methods to convert it to other time measurements.
 */
export class Year {
  /**
   * Creates a new instance of Year.
   *
   * @param year - The year value.
   *
   * @example
   * ```typescript
   * const year = new Year(1);
   * ```
   */
  constructor(private readonly year: number) {}

  /**
   * Converts the year to milliseconds.
   *
   * @returns The number of milliseconds in the year.
   *
   * @example
   * ```typescript
   * const year = new Year(1);
   * const milliseconds = year.toMillisecond();
   * ```
   */
  public toMillisecond(): number {
    return YearToMillisecond(this.year);
  }

  /**
   * Converts the year to seconds.
   *
   * @returns The number of seconds in the year.
   *
   * @example
   * ```typescript
   * const year = new Year(1);
   * const seconds = year.toSecond();
   * ```
   */
  public toSecond(): number {
    return YearToSecond(this.year);
  }

  /**
   * Converts the year to minutes.
   *
   * @returns The number of minutes in the year.
   *
   * @example
   * ```typescript
   * const year = new Year(1);
   * const minutes = year.toMinute();
   * ```
   */
  public toMinute(): number {
    return YearToMinute(this.year);
  }

  /**
   * Converts the year to hours.
   *
   * @returns The number of hours in the year.
   *
   * @example
   * ```typescript
   * const year = new Year(1);
   * const hours = year.toHour();
   * ```
   */
  public toHour(): number {
    return YearToHour(this.year);
  }

  /**
   * Converts the year to days.
   *
   * @returns The number of days in the year.
   *
   * @example
   * ```typescript
   * const year = new Year(1);
   * const days = year.toDay();
   * ```
   */
  public toDay(): number {
    return YearToDay(this.year);
  }

  /**
   * Converts the year to weeks.
   *
   * @returns The number of weeks in the year.
   *
   * @example
   * ```typescript
   * const year = new Year(1);
   * const weeks = year.toWeek();
   * ```
   */
  public toWeek(): number {
    return YearToWeek(this.year);
  }

  /**
   * Converts the year to months.
   *
   * @returns The number of months in the year.
   *
   * @example
   * ```typescript
   * const year = new Year(1);
   * const months = year.toMonth();
   * ```
   */
  public toMonth(): number {
    return YearToMonth(this.year);
  }

  /**
   * Converts the year to decades.
   *
   * @returns The number of decades in the year.
   *
   * @example
   * ```typescript
   * const year = new Year(1);
   * const decades = year.toDecade();
   * ```
   */
  public toDecade(): number {
    return YearToDecade(this.year);
  }

  /**
   * Converts the year to centuries.
   *
   * @returns The number of centuries in the year.
   *
   * @example
   * ```typescript
   * const year = new Year(1);
   * const centuries = year.toCentury();
   * ```
   */
  public toCentury(): number {
    return YearToCentury(this.year);
  }
}
