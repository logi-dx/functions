export type DateTime = {
  second: number;
  minute: number;
  hour: number;
  day: number;
  month: number;
  year: number;
};

export const toDateTime = (input: Date): DateTime => {
  const second: number = input.getSeconds();
  const minute: number = input.getMinutes();
  const hour: number = input.getHours();
  const day: number = input.getDate();
  const month: number = input.getMonth() + 1;
  const year: number = input.getFullYear();

  return {
    second,
    minute,
    hour,
    day,
    month,
    year,
  };
};
