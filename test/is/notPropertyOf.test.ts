import { is } from '../../src';

test('is.notPropertyOf', () => {
  // Arrange.
  let actual: boolean = false;
  const expected: boolean = true;

  // Act.
  actual = is({}).notPropertyOf('length');

  // Assert.
  expect(actual).toBe(expected);
});
