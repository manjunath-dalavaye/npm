import { CenturyToMillisecond } from "@ilihub/century-to-millisecond";
import { CenturyToSecond } from "@ilihub/century-to-second";
import { CenturyToMinute } from "@ilihub/century-to-minute";
import { CenturyToHour } from "@ilihub/century-to-hour";
import { CenturyToDay } from "@ilihub/century-to-day";
import { CenturyToWeek } from "@ilihub/century-to-week";
import { CenturyToMonth } from "@ilihub/century-to-month";
import { CenturyToYear } from "@ilihub/century-to-year";
import { CenturyToDecade } from "@ilihub/century-to-decade";

/**
 * Represents a century measurement.
 */
export class Century {
  /**
   * Creates a new instance of the Century class.
   *
   * @param century - The number of centuries to be represented.
   *
   * @example
   * ```typescript
   * const century = new Century(2);
   * ```
   */
  constructor(private readonly century: number) {}

  /**
   * Converts the century measurement to milliseconds.
   *
   * @returns The number of milliseconds in the century.
   *
   * @example
   * ```typescript
   * const century = new Century(2);
   * const milliseconds = century.toMillisecond();
   * ```
   */
  public toMillisecond(): number {
    return CenturyToMillisecond(this.century);
  }

  /**
   * Converts the century measurement to seconds.
   *
   * @returns The number of seconds in the century.
   *
   * @example
   * ```typescript
   * const century = new Century(2);
   * const seconds = century.toSecond();
   * ```
   */
  public toSecond(): number {
    return CenturyToSecond(this.century);
  }

  /**
   * Converts the century measurement to minutes.
   *
   * @returns The number of minutes in the century.
   *
   * @example
   * ```typescript
   * const century = new Century(2);
   * const minutes = century.toMinute();
   * ```
   */
  public toMinute(): number {
    return CenturyToMinute(this.century);
  }

  /**
   * Converts the century measurement to hours.
   *
   * @returns The number of hours in the century.
   *
   * @example
   * ```typescript
   * const century = new Century(2);
   * const hours = century.toHour();
   * ```
   */
  public toHour(): number {
    return CenturyToHour(this.century);
  }

  /**
   * Converts the century measurement to days.
   *
   * @returns The number of days in the century.
   *
   * @example
   * ```typescript
   * const century = new Century(2);
   * const days = century.toDay();
   * ```
   */
  public toDay(): number {
    return CenturyToDay(this.century);
  }

  /**
   * Converts the century measurement to weeks.
   *
   * @returns The number of weeks in the century.
   *
   * @example
   * ```typescript
   * const century = new Century(2);
   * const weeks = century.toWeek();
   * ```
   */
  public toWeek(): number {
    return CenturyToWeek(this.century);
  }

  /**
   * Converts the century measurement to months.
   *
   * @returns The number of months in the century.
   *
   * @example
   * ```typescript
   * const century = new Century(2);
   * const months = century.toMonth();
   * ```
   */
  public toMonth(): number {
    return CenturyToMonth(this.century);
  }

  /**
   * Converts the century measurement to years.
   *
   * @returns The number of years in the century.
   *
   * @example
   * ```typescript
   * const century = new Century(2);
   * const years = century.toYear();
   * ```
   */
  public toYear(): number {
    return CenturyToYear(this.century);
  }

  /**
   * Converts the century measurement to decades.
   *
   * @returns The number of decades in the century.
   *
   * @example
   * ```typescript
   * const century = new Century(2);
   * const decades = century.toDecade();
   * ```
   */
  public toDecade(): number {
    return CenturyToDecade(this.century);
  }
}
