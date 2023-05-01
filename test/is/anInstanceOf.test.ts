import { is } from '../../src';

test('is.anInstanceOf', () => {
  // Arrange.
  const expected: boolean = true;
  let actual: boolean = false;

  // Act.
  class TestableClass {}
  actual = is(new TestableClass()).anInstanceOf(TestableClass);

  // Assert.
  expect(actual).toBe(expected);
});
