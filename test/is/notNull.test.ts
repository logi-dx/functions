import { is } from '../../src';

test('is.notNull', () => {
  // Arrange.
  let actual: boolean = false;
  const expected: boolean = true;

  // Act.
  actual = is({}).notNull();

  // Assert.
  expect(actual).toBe(expected);
});
