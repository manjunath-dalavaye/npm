import { Cylinder } from "./cylinder";

describe("Cylinder", () => {
  describe("lateralSurfaceArea", () => {
    it("calculates the lateral surface area of a cylinder with positive dimensions", () => {
      const cylinder = new Cylinder(5, 10);
      expect(cylinder.lateralSurfaceArea()).toBeCloseTo(314.159);
    });

    it("returns 0 when the radius is 0", () => {
      const cylinder = new Cylinder(0, 10);
      expect(cylinder.lateralSurfaceArea()).toBe(0);
    });

    it("returns 0 when the height is 0", () => {
      const cylinder = new Cylinder(5, 0);
      expect(cylinder.lateralSurfaceArea()).toBe(0);
    });

    it("returns 0 when the radius and height are 0", () => {
      const cylinder = new Cylinder(0, 0);
      expect(cylinder.lateralSurfaceArea()).toBe(0);
    });

    it("returns 0 when the radius is negative", () => {
      const cylinder = new Cylinder(-5, 10);
      expect(cylinder.lateralSurfaceArea()).toBe(0);
    });

    it("returns 0 when the height is negative", () => {
      const cylinder = new Cylinder(5, -10);
      expect(cylinder.lateralSurfaceArea()).toBe(0);
    });

    it("returns 0 when the radius and height are negative", () => {
      const cylinder = new Cylinder(-5, -10);
      expect(cylinder.lateralSurfaceArea()).toBe(0);
    });
  });

  describe("totalSurfaceArea", () => {
    it("calculates the total surface area of a cylinder with positive dimensions", () => {
      const cylinder = new Cylinder(5, 10);
      expect(cylinder.totalSurfaceArea()).toBeCloseTo(471.239);
    });

    it("returns 0 when the radius is 0", () => {
      const cylinder = new Cylinder(0, 10);
      expect(cylinder.totalSurfaceArea()).toBe(0);
    });

    it("returns 0 when the height is 0", () => {
      const cylinder = new Cylinder(5, 0);
      expect(cylinder.totalSurfaceArea()).toBe(0);
    });

    it("returns 0 when the radius and height are 0", () => {
      const cylinder = new Cylinder(0, 0);
      expect(cylinder.totalSurfaceArea()).toBe(0);
    });

    it("returns 0 when the radius is negative", () => {
      const cylinder = new Cylinder(-5, 10);
      expect(cylinder.totalSurfaceArea()).toBe(0);
    });

    it("returns 0 when the height is negative", () => {
      const cylinder = new Cylinder(5, -10);
      expect(cylinder.totalSurfaceArea()).toBe(0);
    });

    it("returns 0 when the radius and height are negative", () => {
      const cylinder = new Cylinder(-5, -10);
      expect(cylinder.totalSurfaceArea()).toBe(0);
    });
  });

  describe("volume", () => {
    it("calculates the volume of a cylinder with positive dimensions", () => {
      const cylinder = new Cylinder(5, 10);
      expect(cylinder.volume()).toBeCloseTo(785.398);
    });

    it("returns 0 when the radius is 0", () => {
      const cylinder = new Cylinder(0, 10);
      expect(cylinder.volume()).toBe(0);
    });

    it("returns 0 when the height is 0", () => {
      const cylinder = new Cylinder(5, 0);
      expect(cylinder.volume()).toBe(0);
    });

    it("returns 0 when the radius and height are 0", () => {
      const cylinder = new Cylinder(0, 0);
      expect(cylinder.volume()).toBe(0);
    });

    it("returns 0 when the radius is negative", () => {
      const cylinder = new Cylinder(-5, 10);
      expect(cylinder.volume()).toBe(0);
    });

    it("returns 0 when the height is negative", () => {
      const cylinder = new Cylinder(5, -10);
      expect(cylinder.volume()).toBe(0);
    });

    it("returns 0 when the radius and height are negative", () => {
      const cylinder = new Cylinder(-5, -10);
      expect(cylinder.volume()).toBe(0);
    });
  });
});
