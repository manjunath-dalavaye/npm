import { AreaOfParallelogram } from "@ilihub/area-of-parallelogram";
import { PerimeterOfParallelogram } from "@ilihub/perimeter-of-parallelogram";
import { Parallelogram } from "./parallelogram";

jest.mock("@ilihub/area-of-parallelogram");
jest.mock("@ilihub/perimeter-of-parallelogram");

describe("Parallelogram", () => {
  describe("area", () => {
    it("should call AreaOfParallelogram with the correct arguments", () => {
      const parallelogram = new Parallelogram();
      parallelogram.area(5, 10);
      expect(AreaOfParallelogram).toHaveBeenCalledWith(5, 10);
    });

    it("should return the result of AreaOfParallelogram", () => {
      (AreaOfParallelogram as jest.Mock).mockReturnValueOnce(50);
      const parallelogram = new Parallelogram();
      const result = parallelogram.area(5, 10);
      expect(result).toBe(50);
    });
  });

  describe("perimeter", () => {
    it("should call PerimeterOfParallelogram with the correct arguments", () => {
      const parallelogram = new Parallelogram();
      parallelogram.perimeter(5, 10);
      expect(PerimeterOfParallelogram).toHaveBeenCalledWith(5, 10);
    });

    it("should return the result of PerimeterOfParallelogram", () => {
      (PerimeterOfParallelogram as jest.Mock).mockReturnValueOnce(30);
      const parallelogram = new Parallelogram();
      const result = parallelogram.perimeter(5, 10);
      expect(result).toBe(30);
    });
  });
});
