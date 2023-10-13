import { SecondToMillisecond } from "@ilihub/second-to-millisecond";
import { SecondToMinute } from "@ilihub/second-to-minute";
import { SecondToHour } from "@ilihub/second-to-hour";
import { SecondToDay } from "@ilihub/second-to-day";
import { SecondToWeek } from "@ilihub/second-to-week";
import { SecondToMonth } from "@ilihub/second-to-month";
import { SecondToYear } from "@ilihub/second-to-year";
import { SecondToDecade } from "@ilihub/second-to-decade";
import { SecondToCentury } from "@ilihub/second-to-century";

/**
 * Represents a duration of time in seconds.
 */
export class Second {
  /**
   * Creates a new instance of the Second class.
   *
   * @param second - The number of seconds in the duration.
   *
   * @example
   * ```typescript
   * const duration = new Second(30);
   * ```
   */
  constructor(private readonly second: number) {}

  /**
   * Converts the duration to milliseconds.
   *
   * @returns The duration in milliseconds.
   *
   * @example
   * ```typescript
   * const duration = new Second(30);
   * const milliseconds = duration.toMillisecond();
   * ```
   */
  public toMillisecond(): number {
    return SecondToMillisecond(this.second);
  }

  /**
   * Converts the duration to minutes.
   *
   * @returns The duration in minutes.
   *
   * @example
   * ```typescript
   * const duration = new Second(120);
   * const minutes = duration.toMinute();
   * ```
   */
  public toMinute(): number {
    return SecondToMinute(this.second);
  }

  /**
   * Converts the duration to hours.
   *
   * @returns The duration in hours.
   *
   * @example
   * ```typescript
   * const duration = new Second(3600);
   * const hours = duration.toHour();
   * ```
   */
  public toHour(): number {
    return SecondToHour(this.second);
  }

  /**
   * Converts the duration to days.
   *
   * @returns The duration in days.
   *
   * @example
   * ```typescript
   * const duration = new Second(86400);
   * const days = duration.toDay();
   * ```
   */
  public toDay(): number {
    return SecondToDay(this.second);
  }

  /**
   * Converts the duration to weeks.
   *
   * @returns The duration in weeks.
   *
   * @example
   * ```typescript
   * const duration = new Second(604800);
   * const weeks = duration.toWeek();
   * ```
   */
  public toWeek(): number {
    return SecondToWeek(this.second);
  }

  /**
   * Converts the duration to months.
   *
   * @returns The duration in months.
   *
   * @example
   * ```typescript
   * const duration = new Second(2592000);
   * const months = duration.toMonth();
   * ```
   */
  public toMonth(): number {
    return SecondToMonth(this.second);
  }

  /**
   * Converts the duration to years.
   *
   * @returns The duration in years.
   *
   * @example
   * ```typescript
   * const duration = new Second(31536000);
   * const years = duration.toYear();
   * ```
   */
  public toYear(): number {
    return SecondToYear(this.second);
  }

  /**
   * Converts the duration to decades.
   *
   * @returns The duration in decades.
   *
   * @example
   * ```typescript
   * const duration = new Second(315360000);
   * const decades = duration.toDecade();
   * ```
   */
  public toDecade(): number {
    return SecondToDecade(this.second);
  }

  /**
   * Converts the duration to centuries.
   *
   * @returns The duration in centuries.
   *
   * @example
   * ```typescript
   * const duration = new Second(3153600000);
   * const centuries = duration.toCentury();
   * ```
   */
  public toCentury(): number {
    return SecondToCentury(this.second);
  }
}
