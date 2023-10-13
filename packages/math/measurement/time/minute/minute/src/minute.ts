import { MinuteToMillisecond } from "@ilihub/minute-to-millisecond";
import { MinuteToSecond } from "@ilihub/minute-to-second";
import { MinuteToHour } from "@ilihub/minute-to-hour";
import { MinuteToDay } from "@ilihub/minute-to-day";
import { MinuteToWeek } from "@ilihub/minute-to-week";
import { MinuteToMonth } from "@ilihub/minute-to-month";
import { MinuteToYear } from "@ilihub/minute-to-year";
import { MinuteToDecade } from "@ilihub/minute-to-decade";
import { MinuteToCentury } from "@ilihub/minute-to-century";

/**
 * Represents a minute measurement.
 */
export class Minute {
  /**
   * Creates a new instance of Minute.
   *
   * @param minute - The number of minutes.
   *
   * @example
   * ```typescript
   * const minute = new Minute(1);
   * ```
   */
  constructor(private readonly minute: number) {}

  /**
   * Converts minutes to milliseconds.
   *
   * @returns The number of milliseconds.
   *
   * @example
   * ```typescript
   * const minute = new Minute(1);
   * const milliseconds = minute.toMillisecond();
   * ```
   */
  public toMillisecond(): number {
    return MinuteToMillisecond(this.minute);
  }

  /**
   * Converts minutes to seconds.
   *
   * @returns The number of seconds.
   *
   * @example
   * ```typescript
   * const minute = new Minute(1);
   * const seconds = minute.toSecond();
   * ```
   */
  public toSecond(): number {
    return MinuteToSecond(this.minute);
  }

  /**
   * Converts minutes to hours.
   *
   * @returns The number of hours.
   *
   * @example
   * ```typescript
   * const minute = new Minute(60);
   * const hours = minute.toHour();
   * ```
   */
  public toHour(): number {
    return MinuteToHour(this.minute);
  }

  /**
   * Converts minutes to days.
   *
   * @returns The number of days.
   *
   * @example
   * ```typescript
   * const minute = new Minute(1440);
   * const days = minute.toDay();
   * ```
   */
  public toDay(): number {
    return MinuteToDay(this.minute);
  }

  /**
   * Converts minutes to weeks.
   *
   * @returns The number of weeks.
   *
   * @example
   * ```typescript
   * const minute = new Minute(10080);
   * const weeks = minute.toWeek();
   * ```
   */
  public toWeek(): number {
    return MinuteToWeek(this.minute);
  }

  /**
   * Converts minutes to months.
   *
   * @returns The number of months.
   *
   * @example
   * ```typescript
   * const minute = new Minute(43800);
   * const months = minute.toMonth();
   * ```
   */
  public toMonth(): number {
    return MinuteToMonth(this.minute);
  }

  /**
   * Converts minutes to years.
   *
   * @returns The number of years.
   *
   * @example
   * ```typescript
   * const minute = new Minute(525600);
   * const years = minute.toYear();
   * ```
   */
  public toYear(): number {
    return MinuteToYear(this.minute);
  }

  /**
   * Converts minutes to decades.
   *
   * @returns The number of decades.
   *
   * @example
   * ```typescript
   * const minute = new Minute(5256000);
   * const decades = minute.toDecade();
   * ```
   */
  public toDecade(): number {
    return MinuteToDecade(this.minute);
  }

  /**
   * Converts minutes to centuries.
   *
   * @returns The number of centuries.
   *
   * @example
   * ```typescript
   * const minute = new Minute(52560000);
   * const centuries = minute.toCentury();
   * ```
   */
  public toCentury(): number {
    return MinuteToCentury(this.minute);
  }
}
