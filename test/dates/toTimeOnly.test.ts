import { dates } from '../../src';
import { TimeOnly } from '../../src/dates/toTimeOnly';

test('dates.toTimeOnly', () => {
  // Arrange.
  const date: Date = new Date();
  let actual: TimeOnly;
  const expected: TimeOnly = {
    second: date.getSeconds(),
    minute: date.getMinutes(),
    hour: date.getHours(),
  };

  // Act.
  actual = dates(date).toTimeOnly();

  // Assert.
  expect(actual).toStrictEqual(expected);
});
