describe("Spin words", () => {
    it("words length less than 5", () => {
      const actual = spinWords("test");
      expect(actual).toEqual("test");
    });

    it("words length equal and more than 5", () => {
        const actual = spinWords("hello");
        expect(actual).toEqual("olleh");
    });

    it("senetence inclues words less than 5 and equal and more than 5", () => {
        const actual = spinWords("hi hello");
        expect(actual).toEqual("hi olleh");
    });
});



export function spinWords(words: string): string {
    const splitWords = words.split(' ')
    const newSplitWords = splitWords.map((words) => {
        if(shouldSpinWord(words)) {
            return words.split('').reverse().join('')
        }
        return words
    })
    return newSplitWords.join(' ')
}

function shouldSpinWord(word: string) {
    return word.length >= 5
}