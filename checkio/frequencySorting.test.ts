describe("Frequency sorting", () => {
  test("when input is empty array", () => {
    const actual = frequencySorting([]);
    expect(actual).toEqual([]);
  });

  test("sorting without frequency", () => {
    const actual = frequencySorting([4, 1, 2, 3]);
    expect(actual).toEqual([1, 2, 3, 4]);
  });

  test("sorting with frequency", () => {
    const actual = frequencySorting([3, 3, 4, 4, 4, 1, 2]);
    expect(actual).toEqual([4, 4, 4, 3, 3, 1, 2]);
  });
});

function frequencySorting(numbers: number[]): number[] {
  if (numbers.length === 0) {
    return [];
  }
  const mapFreq = new Map<number, number>();
  numbers.forEach((n) => {
    if (!mapFreq.has(n)) {
      const length = numbers.filter((v) => v === n).length;
      mapFreq.set(n, length);
    }
  });
  return numbers.sort(freqCompare(mapFreq));
}

function freqCompare(
  mapFreq: Map<number, number>
): ((a: number, b: number) => number) | undefined {
  return (a, b) => {
    const frqA = mapFreq.get(a) ?? 1;
    const frqB = mapFreq.get(b) ?? 1;
    if (frqA > frqB) {
      return a;
    } else if (frqB > frqA) {
      return b;
    }
    return a - b;
  };
}
