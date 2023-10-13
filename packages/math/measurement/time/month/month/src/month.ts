import { MonthToMillisecond } from "@ilihub/month-to-millisecond";
import { MonthToSecond } from "@ilihub/month-to-second";
import { MonthToMinute } from "@ilihub/month-to-minute";
import { MonthToHour } from "@ilihub/month-to-hour";
import { MonthToDay } from "@ilihub/month-to-day";
import { MonthToWeek } from "@ilihub/month-to-week";
import { MonthToYear } from "@ilihub/month-to-year";
import { MonthToDecade } from "@ilihub/month-to-decade";
import { MonthToCentury } from "@ilihub/month-to-century";

/**
 * Represents a month in the Gregorian calendar.
 */
export class Month {
  /**
   * Creates a new Month instance.
   *
   * @param month - The month number (1-12).
   *
   * @example
   * ```typescript
   * const month = new Month(2);
   * ```
   */
  constructor(private readonly month: number) {}

  /**
   * Returns the number of milliseconds in this month.
   *
   * @returns The number of milliseconds.
   *
   * @example
   * ```typescript
   * const month = new Month(2);
   * const milliseconds = month.toMillisecond();
   * ```
   */
  public toMillisecond(): number {
    return MonthToMillisecond(this.month);
  }

  /**
   * Returns the number of seconds in this month.
   *
   * @returns The number of seconds.
   *
   * @example
   * ```typescript
   * const month = new Month(2);
   * const seconds = month.toSecond();
   * ```
   */
  public toSecond(): number {
    return MonthToSecond(this.month);
  }

  /**
   * Returns the number of minutes in this month.
   *
   * @returns The number of minutes.
   *
   * @example
   * ```typescript
   * const month = new Month(2);
   * const minutes = month.toMinute();
   * ```
   */
  public toMinute(): number {
    return MonthToMinute(this.month);
  }

  /**
   * Returns the number of hours in this month.
   *
   * @returns The number of hours.
   *
   * @example
   * ```typescript
   * const month = new Month(2);
   * const hours = month.toHour();
   * ```
   */
  public toHour(): number {
    return MonthToHour(this.month);
  }

  /**
   * Returns the number of days in this month.
   *
   * @returns The number of days.
   *
   * @example
   * ```typescript
   * const month = new Month(2);
   * const days = month.toDay();
   * ```
   */
  public toDay(): number {
    return MonthToDay(this.month);
  }

  /**
   * Returns the number of weeks in this month.
   *
   * @returns The number of weeks.
   *
   * @example
   * ```typescript
   * const month = new Month(2);
   * const weeks = month.toWeek();
   * ```
   */
  public toWeek(): number {
    return MonthToWeek(this.month);
  }

  /**
   * Returns the number of years in this month.
   *
   * @returns The number of years.
   *
   * @example
   * ```typescript
   * const month = new Month(2);
   * const years = month.toYear();
   * ```
   */
  public toYear(): number {
    return MonthToYear(this.month);
  }

  /**
   * Returns the number of decades in this month.
   *
   * @returns The number of decades.
   *
   * @example
   * ```typescript
   * const month = new Month(2);
   * const decades = month.toDecade();
   * ```
   */
  public toDecade(): number {
    return MonthToDecade(this.month);
  }

  /**
   * Returns the number of centuries in this month.
   *
   * @returns The number of centuries.
   *
   * @example
   * ```typescript
   * const month = new Month(2);
   * const centuries = month.toCentury();
   * ```
   */
  public toCentury(): number {
    return MonthToCentury(this.month);
  }
}
