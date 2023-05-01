import { strings } from '../../src';

describe('strings.isNullOrEmpty', () => {
  test('null', () => {
    // Arrange.
    let actual: boolean = false;
    const expected: boolean = true;
    let input: any = null;

    // Act.
    actual = strings(input).isNullOrEmpty();

    // Assert.
    expect(actual).toBe(expected);
  });

  test('string', () => {
    // Arrange.
    let actual: boolean;
    const expected: boolean = true;

    // Act.
    actual = strings('').isNullOrEmpty();

    // Assert.
    expect(actual).toBe(expected);
  });
});
