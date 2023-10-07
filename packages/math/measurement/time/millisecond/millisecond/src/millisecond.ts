import { MillisecondToSecond } from "@ilihub/millisecond-to-second";
import { MillisecondToMinute } from "@ilihub/millisecond-to-minute";
import { MillisecondToHour } from "@ilihub/millisecond-to-hour";
import { MillisecondToDay } from "@ilihub/millisecond-to-day";
import { MillisecondToWeek } from "@ilihub/millisecond-to-week";
import { MillisecondToMonth } from "@ilihub/millisecond-to-month";
import { MillisecondToYear } from "@ilihub/millisecond-to-year";
import { MillisecondToDecade } from "@ilihub/millisecond-to-decade";
import { MillisecondToCentury } from "@ilihub/millisecond-to-century";

/**
 * Represents a duration of time in milliseconds.
 */
export class Millisecond {
  /**
   * Creates a new instance of Millisecond.
   *
   * @param millisecond - The duration of time in milliseconds.
   *
   * @example
   * ```typescript
   * const ms = new Millisecond(500);
   * ```
   */
  constructor(private readonly millisecond: number) {}

  /**
   * Converts the duration to seconds.
   *
   * @returns The duration in seconds.
   *
   * @example
   * ```typescript
   * const ms = new Millisecond(500);
   * const seconds = ms.toSecond(); // 0.5
   * ```
   */
  public toSecond(): number {
    return MillisecondToSecond(this.millisecond);
  }

  /**
   * Converts the duration to minutes.
   *
   * @returns The duration in minutes.
   *
   * @example
   * ```typescript
   * const ms = new Millisecond(60000);
   * const minutes = ms.toMinute(); // 1
   * ```
   */
  public toMinute(): number {
    return MillisecondToMinute(this.millisecond);
  }

  /**
   * Converts the duration to hours.
   *
   * @returns The duration in hours.
   *
   * @example
   * ```typescript
   * const ms = new Millisecond(3600000);
   * const hours = ms.toHour(); // 1
   * ```
   */
  public toHour(): number {
    return MillisecondToHour(this.millisecond);
  }

  /**
   * Converts the duration to days.
   *
   * @returns The duration in days.
   *
   * @example
   * ```typescript
   * const ms = new Millisecond(86400000);
   * const days = ms.toDay(); // 1
   * ```
   */
  public toDay(): number {
    return MillisecondToDay(this.millisecond);
  }

  /**
   * Converts the duration to weeks.
   *
   * @returns The duration in weeks.
   *
   * @example
   * ```typescript
   * const ms = new Millisecond(604800000);
   * const weeks = ms.toWeek(); // 1
   * ```
   */
  public toWeek(): number {
    return MillisecondToWeek(this.millisecond);
  }

  /**
   * Converts the duration to months.
   *
   * @returns The duration in months.
   *
   * @example
   * ```typescript
   * const ms = new Millisecond(2628000000);
   * const months = ms.toMonth(); // 1
   * ```
   */
  public toMonth(): number {
    return MillisecondToMonth(this.millisecond);
  }

  /**
   * Converts the duration to years.
   *
   * @returns The duration in years.
   *
   * @example
   * ```typescript
   * const ms = new Millisecond(31536000000);
   * const years = ms.toYear(); // 1
   * ```
   */
  public toYear(): number {
    return MillisecondToYear(this.millisecond);
  }

  /**
   * Converts the duration to decades.
   *
   * @returns The duration in decades.
   *
   * @example
   * ```typescript
   * const ms = new Millisecond(315360000000);
   * const decades = ms.toDecade(); // 1
   * ```
   */
  public toDecade(): number {
    return MillisecondToDecade(this.millisecond);
  }

  /**
   * Converts the duration to centuries.
   *
   * @returns The duration in centuries.
   *
   * @example
   * ```typescript
   * const ms = new Millisecond(3153600000000);
   * const centuries = ms.toCentury(); // 1
   * ```
   */
  public toCentury(): number {
    return MillisecondToCentury(this.millisecond);
  }
}
