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
  return is3ConsecutiveWords(text);
}

const is3ConsecutiveWords = (text: string): boolean => {
  let numberConsecutiveWords = 0;
  for (const s of text.split(" ")) {
    if (numberConsecutiveWords === 3) {
      break;
    }
    if (!isNumber(s)) {
      numberConsecutiveWords++;
      continue;
    }
    numberConsecutiveWords = 0;
  }
  return numberConsecutiveWords >= 3;
};

const isNumber = (text: string): boolean => {
  return !Number.isNaN(Number(text));
};
