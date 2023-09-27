import { Cube } from "./cube";

describe("Cube", () => {
  describe("diagonal", () => {
    it("should return the correct diagonal", () => {
      const cube = new Cube(5);
      expect(cube.diagonal()).toBeCloseTo(8.660254037844386);
    });
  });

  describe("lateralSurfaceArea", () => {
    it("should return the correct lateral surface area", () => {
      const cube = new Cube(5);
      expect(cube.lateralSurfaceArea()).toBe(100);
    });
  });

  describe("totalSurfaceArea", () => {
    it("should return the correct total surface area", () => {
      const cube = new Cube(5);
      expect(cube.totalSurfaceArea()).toBe(150);
    });
  });

  describe("volume", () => {
    it("should return the correct volume", () => {
      const cube = new Cube(5);
      expect(cube.volume()).toBe(125);
    });
  });
});
