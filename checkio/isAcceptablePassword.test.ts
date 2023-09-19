describe("Is acceptable password", () => {
  test("when password is empty string", () => {
    const actual = isAcceptablePassword("");
    expect(actual).toEqual(false);
  });

  test("when password equal 6", () => {
    const actual = isAcceptablePassword("123456");
    expect(actual).toEqual(false);
  });

  test("when password more than 6", () => {
    const actual = isAcceptablePassword("12345678");
    expect(actual).toEqual(true);
  });
});

function isAcceptablePassword(password: string): boolean {
  return password.length > 6;
}
