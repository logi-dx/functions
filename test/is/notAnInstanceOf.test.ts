import { is } from '../../src';

test('is.notAnInstanceOf', () => {
  // Arrange.
  const expected: boolean = true;
  let actual: boolean = false;

  // Act.
  class TestableClass {}
  class OtherTestableClass {}
  actual = is(new TestableClass()).notAnInstanceOf(OtherTestableClass);

  // Assert.
  expect(actual).toBe(expected);
});
