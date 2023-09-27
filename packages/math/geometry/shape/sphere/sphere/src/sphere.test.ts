import { CircumferenceOfSphere } from "@ilihub/circumference-of-sphere";
import { SurfaceAreaOfSphere } from "@ilihub/surface-area-of-sphere";
import { VolumeOfSphere } from "@ilihub/volume-of-sphere";
import { Sphere } from "./sphere";

jest.mock("@ilihub/circumference-of-sphere");
jest.mock("@ilihub/surface-area-of-sphere");
jest.mock("@ilihub/volume-of-sphere");

describe("Sphere", () => {
  describe("circumference", () => {
    it("should call CircumferenceOfSphere with the correct arguments", () => {
      const sphere = new Sphere(5);
      sphere.circumference();
      expect(CircumferenceOfSphere).toHaveBeenCalledWith(5);
    });

    it("should return the result of CircumferenceOfSphere", () => {
      (CircumferenceOfSphere as jest.Mock).mockReturnValueOnce(
        31.41592653589793,
      );
      const sphere = new Sphere(5);
      const result = sphere.circumference();
      expect(result).toBe(31.41592653589793);
    });
  });

  describe("surfaceArea", () => {
    it("should call SurfaceAreaOfSphere with the correct arguments", () => {
      const sphere = new Sphere(5);
      sphere.surfaceArea();
      expect(SurfaceAreaOfSphere).toHaveBeenCalledWith(5);
    });

    it("should return the result of SurfaceAreaOfSphere", () => {
      (SurfaceAreaOfSphere as jest.Mock).mockReturnValueOnce(314.1592653589793);
      const sphere = new Sphere(5);
      const result = sphere.surfaceArea();
      expect(result).toBe(314.1592653589793);
    });
  });

  describe("volume", () => {
    it("should call VolumeOfSphere with the correct arguments", () => {
      const sphere = new Sphere(5);
      sphere.volume();
      expect(VolumeOfSphere).toHaveBeenCalledWith(5);
    });

    it("should return the result of VolumeOfSphere", () => {
      (VolumeOfSphere as jest.Mock).mockReturnValueOnce(523.5987755982989);
      const sphere = new Sphere(5);
      const result = sphere.volume();
      expect(result).toBe(523.5987755982989);
    });
  });
});
