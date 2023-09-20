describe("Sum numbers", () => {
  test("when text not include number", () => {
    const actual = sumNumbers("hello");
    expect(actual).toEqual(0);
  });

  test("when text include a number", () => {
    const actual = sumNumbers("hello12");
    expect(actual).toEqual(0);
  });

  test("when text include numbers", () => {
    const actual = sumNumbers("hello 1st 12 12");
    expect(actual).toEqual(24);
  });
});

function sumNumbers(text: string): number {
  return text.split(" ").reduce((a, b) => a + toNumber(b), 0);
}

const toNumber = (str: string): number => {
  const num = Number(str);
  return Number.isNaN(num) ? 0 : num;
};
