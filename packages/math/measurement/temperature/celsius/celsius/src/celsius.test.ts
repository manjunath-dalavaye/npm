import { CelsiusToKelvin } from "@ilihub/celsius-to-kelvin";
import { CelsiusToFahrenheit } from "@ilihub/celsius-to-fahrenheit";
import { CelsiusToRankine } from "@ilihub/celsius-to-rankine";
import { CelsiusToReaumur } from "@ilihub/celsius-to-reaumur";
import { Celsius } from "./celsius";

jest.mock("@ilihub/celsius-to-kelvin");
jest.mock("@ilihub/celsius-to-fahrenheit");
jest.mock("@ilihub/celsius-to-rankine");
jest.mock("@ilihub/celsius-to-reaumur");

describe("Celsius", () => {
  beforeEach(() => {
    (CelsiusToKelvin as jest.Mock).mockClear();
    (CelsiusToFahrenheit as jest.Mock).mockClear();
    (CelsiusToRankine as jest.Mock).mockClear();
    (CelsiusToReaumur as jest.Mock).mockClear();
  });

  it("should convert to Kelvin", () => {
    const celsius = new Celsius(25);
    const kelvin = 298.15;
    (CelsiusToKelvin as jest.Mock).mockReturnValue(kelvin);
    expect(celsius.toKelvin()).toBe(kelvin);
    expect(CelsiusToKelvin).toHaveBeenCalledWith(25);
  });

  it("should convert to Fahrenheit", () => {
    const celsius = new Celsius(25);
    const fahrenheit = 77;
    (CelsiusToFahrenheit as jest.Mock).mockReturnValue(fahrenheit);
    expect(celsius.toFahrenheit()).toBe(fahrenheit);
    expect(CelsiusToFahrenheit).toHaveBeenCalledWith(25);
  });

  it("should convert to Rankine", () => {
    const celsius = new Celsius(25);
    const rankine = 558.27;
    (CelsiusToRankine as jest.Mock).mockReturnValue(rankine);
    expect(celsius.toRankine()).toBe(rankine);
    expect(CelsiusToRankine).toHaveBeenCalledWith(25);
  });

  it("should convert to Réaumur", () => {
    const celsius = new Celsius(25);
    const reaumur = 20;
    (CelsiusToReaumur as jest.Mock).mockReturnValue(reaumur);
    expect(celsius.toReaumur()).toBe(reaumur);
    expect(CelsiusToReaumur).toHaveBeenCalledWith(25);
  });
});
