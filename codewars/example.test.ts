describe("Math functions", () => {
    it("should multiply 5 by 3", () => {
      const result = multiply(5, 3);
      expect(result).toEqual(15);
    });
  
    it("should add 5 by 3", () => {
      const result = add(5, 3);
      expect(result).toEqual(8);
    });
});


function add(x: number, y: number): number {
    return x + y;
}

function multiply(x: number, y: number): number {
    return x * y;
}
