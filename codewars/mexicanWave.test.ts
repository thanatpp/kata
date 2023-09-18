describe("Mexican wave", () => {
  it("when input empty string", () => {
    const actual = wave("");
    expect(actual).toEqual([]);
  });

  it("when input one word", () => {
    const actual = wave("hello");
    expect(actual).toEqual(["Hello", "hEllo", "heLlo", "helLo", "hellO"]);
  });

  it("when input more words", () => {
    const actual = wave("hello world");
    expect(actual).toEqual([
      "Hello world",
      "hEllo world",
      "heLlo world",
      "helLo world",
      "hellO world",
      "hello World",
      "hello wOrld",
      "hello woRld",
      "hello worLd",
      "hello worlD",
    ]);
  });
});

export function wave(str: string): string[] {
  if (str.trim().length > 0) {
    return createWave(str);
  }
  return [];
}

function createWave(str: string): string[] {
  const result = [];
  for (let i = 0; i < str.length; i++) {
    if (str.charAt(i).trim() === "") {
      continue;
    }
    const strList = str.split("");
    strList[i] = strList[i].toUpperCase();
    result.push(strList.join(""));
  }
  return result;
}
