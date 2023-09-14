describe("Find the unique number", () => {
  it("array length >= 3", () => {
    const actual = findUniq([1, 1, 1, 1, 0, 1, 1]);
    const actual2 = findUniq([0, 0.22, 0, 0, 0]);

    expect(actual).toEqual(0);
    expect(actual2).toEqual(0.22);
  });
});

export function findUniq(arr: number[]): number {
  const setNumbers = [...new Set(arr)];
  const freq = setNumbers.map((n) => arr.filter((v) => v === n).length);
  return setNumbers[freq.indexOf(1)];
}
