import { HourToMillisecond } from "@ilihub/hour-to-millisecond";
import { HourToSecond } from "@ilihub/hour-to-second";
import { HourToMinute } from "@ilihub/hour-to-minute";
import { HourToDay } from "@ilihub/hour-to-day";
import { HourToWeek } from "@ilihub/hour-to-week";
import { HourToMonth } from "@ilihub/hour-to-month";
import { HourToYear } from "@ilihub/hour-to-year";
import { HourToDecade } from "@ilihub/hour-to-decade";
import { HourToCentury } from "@ilihub/hour-to-century";

/**
 * Represents a measurement of time in hours.
 */
export class Hour {
  /**
   * Creates a new Hour object.
   *
   * @param hour - The number of hours to represent.
   *
   * @example
   * ```typescript
   * const hour = new Hour(1);
   * ```
   */
  constructor(private readonly hour: number) {}

  /**
   * Converts the hour measurement to milliseconds.
   *
   * @returns The number of milliseconds in the hour measurement.
   *
   * @example
   * ```typescript
   * const hour = new Hour(1);
   * const milliseconds = hour.toMillisecond();
   * ```
   */
  public toMillisecond(): number {
    return HourToMillisecond(this.hour);
  }

  /**
   * Converts the hour measurement to seconds.
   *
   * @returns The number of seconds in the hour measurement.
   *
   * @example
   * ```typescript
   * const hour = new Hour(1);
   * const seconds = hour.toSecond();
   * ```
   */
  public toSecond(): number {
    return HourToSecond(this.hour);
  }

  /**
   * Converts the hour measurement to minutes.
   *
   * @returns The number of minutes in the hour measurement.
   *
   * @example
   * ```typescript
   * const hour = new Hour(1);
   * const minutes = hour.toMinute();
   * ```
   */
  public toMinute(): number {
    return HourToMinute(this.hour);
  }

  /**
   * Converts the hour measurement to days.
   *
   * @returns The number of days in the hour measurement.
   *
   * @example
   * ```typescript
   * const hour = new Hour(24);
   * const days = hour.toDay();
   * ```
   */
  public toDay(): number {
    return HourToDay(this.hour);
  }

  /**
   * Converts the hour measurement to weeks.
   *
   * @returns The number of weeks in the hour measurement.
   *
   * @example
   * ```typescript
   * const hour = new Hour(168);
   * const weeks = hour.toWeek();
   * ```
   */
  public toWeek(): number {
    return HourToWeek(this.hour);
  }

  /**
   * Converts the hour measurement to months.
   *
   * @returns The number of months in the hour measurement.
   *
   * @example
   * ```typescript
   * const hour = new Hour(730);
   * const months = hour.toMonth();
   * ```
   */
  public toMonth(): number {
    return HourToMonth(this.hour);
  }

  /**
   * Converts the hour measurement to years.
   *
   * @returns The number of years in the hour measurement.
   *
   * @example
   * ```typescript
   * const hour = new Hour(8760);
   * const years = hour.toYear();
   * ```
   */
  public toYear(): number {
    return HourToYear(this.hour);
  }

  /**
   * Converts the hour measurement to decades.
   *
   * @returns The number of decades in the hour measurement.
   *
   * @example
   * ```typescript
   * const hour = new Hour(87600);
   * const decades = hour.toDecade();
   * ```
   */
  public toDecade(): number {
    return HourToDecade(this.hour);
  }

  /**
   * Converts the hour measurement to centuries.
   *
   * @returns The number of centuries in the hour measurement.
   *
   * @example
   * ```typescript
   * const hour = new Hour(876000);
   * const centuries = hour.toCentury();
   * ```
   */
  public toCentury(): number {
    return HourToCentury(this.hour);
  }
}
