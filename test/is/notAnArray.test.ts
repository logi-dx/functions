import { is } from '../../src';

test('is.notAnArray', () => {
  // Arrange.
  let actual: boolean = false;
  const expected: boolean = true;

  // Act.
  actual = is({}).notAnArray();

  // Assert.
  expect(actual).toBe(expected);
});
