import { is } from '../../src';

test('propertyOf', () => {
  // Arrange.
  let actual: boolean = false;
  const expected: boolean = true;

  // Act.
  actual = is([]).propertyOf('length');

  // Assert.
  expect(actual).toBe(expected);
});
