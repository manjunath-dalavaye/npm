import { CircumferenceOfSphere } from "@ilihub/circumference-of-sphere";
import { SurfaceAreaOfSphere } from "@ilihub/surface-area-of-sphere";
import { VolumeOfSphere } from "@ilihub/volume-of-sphere";

/**
 * Represents a sphere in 3D space.
 */
export class Sphere {
  /**
   * The radius of the sphere.
   */
  private radius: number;

  /**
   * Creates a new sphere with the given radius.
   *
   * @param radius - The radius of the sphere.
   *
   * @example
   * ```typescript
   * const sphere = new Sphere(5);
   * ```
   */
  constructor(radius: number) {
    this.radius = radius;
  }

  /**
   * Calculates the circumference of the sphere.
   *
   * @returns The circumference of the sphere.
   *
   * @example
   * ```typescript
   * const sphere = new Sphere(5);
   * const circumference = sphere.circumference(); // returns 31.41592653589793
   * ```
   */
  public circumference(): number {
    return CircumferenceOfSphere(this.radius);
  }

  /**
   * Calculates the surface area of the sphere.
   *
   * @returns The surface area of the sphere.
   *
   * @example
   * ```typescript
   * const sphere = new Sphere(5);
   * const surfaceArea = sphere.surfaceArea(); // returns 314.1592653589793
   * ```
   */
  public surfaceArea(): number {
    return SurfaceAreaOfSphere(this.radius);
  }

  /**
   * Calculates the volume of the sphere.
   *
   * @returns The volume of the sphere.
   *
   * @example
   * ```typescript
   * const sphere = new Sphere(5);
   * const volume = sphere.volume(); // returns 523.5987755982989
   * ```
   */
  public volume(): number {
    return VolumeOfSphere(this.radius);
  }
}
