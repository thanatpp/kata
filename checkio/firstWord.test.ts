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

  test("when input is sentence and hanve space first", () => {
    const actual = firstWord(" a hey guy");
    expect(actual).toEqual("a");
  });

  test("when input is sentence include special character", () => {
    const actual = firstWord("hi, hey guy");
    const actual2 = firstWord("... a hey guy ...");
    const actual3 = firstWord("hello.hello");

    expect(actual).toEqual("hi");
    expect(actual2).toEqual("a");
    expect(actual3).toEqual("hello");
  });
});

function firstWord(sentence: string): string {
  const words = sentence
    .replaceAll(",", " ")
    .replaceAll(".", " ")
    .trim()
    .split(" ");
  return words[0];
}
