import { DecadeToCentury, DecadesToCenturies } from "./decade-to-century";

describe("DecadeToCentury", () => {
  it("should convert 1 decade to 0.1 century", () => {
    const decades = 1;
    const expectedCenturies = 0.1;
    const actualCenturies = DecadeToCentury(decades);
    expect(actualCenturies).toBe(expectedCenturies);
  });

  it("should convert 2 decades to 0.2 century", () => {
    const decades = 2;
    const expectedCenturies = 0.2;
    const actualCenturies = DecadeToCentury(decades);
    expect(actualCenturies).toBe(expectedCenturies);
  });
});

describe("DecadesToCenturies", () => {
  it("should be an alias for DecadeToCentury", () => {
    expect(DecadesToCenturies).toBe(DecadeToCentury);
  });
});
