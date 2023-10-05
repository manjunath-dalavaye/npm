import { Cuboid } from "./cuboid";

describe("Cuboid", () => {
  describe("lateralSurfaceArea", () => {
    it("calculates the lateral surface area of a cuboid with positive dimensions", () => {
      const cuboid = new Cuboid(5, 3, 2);
      expect(cuboid.lateralSurfaceArea()).toBe(32);
    });

    it("calculates the lateral surface area of a cuboid with all sides equal", () => {
      const cuboid = new Cuboid(2, 2, 2);
      expect(cuboid.lateralSurfaceArea()).toBe(16);
    });

    it("returns 0 when any dimension is 0", () => {
      const cuboid = new Cuboid(5, 0, 2);
      expect(cuboid.lateralSurfaceArea()).toBe(0);
    });

    it("returns 0 when any dimension is negative", () => {
      const cuboid = new Cuboid(-5, 3, 2);
      expect(cuboid.lateralSurfaceArea()).toBe(0);
    });
  });

  describe("perimeter", () => {
    it("calculates the perimeter of a cuboid with positive dimensions", () => {
      const cuboid = new Cuboid(5, 3, 2);
      expect(cuboid.perimeter()).toBe(40);
    });

    it("calculates the perimeter of a cuboid with all sides equal", () => {
      const cuboid = new Cuboid(2, 2, 2);
      expect(cuboid.perimeter()).toBe(24);
    });

    it("returns 0 when any dimension is 0", () => {
      const cuboid = new Cuboid(5, 0, 2);
      expect(cuboid.perimeter()).toBe(0);
    });

    it("returns 0 when any dimension is negative", () => {
      const cuboid = new Cuboid(-5, 3, 2);
      expect(cuboid.perimeter()).toBe(0);
    });
  });

  describe("surfaceArea", () => {
    it("calculates the surface area of a cuboid with positive dimensions", () => {
      const cuboid = new Cuboid(5, 3, 2);
      expect(cuboid.surfaceArea()).toBe(62);
    });

    it("calculates the surface area of a cuboid with all sides equal", () => {
      const cuboid = new Cuboid(2, 2, 2);
      expect(cuboid.surfaceArea()).toBe(24);
    });

    it("returns 0 when any dimension is 0", () => {
      const cuboid = new Cuboid(5, 0, 2);
      expect(cuboid.surfaceArea()).toBe(0);
    });

    it("returns 0 when any dimension is negative", () => {
      const cuboid = new Cuboid(-5, 3, 2);
      expect(cuboid.surfaceArea()).toBe(0);
    });
  });

  describe("totalSurfaceArea", () => {
    it("calculates the total surface area of a cuboid with positive dimensions", () => {
      const cuboid = new Cuboid(5, 3, 2);
      expect(cuboid.totalSurfaceArea()).toBe(62);
    });

    it("calculates the total surface area of a cuboid with all sides equal", () => {
      const cuboid = new Cuboid(2, 2, 2);
      expect(cuboid.totalSurfaceArea()).toBe(24);
    });

    it("returns 0 when any dimension is 0", () => {
      const cuboid = new Cuboid(5, 0, 2);
      expect(cuboid.totalSurfaceArea()).toBe(0);
    });

    it("returns 0 when any dimension is negative", () => {
      const cuboid = new Cuboid(-5, 3, 2);
      expect(cuboid.totalSurfaceArea()).toBe(0);
    });
  });

  describe("volume", () => {
    it("calculates the volume of a cuboid with positive dimensions", () => {
      const cuboid = new Cuboid(5, 3, 2);
      expect(cuboid.volume()).toBe(30);
    });

    it("calculates the volume of a cuboid with all sides equal", () => {
      const cuboid = new Cuboid(2, 2, 2);
      expect(cuboid.volume()).toBe(8);
    });

    it("returns 0 when any dimension is 0", () => {
      const cuboid = new Cuboid(5, 0, 2);
      expect(cuboid.volume()).toBe(0);
    });

    it("returns 0 when any dimension is negative", () => {
      const cuboid = new Cuboid(-5, 3, 2);
      expect(cuboid.volume()).toBe(0);
    });
  });
});
