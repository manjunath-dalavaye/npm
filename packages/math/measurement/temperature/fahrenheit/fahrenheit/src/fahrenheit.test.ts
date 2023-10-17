import { Fahrenheit } from "./fahrenheit";
import { FahrenheitToKelvin } from "@ilihub/fahrenheit-to-kelvin";
import { FahrenheitToCelsius } from "@ilihub/fahrenheit-to-celsius";
import { FahrenheitToRankine } from "@ilihub/fahrenheit-to-rankine";
import { FahrenheitToReaumur } from "@ilihub/fahrenheit-to-reaumur";

jest.mock("@ilihub/fahrenheit-to-kelvin");
jest.mock("@ilihub/fahrenheit-to-celsius");
jest.mock("@ilihub/fahrenheit-to-rankine");
jest.mock("@ilihub/fahrenheit-to-reaumur");

describe("Fahrenheit", () => {
  beforeEach(() => {
    (FahrenheitToKelvin as jest.Mock).mockClear();
    (FahrenheitToCelsius as jest.Mock).mockClear();
    (FahrenheitToRankine as jest.Mock).mockClear();
    (FahrenheitToReaumur as jest.Mock).mockClear();
  });

  it("should convert to Kelvin", () => {
    const fahrenheit = new Fahrenheit(77);
    (FahrenheitToKelvin as jest.Mock).mockReturnValueOnce(298.15);
    const kelvin = fahrenheit.toKelvin();
    expect(kelvin).toBe(298.15);
    expect(FahrenheitToKelvin).toHaveBeenCalledWith(77);
  });

  it("should convert to Celsius", () => {
    const fahrenheit = new Fahrenheit(77);
    (FahrenheitToCelsius as jest.Mock).mockReturnValueOnce(25);
    const celsius = fahrenheit.toCelsius();
    expect(celsius).toBe(25);
    expect(FahrenheitToCelsius).toHaveBeenCalledWith(77);
  });

  it("should convert to Rankine", () => {
    const fahrenheit = new Fahrenheit(77);
    (FahrenheitToRankine as jest.Mock).mockReturnValueOnce(536.67);
    const rankine = fahrenheit.toRankine();
    expect(rankine).toBe(536.67);
    expect(FahrenheitToRankine).toHaveBeenCalledWith(77);
  });

  it("should convert to Réaumur", () => {
    const fahrenheit = new Fahrenheit(77);
    (FahrenheitToReaumur as jest.Mock).mockReturnValueOnce(15.555555555555555);
    const reaumur = fahrenheit.toReaumur();
    expect(reaumur).toBe(15.555555555555555);
    expect(FahrenheitToReaumur).toHaveBeenCalledWith(77);
  });
});
