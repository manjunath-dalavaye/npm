import { Cone } from "./cone";

describe("Cone", () => {
  describe("with height provided", () => {
    it("calculates the volume of a cone with positive dimensions", () => {
      const cone = new Cone(5, 10, 8);
      expect(cone.volume()).toBeCloseTo(209.44);
    });

    it("calculates the curved surface area of a cone with positive dimensions", () => {
      const cone = new Cone(5, 10, 8);
      expect(cone.curvedSurfaceArea()).toBeCloseTo(157.08);
    });

    it("calculates the total surface area of a cone with positive dimensions", () => {
      const cone = new Cone(5, 10, 8);
      expect(cone.totalSurfaceArea()).toBeCloseTo(235.62);
    });
  });

  describe("without height provided", () => {
    it("calculates the volume of a cone with positive dimensions", () => {
      const cone = new Cone(5, 10);
      expect(cone.volume()).toBeCloseTo(226.72);
    });

    it("calculates the curved surface area of a cone with positive dimensions", () => {
      const cone = new Cone(5, 10);
      expect(cone.curvedSurfaceArea()).toBeCloseTo(157.08);
    });

    it("calculates the total surface area of a cone with positive dimensions", () => {
      const cone = new Cone(5, 10);
      expect(cone.totalSurfaceArea()).toBeCloseTo(235.62);
    });
  });

  describe("with invalid dimensions", () => {
    it("returns 0 when the radius is 0", () => {
      const cone = new Cone(0, 10);
      expect(cone.volume()).toBe(0);
      expect(cone.curvedSurfaceArea()).toBe(0);
      expect(cone.totalSurfaceArea()).toBe(0);
    });

    it("returns 0 when the slant height is 0", () => {
      const cone = new Cone(5, 0);
      expect(cone.volume()).toBe(0);
      expect(cone.curvedSurfaceArea()).toBe(0);
      expect(cone.totalSurfaceArea()).toBe(0);
    });

    it("returns 0 when the radius and slant height are 0", () => {
      const cone = new Cone(0, 0);
      expect(cone.volume()).toBe(0);
      expect(cone.curvedSurfaceArea()).toBe(0);
      expect(cone.totalSurfaceArea()).toBe(0);
    });

    it("returns 0 when the radius is negative", () => {
      const cone = new Cone(-5, 10);
      expect(cone.volume()).toBe(0);
      expect(cone.curvedSurfaceArea()).toBe(0);
      expect(cone.totalSurfaceArea()).toBe(0);
    });

    it("returns 0 when the slant height is negative", () => {
      const cone = new Cone(5, -10);
      expect(cone.volume()).toBe(0);
      expect(cone.curvedSurfaceArea()).toBe(0);
      expect(cone.totalSurfaceArea()).toBe(0);
    });

    it("returns 0 when the radius and slant height are negative", () => {
      const cone = new Cone(-5, -10);
      expect(cone.volume()).toBe(0);
      expect(cone.curvedSurfaceArea()).toBe(0);
      expect(cone.totalSurfaceArea()).toBe(0);
    });
  });
});
