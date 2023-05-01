import { is } from '../../src';

test('is.anArray', () => {
  // Arrange.
  let actual: boolean = false;
  const expected: boolean = true;

  // Act.
  actual = is([]).anArray();

  // Assert.
  expect(actual).toBe(expected);
});
