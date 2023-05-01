import { strings } from '../../src';

describe('strings.isNotNullOrEmpty', () => {
  test('null', () => {
    // Arrange.
    let actual: boolean = true;
    const expected: boolean = false;
    let input: any = null;

    // Act.
    actual = strings(input).isNotNullOrEmpty();

    // Assert.
    expect(actual).toBe(expected);
  });

  test('string', () => {
    // Arrange.
    let actual: boolean = true;
    const expected: boolean = false;

    // Act.
    actual = strings('').isNotNullOrEmpty();

    // Assert.
    expect(actual).toBe(expected);
  });
});
