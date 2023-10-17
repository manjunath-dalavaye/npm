import { Rankine } from "./rankine";
import { RankineToKelvin } from "@ilihub/rankine-to-kelvin";
import { RankineToCelsius } from "@ilihub/rankine-to-celsius";
import { RankineToFahrenheit } from "@ilihub/rankine-to-fahrenheit";
import { RankineToReaumur } from "@ilihub/rankine-to-reaumur";

jest.mock("@ilihub/rankine-to-kelvin");
jest.mock("@ilihub/rankine-to-celsius");
jest.mock("@ilihub/rankine-to-fahrenheit");
jest.mock("@ilihub/rankine-to-reaumur");

describe("Rankine", () => {
  beforeEach(() => {
    (RankineToKelvin as jest.Mock).mockClear();
    (RankineToCelsius as jest.Mock).mockClear();
    (RankineToFahrenheit as jest.Mock).mockClear();
    (RankineToReaumur as jest.Mock).mockClear();
  });

  it("should convert 491.67 Rankine to 273.15 Kelvin", () => {
    (RankineToKelvin as jest.Mock).mockReturnValueOnce(273.15);
    const rankine = new Rankine(491.67);
    const kelvin = rankine.toKelvin();
    expect(kelvin).toBe(273.15);
    expect(RankineToKelvin).toHaveBeenCalledWith(491.67);
  });

  it("should convert 491.67 Rankine to 0 Celsius", () => {
    (RankineToCelsius as jest.Mock).mockReturnValueOnce(0);
    const rankine = new Rankine(491.67);
    const celsius = rankine.toCelsius();
    expect(celsius).toBe(0);
    expect(RankineToCelsius).toHaveBeenCalledWith(491.67);
  });

  it("should convert 491.67 Rankine to 32 Fahrenheit", () => {
    (RankineToFahrenheit as jest.Mock).mockReturnValueOnce(32);
    const rankine = new Rankine(491.67);
    const fahrenheit = rankine.toFahrenheit();
    expect(fahrenheit).toBe(32);
    expect(RankineToFahrenheit).toHaveBeenCalledWith(491.67);
  });

  it("should convert 491.67 Rankine to 0 Réaumur", () => {
    (RankineToReaumur as jest.Mock).mockReturnValueOnce(0);
    const rankine = new Rankine(491.67);
    const reaumur = rankine.toReaumur();
    expect(reaumur).toBe(0);
    expect(RankineToReaumur).toHaveBeenCalledWith(491.67);
  });
});
