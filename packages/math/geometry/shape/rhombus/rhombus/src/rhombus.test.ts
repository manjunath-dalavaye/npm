import { AreaOfRhombus } from "@ilihub/area-of-rhombus";
import { PerimeterOfRhombus } from "@ilihub/perimeter-of-rhombus";
import { Rhombus } from "./rhombus";

jest.mock("@ilihub/area-of-rhombus");
jest.mock("@ilihub/perimeter-of-rhombus");

describe("Rhombus", () => {
  describe("area", () => {
    it("should call AreaOfRhombus with the correct arguments", () => {
      const rhombus = new Rhombus();
      rhombus.area(5, 10);
      expect(AreaOfRhombus).toHaveBeenCalledWith(5, 10);
    });

    it("should return the result of AreaOfRhombus", () => {
      (AreaOfRhombus as jest.Mock).mockReturnValueOnce(50);
      const rhombus = new Rhombus();
      const result = rhombus.area(5, 10);
      expect(result).toBe(50);
    });
  });

  describe("perimeter", () => {
    it("should call PerimeterOfRhombus with the correct arguments", () => {
      const rhombus = new Rhombus();
      rhombus.perimeter(5);
      expect(PerimeterOfRhombus).toHaveBeenCalledWith(5);
    });

    it("should return the result of PerimeterOfRhombus", () => {
      (PerimeterOfRhombus as jest.Mock).mockReturnValueOnce(20);
      const rhombus = new Rhombus();
      const result = rhombus.perimeter(5);
      expect(result).toBe(20);
    });
  });
});
