describe("Find Missing Letter", () => {
    it("lower case", () => {
      const actual = findMissingLetter(['a', 'b', 'c', 'd', 'f']);
      expect(actual).toEqual("e");
    });

    it("upper case", () => {
        const actual = findMissingLetter(['H', 'I', 'J', 'L', 'M']);
        expect(actual).toEqual("K");
      });
});



function findMissingLetter(array: string[]): string {
    let alphabet = 'abcdefghijklmnopqrstuvwxyz'
    if(!alphabet.includes(array[0])) {
        alphabet = alphabet.toLocaleUpperCase()
    }

    const startIndex = alphabet.indexOf(array[0])
    const endIndex = alphabet.indexOf(array[array.length - 1])
    const tragetRangeAlphabet = findRangeAlphabet(alphabet, startIndex, endIndex)
    return tragetRangeAlphabet.split('').filter(s => !array.includes(s)).toString()
}

function findRangeAlphabet(alphabet: string, start: number, end: number): string {
    return alphabet.substring(start, end + 1)
}