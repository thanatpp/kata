describe("First word", () => {
  test("when input is empty string", () => {
    const actual = firstWord("");
    expect(actual).toEqual("");
  });

  test("when input is word", () => {
    const actual = firstWord("hi");
    expect(actual).toEqual("hi");
  });

  test("when input is sentence", () => {
    const actual = firstWord("hey guy");
    expect(actual).toEqual("hey");
  });
});

function firstWord(sentence: string): string {
  return sentence.split(" ")[0];
}
