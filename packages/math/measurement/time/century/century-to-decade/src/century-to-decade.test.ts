import { CenturyToDecade, CenturiesToDecades } from "./century-to-decade";

describe("CenturyToDecade", () => {
  it("should convert 1 century to 10 decades", () => {
    const centuries = 1;
    const expectedDecades = 10;
    const actualDecades = CenturyToDecade(centuries);
    expect(actualDecades).toBe(expectedDecades);
  });

  it("should convert 2 centuries to 20 decades", () => {
    const centuries = 2;
    const expectedDecades = 20;
    const actualDecades = CenturyToDecade(centuries);
    expect(actualDecades).toBe(expectedDecades);
  });
});

describe("CenturiesToDecades", () => {
  it("should be an alias of CenturyToDecade", () => {
    expect(CenturiesToDecades).toBe(CenturyToDecade);
  });
});
