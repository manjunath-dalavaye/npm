import { KelvinToCelsius } from "@ilihub/kelvin-to-celsius";
import { KelvinToFahrenheit } from "@ilihub/kelvin-to-fahrenheit";
import { KelvinToRankine } from "@ilihub/kelvin-to-rankine";
import { KelvinToReaumur } from "@ilihub/kelvin-to-reaumur";
import { Kelvin } from "./kelvin";

jest.mock("@ilihub/kelvin-to-celsius");
jest.mock("@ilihub/kelvin-to-fahrenheit");
jest.mock("@ilihub/kelvin-to-rankine");
jest.mock("@ilihub/kelvin-to-reaumur");

describe("Kelvin", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("should convert to Celsius", () => {
    const kelvin = new Kelvin(300);
    (KelvinToCelsius as jest.Mock).mockReturnValueOnce(26.85);
    const celsius = kelvin.toCelsius();
    expect(celsius).toBe(26.85);
    expect(KelvinToCelsius).toHaveBeenCalledWith(300);
  });

  it("should convert to Fahrenheit", () => {
    const kelvin = new Kelvin(300);
    (KelvinToFahrenheit as jest.Mock).mockReturnValueOnce(80.33);
    const fahrenheit = kelvin.toFahrenheit();
    expect(fahrenheit).toBe(80.33);
    expect(KelvinToFahrenheit).toHaveBeenCalledWith(300);
  });

  it("should convert to Rankine", () => {
    const kelvin = new Kelvin(300);
    (KelvinToRankine as jest.Mock).mockReturnValueOnce(540);
    const rankine = kelvin.toRankine();
    expect(rankine).toBe(540);
    expect(KelvinToRankine).toHaveBeenCalledWith(300);
  });

  it("should convert to Réaumur", () => {
    const kelvin = new Kelvin(300);
    (KelvinToReaumur as jest.Mock).mockReturnValueOnce(20.4);
    const reaumur = kelvin.toReaumur();
    expect(reaumur).toBe(20.4);
    expect(KelvinToReaumur).toHaveBeenCalledWith(300);
  });
});
