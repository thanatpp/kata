describe("Three words", () => {
  test("empty words", () => {
    const actual = threeWords("");
    expect(actual).toEqual(false);
  });

  test("contain three words", () => {
    const actual = threeWords("hi hello yoyo");
    expect(actual).toEqual(true);
  });

  test("contain number in words", () => {
    const actual = threeWords("hi hello 11 yoyo");
    expect(actual).toEqual(false);
  });

  test("contain number in words and 3 consecutive words", () => {
    const actual = threeWords(
      "one two 3 four five six 7 eight 9 ten eleven 12"
    );
    expect(actual).toEqual(true);
  });
});

function threeWords(text: string): boolean {
  const words = text.split(" ");
  let isThreeWords = false;

  for (let i = 0; i < words.length - 2; i++) {
    if (
      !isNumber(words[i]) &&
      !isNumber(words[i + 1]) &&
      !isNumber(words[i + 2])
    ) {
      isThreeWords = true;
      break;
    }
  }

  return isThreeWords;
}

const isNumber = (text: string): boolean => {
  return !Number.isNaN(Number(text));
};
