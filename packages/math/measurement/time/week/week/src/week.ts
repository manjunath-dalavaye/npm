import { WeekToMillisecond } from "@ilihub/week-to-millisecond";
import { WeekToSecond } from "@ilihub/week-to-second";
import { WeekToMinute } from "@ilihub/week-to-minute";
import { WeekToHour } from "@ilihub/week-to-hour";
import { WeekToDay } from "@ilihub/week-to-day";
import { WeekToMonth } from "@ilihub/week-to-month";
import { WeekToYear } from "@ilihub/week-to-year";
import { WeekToDecade } from "@ilihub/week-to-decade";
import { WeekToCentury } from "@ilihub/week-to-century";

/**
 * Represents a week measurement.
 */
export class Week {
  /**
   * Creates a new Week instance.
   *
   * @param week - The number of weeks.
   *
   * @example
   * ```typescript
   * const week = new Week(2);
   * ```
   */
  constructor(private readonly week: number) {}

  /**
   * Converts the week measurement to milliseconds.
   *
   * @returns The number of milliseconds.
   *
   * @example
   * ```typescript
   * const week = new Week(2);
   * const milliseconds = week.toMillisecond();
   * ```
   */
  public toMillisecond(): number {
    return WeekToMillisecond(this.week);
  }

  /**
   * Converts the week measurement to seconds.
   *
   * @returns The number of seconds.
   *
   * @example
   * ```typescript
   * const week = new Week(2);
   * const seconds = week.toSecond();
   * ```
   */
  public toSecond(): number {
    return WeekToSecond(this.week);
  }

  /**
   * Converts the week measurement to minutes.
   *
   * @returns The number of minutes.
   *
   * @example
   * ```typescript
   * const week = new Week(2);
   * const minutes = week.toMinute();
   * ```
   */
  public toMinute(): number {
    return WeekToMinute(this.week);
  }

  /**
   * Converts the week measurement to hours.
   *
   * @returns The number of hours.
   *
   * @example
   * ```typescript
   * const week = new Week(2);
   * const hours = week.toHour();
   * ```
   */
  public toHour(): number {
    return WeekToHour(this.week);
  }

  /**
   * Converts the week measurement to days.
   *
   * @returns The number of days.
   *
   * @example
   * ```typescript
   * const week = new Week(2);
   * const days = week.toDay();
   * ```
   */
  public toDay(): number {
    return WeekToDay(this.week);
  }

  /**
   * Converts the week measurement to months.
   *
   * @returns The number of months.
   *
   * @example
   * ```typescript
   * const week = new Week(2);
   * const months = week.toMonth();
   * ```
   */
  public toMonth(): number {
    return WeekToMonth(this.week);
  }

  /**
   * Converts the week measurement to years.
   *
   * @returns The number of years.
   *
   * @example
   * ```typescript
   * const week = new Week(2);
   * const years = week.toYear();
   * ```
   */
  public toYear(): number {
    return WeekToYear(this.week);
  }

  /**
   * Converts the week measurement to decades.
   *
   * @returns The number of decades.
   *
   * @example
   * ```typescript
   * const week = new Week(2);
   * const decades = week.toDecade();
   * ```
   */
  public toDecade(): number {
    return WeekToDecade(this.week);
  }

  /**
   * Converts the week measurement to centuries.
   *
   * @returns The number of centuries.
   *
   * @example
   * ```typescript
   * const week = new Week(2);
   * const centuries = week.toCentury();
   * ```
   */
  public toCentury(): number {
    return WeekToCentury(this.week);
  }
}
