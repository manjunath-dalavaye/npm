import { ReaumurToKelvin } from "@ilihub/reaumur-to-kelvin";
import { ReaumurToCelsius } from "@ilihub/reaumur-to-celsius";
import { ReaumurToFahrenheit } from "@ilihub/reaumur-to-fahrenheit";
import { ReaumurToRankine } from "@ilihub/reaumur-to-rankine";
import { Reaumur } from "./reaumur";

jest.mock("@ilihub/reaumur-to-kelvin");
jest.mock("@ilihub/reaumur-to-celsius");
jest.mock("@ilihub/reaumur-to-fahrenheit");
jest.mock("@ilihub/reaumur-to-rankine");

describe("Reaumur", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("should convert to Kelvin", () => {
    const reaumur = new Reaumur(100);
    const kelvin = 398.15;
    (
      ReaumurToKelvin as jest.MockedFunction<typeof ReaumurToKelvin>
    ).mockReturnValue(kelvin);
    expect(reaumur.toKelvin()).toBe(kelvin);
    expect(ReaumurToKelvin).toHaveBeenCalledWith(100);
  });

  it("should convert to Celsius", () => {
    const reaumur = new Reaumur(80);
    const celsius = 100;
    (
      ReaumurToCelsius as jest.MockedFunction<typeof ReaumurToCelsius>
    ).mockReturnValue(celsius);
    expect(reaumur.toCelsius()).toBe(celsius);
    expect(ReaumurToCelsius).toHaveBeenCalledWith(80);
  });

  it("should convert to Fahrenheit", () => {
    const reaumur = new Reaumur(-40);
    const fahrenheit = -40;
    (
      ReaumurToFahrenheit as jest.MockedFunction<typeof ReaumurToFahrenheit>
    ).mockReturnValue(fahrenheit);
    expect(reaumur.toFahrenheit()).toBe(fahrenheit);
    expect(ReaumurToFahrenheit).toHaveBeenCalledWith(-40);
  });

  it("should convert to Rankine", () => {
    const reaumur = new Reaumur(0);
    const rankine = 491.67;
    (
      ReaumurToRankine as jest.MockedFunction<typeof ReaumurToRankine>
    ).mockReturnValue(rankine);
    expect(reaumur.toRankine()).toBe(rankine);
    expect(ReaumurToRankine).toHaveBeenCalledWith(0);
  });
});
