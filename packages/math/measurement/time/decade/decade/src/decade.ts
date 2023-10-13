import { DecadeToMillisecond } from "@ilihub/decade-to-millisecond";
import { DecadeToSecond } from "@ilihub/decade-to-second";
import { DecadeToMinute } from "@ilihub/decade-to-minute";
import { DecadeToHour } from "@ilihub/decade-to-hour";
import { DecadeToDay } from "@ilihub/decade-to-day";
import { DecadeToWeek } from "@ilihub/decade-to-week";
import { DecadeToMonth } from "@ilihub/decade-to-month";
import { DecadeToYear } from "@ilihub/decade-to-year";
import { DecadeToCentury } from "@ilihub/decade-to-century";

/**
 * Represents a decade measurement.
 */
export class Decade {
  /**
   * Creates a new instance of Decade.
   *
   * @param decade - The number of decades to be represented.
   *
   * @example
   * ```typescript
   * const decade = new Decade(2);
   * ```
   */
  constructor(private readonly decade: number) {}

  /**
   * Converts the decade measurement to milliseconds.
   *
   * @returns The number of milliseconds in the decade measurement.
   *
   * @example
   * ```typescript
   * const decade = new Decade(2);
   * const milliseconds = decade.toMillisecond();
   * ```
   */
  public toMillisecond(): number {
    return DecadeToMillisecond(this.decade);
  }

  /**
   * Converts the decade measurement to seconds.
   *
   * @returns The number of seconds in the decade measurement.
   *
   * @example
   * ```typescript
   * const decade = new Decade(2);
   * const seconds = decade.toSecond();
   * ```
   */
  public toSecond(): number {
    return DecadeToSecond(this.decade);
  }

  /**
   * Converts the decade measurement to minutes.
   *
   * @returns The number of minutes in the decade measurement.
   *
   * @example
   * ```typescript
   * const decade = new Decade(2);
   * const minutes = decade.toMinute();
   * ```
   */
  public toMinute(): number {
    return DecadeToMinute(this.decade);
  }

  /**
   * Converts the decade measurement to hours.
   *
   * @returns The number of hours in the decade measurement.
   *
   * @example
   * ```typescript
   * const decade = new Decade(2);
   * const hours = decade.toHour();
   * ```
   */
  public toHour(): number {
    return DecadeToHour(this.decade);
  }

  /**
   * Converts the decade measurement to days.
   *
   * @returns The number of days in the decade measurement.
   *
   * @example
   * ```typescript
   * const decade = new Decade(2);
   * const days = decade.toDay();
   * ```
   */
  public toDay(): number {
    return DecadeToDay(this.decade);
  }

  /**
   * Converts the decade measurement to weeks.
   *
   * @returns The number of weeks in the decade measurement.
   *
   * @example
   * ```typescript
   * const decade = new Decade(2);
   * const weeks = decade.toWeek();
   * ```
   */
  public toWeek(): number {
    return DecadeToWeek(this.decade);
  }

  /**
   * Converts the decade measurement to months.
   *
   * @returns The number of months in the decade measurement.
   *
   * @example
   * ```typescript
   * const decade = new Decade(2);
   * const months = decade.toMonth();
   * ```
   */
  public toMonth(): number {
    return DecadeToMonth(this.decade);
  }

  /**
   * Converts the decade measurement to years.
   *
   * @returns The number of years in the decade measurement.
   *
   * @example
   * ```typescript
   * const decade = new Decade(2);
   * const years = decade.toYear();
   * ```
   */
  public toYear(): number {
    return DecadeToYear(this.decade);
  }

  /**
   * Converts the decade measurement to centuries.
   *
   * @returns The number of centuries in the decade measurement.
   *
   * @example
   * ```typescript
   * const decade = new Decade(2);
   * const centuries = decade.toCentury();
   * ```
   */
  public toCentury(): number {
    return DecadeToCentury(this.decade);
  }
}
